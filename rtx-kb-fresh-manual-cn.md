# ABS AI 用户手册（RTX PRO 6000 客户自部署版）

> 适用场景：客户只购买了搭载 NVIDIA RTX PRO 6000 Blackwell 96GB 的硬件，需要在一台全新的
> Ubuntu 主机上从零部署整套私有 AI 方案。
>
> 与原厂内部部署（全部 `systemctl` 管理）不同，本方案将：
> - **Qwen3.6-35B-A3B（vLLM）** 保留为 `systemctl` 裸机部署 —— 让推理进程独占、直接访问 GPU，不经过容器网络/存储层。
> - **其余四项服务（Rerank / Embedding / Mem0 / Telegram Bot）全部改为 Docker 部署** —— 便于客户一次性拉起、独立升级、不污染宿主机 Python 环境。
> - **Onyx** 维持官方的 Docker Compose 部署方式（Onyx 官方项目本身就是多容器 Docker 应用，无需重新实现）。

---

## 架构总览

```
[手机/PC 上的 Telegram]
        │  (长轮询，纯出站，无需公网 IP / 端口转发)
        ▼
┌─────────────────────┐
│  telegram-bot        │  Docker 容器，无监听端口
│  (Docker)             │
└──────────┬───────────┘
           │ HTTP
           ▼
┌─────────────────────┐        ┌─────────────────────┐
│  Onyx                 │ ────▶ │  qwen3-model-api      │  Docker 容器 :8888
│  (Docker, 官方 compose)│  LLM  │  (Docker) — vLLM 代理  │  内含 Mem0 + 内嵌 Qdrant
│  :3000                │  调用 │  + Mem0 REST 接口       │
└──────────┬───────────┘        └──────────┬───────────┘
           │ RAG 检索依赖                    │ 反向代理
           ▼                                ▼
┌─────────────────────┐        ┌─────────────────────┐
│ text-embedding-api    │        │  vLLM                 │
│ (Docker) :8881 [GPU]  │        │  (systemctl 裸机) :8880│
└─────────────────────┘        │  Qwen3.6-35B-A3B [GPU]│
┌─────────────────────┐        └─────────────────────┘
│ bge-reranker-api      │
│ (Docker) :8883 [GPU]  │
└─────────────────────┘
```

**四个核心组件的落地方式：**

| 组件 | 模型 | 部署方式 | 端口 |
|------|------|---------|------|
| 本地 LLM | Qwen3.6-35B-A3B | systemctl（裸机 + Python venv + vLLM） | 8880 |
| Rerank | bge-reranker-large | Docker | 8883 |
| Embedding | multilingual-e5-large | Docker | 8881 |
| Mem0 记忆层 + vLLM 代理 | — | Docker（`qwen3-model-api` 容器） | 8888 |
| 企业知识库 RAG | Onyx | Docker（官方 compose） | 3000 |
| 移动端入口 | Telegram Bot | Docker（长轮询，无入站端口） | — |

---

## 前提条件

- Ubuntu 22.04 LTS（本机直装或裸金属服务器；若在 WSL2 环境使用，Docker Desktop 亦可）
- NVIDIA RTX PRO 6000 Blackwell 96GB，已安装匹配的 NVIDIA 驱动（`nvidia-smi` 能正常输出）
- Docker Engine ≥ 24.0 及 Docker Compose v2（`docker compose version`）
- **NVIDIA Container Toolkit**（让 Docker 容器能访问 GPU）：
  ```bash
  curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg
  curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
    sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
    sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
  sudo apt-get update && sudo apt-get install -y nvidia-container-toolkit
  sudo nvidia-ctk runtime configure --runtime=docker
  sudo systemctl restart docker
  ```
  验证：`docker run --rm --gpus all nvidia/cuda:12.4.0-base-ubuntu22.04 nvidia-smi` 应正常显示显卡信息。
- Python 3.10+ 及 `python3-venv`（用于裸机部署 vLLM）
- 已获得 Hugging Face 访问权限，可下载 `Qwen/Qwen3.6-35B-A3B`

---

## 第一步：部署 Qwen3.6-35B-A3B（vLLM，systemctl 裸机）

### 1.1 创建 Python 虚拟环境

```bash
sudo mkdir -p /usr/local/vllm_env /models
sudo chown $USER:$USER /usr/local/vllm_env /models

python3 -m venv /usr/local/vllm_env
source /usr/local/vllm_env/bin/activate
pip install --upgrade pip
```

### 1.2 下载模型

```bash
curl -LsSf https://hf.co/cli/install.sh | bash
hf download Qwen/Qwen3.6-35B-A3B --local-dir /models/qwen3.6-35b-a3b
```

### 1.3 安装推理依赖

```bash
pip install torch torchvision torchaudio \
  --index-url https://download.pytorch.org/whl/cu128 \
  --trusted-host download.pytorch.org

pip install vllm==0.18.0
pip install transformers==5.0.0
```

### 1.4 启动脚本

```bash
sudo tee /usr/local/bin/start_vllm.sh > /dev/null <<'EOF'
#!/bin/bash
cd /usr/local/vllm_env
source /usr/local/vllm_env/bin/activate
export VLLM_USE_V1=0
python3 -m vllm.entrypoints.openai.api_server \
    --model /models/qwen3.6-35b-a3b \
    --dtype float16 \
    --gpu-memory-utilization 0.85 \
    --max-model-len 150000 \
    --gdn-prefill-backend triton \
    --port 8880 \
    --enable-auto-tool-choice \
    --tool-call-parser qwen3_coder \
    --default-chat-template-kwargs '{"enable_thinking": false}' \
    --served-model-name Qwen-On-Premise
EOF
sudo chmod +x /usr/local/bin/start_vllm.sh
```

> `--gpu-memory-utilization 0.85` 特意保留约 15% 显存（约 14GB），供后续 Docker 中的
> Rerank / Embedding 两个小模型共享同一张 GPU 使用——它们各自只需 1–2GB 显存。

### 1.5 systemd 服务

```bash
sudo tee /etc/systemd/system/vllm.service > /dev/null <<'EOF'
[Unit]
Description=vLLM Qwen3.6 35B API Service
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=root
ExecStart=/usr/local/bin/start_vllm.sh
Restart=always
RestartSec=10
TimeoutStartSec=600
LimitNOFILE=65535
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable vllm.service
sudo systemctl start vllm.service
sudo systemctl status vllm.service
```

验证：

```bash
curl http://localhost:8880/v1/models
```

---

## 第二步：Docker 部署 Rerank / Embedding / Mem0 / Telegram Bot

### 2.1 目录结构

本手册配套的 `docker-deploy/` 目录包含四个服务：

```
docker-deploy/
├── docker-compose.yml
├── .env.example
├── bge-reranker-api/       (Dockerfile, app.py, requirements.txt)
├── text-embedding-api/     (Dockerfile, text_embedding_api.py, requirements.txt)
├── qwen3-model-api/        (Dockerfile, qwen3_model_api.py, mem0_config.py, requirements.txt)
└── telegram-bot/           (Dockerfile, bot.py, requirements.txt, .env.example)
```

### 2.2 下载 Rerank / Embedding 模型

```bash
sudo mkdir -p /models/bge-reranker-large /models/multilingual-e5-large
sudo chown $USER:$USER /models/bge-reranker-large /models/multilingual-e5-large

hf download BAAI/bge-reranker-large --local-dir /models/bge-reranker-large
hf download intfloat/multilingual-e5-large --local-dir /models/multilingual-e5-large
```

### 2.3 配置 Telegram Bot

先按原手册的方式获取 `TELEGRAM_BOT_TOKEN`（找 @BotFather）和 `ALLOWED_USER_IDS`（找 @userinfobot）。

```bash
cd docker-deploy/telegram-bot
cp .env.example .env
vim .env   # 填入 TELEGRAM_BOT_TOKEN / ALLOWED_USER_IDS，其余字段先留默认值，
           # ONYX_SERVICE_ACCOUNT_TOKEN 等 Onyx 相关字段等第三步部署完 Onyx 后再回来填写
```

### 2.4 一键启动

```bash
cd docker-deploy
cp .env.example .env   # 如模型不在 /models，修改 MODEL_DIR
docker compose up -d --build
docker compose ps
```

### 2.5 验证

```bash
curl http://localhost:8883/health   # bge-reranker-api
curl http://localhost:8881/health   # text-embedding-api
curl http://localhost:8888/health   # qwen3-model-api（同时会探测 vLLM 是否可达）
docker compose logs -f telegram-bot
```

`qwen3-model-api` 的 `/health` 返回 `vllm_backend: reachable` 才说明它成功连上了第一步部署的
裸机 vLLM；如果失败，检查 `extra_hosts: host.docker.internal:host-gateway` 是否生效
（`docker exec qwen3-model-api getent hosts host.docker.internal` 应能解析出宿主机 IP）。

---

## 第三步：部署 Onyx（官方 Docker Compose）

Onyx 本身就是一套多容器 Docker 应用（api_server / background / web_server / postgres /
opensearch / nginx / redis 等），无需重新实现，直接使用官方仓库：

```bash
git clone https://github.com/onyx-dot-app/onyx.git
cd onyx/deployment/docker_compose
cp env.template .env
vim .env   # 至少设置 USER_AUTH_SECRET（随机字符串）
docker compose -f docker-compose.prod.yml up -d
```

访问 `http://<主机IP>:3000` 应能看到 Onyx 登录/初始化页面。

> 如果 Onyx 与第二步的 Docker 服务运行在同一台主机、但不在同一个 docker-compose 项目里
> （两套独立的 compose 栈），彼此之间通过宿主机端口互通即可——不需要合并到同一个
> `docker-compose.yml`。Onyx 调用 LLM 时走的是 `http://host.docker.internal:8888`
> （见下一步配置），`qwen3-model-api` 已在 `docker-compose.yml` 中把 `8888` 端口发布到宿主机。

---

## 第四步：配置 Onyx 连接本地 LLM / Embedding

1. 首次访问 `http://<主机IP>:3000/app`，创建管理员账号。
2. **Admin Panel → API Keys → New**，生成一个 Service Account Token（`on_` 前缀），记下来，
   稍后要填进 Telegram Bot 的 `.env`。
3. **Admin Panel → LLM Providers → Add**：
   - Provider 类型选择 "OpenAI API Compatible"（或同义的自定义 Provider）
   - API Base URL: `http://host.docker.internal:8888/qwen3-model/v1`
   - Model Name: `Qwen-On-Premise`
   - API Key: 任意非空字符串（`qwen3-model-api` 不校验，只是 Onyx 表单要求非空）
4. **Admin Panel → Embedding → Add Provider**（或 Search Settings，视 Onyx 版本 UI 而定）：
   - API Base URL: `http://host.docker.internal:8881/v1`
   - Model Name: `multilingual-e5-large`
   - 维度: `1024`
5. **Admin Panel → Document Sets → New**：
   - 名称必须是 `ABS_AI`（与 `telegram-bot/.env` 中 `ONYX_DOCUMENT_SET` 保持一致，
     否则 Bot 检索不到任何文档，只会回复"我不知道"）
   - 关联一个或多个 Connector，把公司 SOP / 产品手册等文件喂进去
6. **Admin Panel → Assistants (Persona) → New**：
   - 绑定上面创建的 Document Set `ABS_AI`
   - 记下这个 Persona 的 ID（URL 或列表页可见），填入 Telegram Bot 的 `ONYX_PERSONA_ID`

> ⚠️ 常见坑（来自实际调试记录）：
> - `internal_search_filters.document_set` 如果传空数组 `[]`，Onyx 不会检索任何文档集，
>   会一直回答"不知道"——必须显式指定文档集名称。
> - 新版 Onyx 的聊天接口是 `/api/chat/send-chat-message`（不是 `send-message`），
>   SSE 返回格式是逐行 JSON（`{"obj": {"type": "message_delta", "content": "..."}}`），
>   不是旧版的 `data: {...}` 格式——本手册配套的 `bot.py` 已按新格式实现，无需修改。

---

## 第五步：回填 Telegram Bot 配置并重启

```bash
cd docker-deploy/telegram-bot
vim .env
```

补全：

```env
ONYX_SERVICE_ACCOUNT_TOKEN=on_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   # 第四步第 2 项拿到的 token
ONYX_PERSONA_ID=1                                                 # 第四步第 6 项拿到的 ID
ONYX_DOCUMENT_SET=ABS_AI
```

```bash
cd docker-deploy
docker compose up -d --build telegram-bot
docker compose logs -f telegram-bot
```

日志中出现 `Bot starting - allowed users: {...}` 且没有报错，即部署完成。用白名单里的
Telegram 账号给 Bot 发 `/start`，再问一句知识库里有的内容验证 RAG 是否生效。

---

## 调试命令

```bash
# vLLM（裸机）
journalctl -u vllm.service -f
curl http://localhost:8880/v1/models

# Docker 服务
docker compose -f docker-deploy/docker-compose.yml logs -f bge-reranker-api
docker compose -f docker-deploy/docker-compose.yml logs -f text-embedding-api
docker compose -f docker-deploy/docker-compose.yml logs -f qwen3-model-api
docker compose -f docker-deploy/docker-compose.yml logs -f telegram-bot

# GPU 占用情况（vLLM + Rerank + Embedding 共享同一张卡）
nvidia-smi

# 端口检查
sudo ss -ltnp | grep -E '8880|8881|8883|8888|3000'
```

## 故障排查

| 现象 | 可能原因 | 处理 |
|------|---------|------|
| `qwen3-model-api` `/health` 返回 `unhealthy` | 无法连接裸机 vLLM | 确认 `vllm.service` 状态；确认 `extra_hosts: host-gateway` 生效 |
| Rerank/Embedding 容器启动后 OOM 或 CUDA OOM | GPU 显存不足 | 降低 vLLM 的 `--gpu-memory-utilization`（如 0.8），或错峰启动 |
| Telegram 一直回复"未授权用户" | `ALLOWED_USER_IDS` 未填或填错 | 用 @userinfobot 确认数字 ID，逗号分隔，重启容器 |
| Bot 回复"我不知道" | Onyx `document_set` 未匹配 | 确认 Document Set 名称与 `.env` 中 `ONYX_DOCUMENT_SET` 完全一致，且已索引文档 |
| Mem0 记忆没有生效 | `qwen3-model-api` 数据卷未持久化 | 确认 `docker volume ls` 中存在 `qwen3-model-data`，未被 `docker compose down -v` 误删 |
