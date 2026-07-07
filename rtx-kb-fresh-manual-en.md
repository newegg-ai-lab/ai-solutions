# ABS AI User Manual (RTX PRO 6000 Customer Self-Deployment Edition)

> Scenario: the customer has purchased only the hardware — an NVIDIA RTX PRO 6000 Blackwell
> 96GB card — and needs to deploy the full private AI stack from scratch on a brand-new
> Ubuntu host.
>
> Unlike the vendor's internal deployment (everything managed via `systemctl`), this
> approach:
> - Keeps **Qwen3.6-35B-A3B (vLLM)** as a bare-metal `systemctl` deployment — so the
>   inference process has exclusive, direct access to the GPU without going through a
>   container network/storage layer.
> - Moves **the other four services (Rerank / Embedding / Mem0 / Telegram Bot) entirely to
>   Docker** — so the customer can bring them all up in one shot, upgrade them
>   independently, and avoid polluting the host's Python environment.
> - Keeps **Onyx** on its official Docker Compose deployment (the official Onyx project is
>   already a multi-container Docker app, so there's no need to reimplement it).

---

## Architecture Overview

```
[Telegram on phone/PC]
        │  (long polling, outbound only, no public IP / port forwarding needed)
        ▼
┌─────────────────────┐
│  telegram-bot        │  Docker container, no listening port
│  (Docker)             │
└──────────┬───────────┘
           │ HTTP
           ▼
┌─────────────────────┐        ┌─────────────────────┐
│  Onyx                 │ ────▶ │  qwen3-model-api      │  Docker container :8888
│  (Docker, official    │  LLM  │  (Docker) — vLLM proxy │  includes Mem0 + embedded Qdrant
│   compose) :3000       │  call │  + Mem0 REST API       │
└──────────┬───────────┘        └──────────┬───────────┘
           │ RAG retrieval dep              │ reverse proxy
           ▼                                ▼
┌─────────────────────┐        ┌─────────────────────┐
│ text-embedding-api    │        │  vLLM                 │
│ (Docker) :8881 [GPU]  │        │  (bare-metal systemctl)│
└─────────────────────┘        │  :8880                │
┌─────────────────────┐        │  Qwen3.6-35B-A3B [GPU]│
│ bge-reranker-api      │        └─────────────────────┘
│ (Docker) :8883 [GPU]  │
└─────────────────────┘
```

**How the four core components are deployed:**

| Component | Model | Deployment | Port |
|-----------|-------|------------|------|
| Local LLM | Qwen3.6-35B-A3B | systemctl (bare metal + Python venv + vLLM) | 8880 |
| Rerank | bge-reranker-large | Docker | 8883 |
| Embedding | multilingual-e5-large | Docker | 8881 |
| Mem0 memory layer + vLLM proxy | — | Docker (`qwen3-model-api` container) | 8888 |
| Enterprise knowledge base RAG | Onyx | Docker (official compose) | 3000 |
| Mobile entry point | Telegram Bot | Docker (long polling, no inbound port) | — |

---

## Prerequisites

- Ubuntu 22.04 LTS (native install or bare-metal server; Docker Desktop also works if
  running under WSL2)
- NVIDIA RTX PRO 6000 Blackwell 96GB with a matching NVIDIA driver installed
  (`nvidia-smi` should produce normal output)
- Docker Engine ≥ 24.0 and Docker Compose v2 (`docker compose version`)
- **NVIDIA Container Toolkit** (lets Docker containers access the GPU):
  ```bash
  curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg
  curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
    sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
    sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
  sudo apt-get update && sudo apt-get install -y nvidia-container-toolkit
  sudo nvidia-ctk runtime configure --runtime=docker
  sudo systemctl restart docker
  ```
  Verify with: `docker run --rm --gpus all nvidia/cuda:12.4.0-base-ubuntu22.04 nvidia-smi`
  should display the GPU info normally.
- Python 3.10+ and `python3-venv` (for the bare-metal vLLM deployment)
- Hugging Face access already granted to download `Qwen/Qwen3.6-35B-A3B`

---

## Step 1: Deploy Qwen3.6-35B-A3B (vLLM, bare-metal via systemctl)

### 1.1 Create a Python virtual environment

```bash
sudo mkdir -p /usr/local/vllm_env /models
sudo chown $USER:$USER /usr/local/vllm_env /models

python3 -m venv /usr/local/vllm_env
source /usr/local/vllm_env/bin/activate
pip install --upgrade pip
```

### 1.2 Download the model

```bash
curl -LsSf https://hf.co/cli/install.sh | bash
hf download Qwen/Qwen3.6-35B-A3B --local-dir /models/qwen3.6-35b-a3b
```

### 1.3 Install inference dependencies

```bash
pip install torch torchvision torchaudio \
  --index-url https://download.pytorch.org/whl/cu128 \
  --trusted-host download.pytorch.org

pip install vllm==0.18.0
pip install transformers==5.0.0
```

### 1.4 Startup script

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

> `--gpu-memory-utilization 0.85` deliberately leaves about 15% of VRAM (~14GB) free so
> the two small models (Rerank / Embedding) running in Docker can share the same GPU
> afterward — each of them only needs 1–2GB of VRAM.

### 1.5 systemd service

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

Verify:

```bash
curl http://localhost:8880/v1/models
```

---

## Step 2: Docker-deploy Rerank / Embedding / Mem0 / Telegram Bot

### 2.1 Directory layout

The `docker-deploy/` directory that ships with this manual contains four services:

```
docker-deploy/
├── docker-compose.yml
├── .env.example
├── bge-reranker-api/       (Dockerfile, app.py, requirements.txt)
├── text-embedding-api/     (Dockerfile, text_embedding_api.py, requirements.txt)
├── qwen3-model-api/        (Dockerfile, qwen3_model_api.py, mem0_config.py, requirements.txt)
└── telegram-bot/           (Dockerfile, bot.py, requirements.txt, .env.example)
```

### 2.2 Download the Rerank / Embedding models

```bash
sudo mkdir -p /models/bge-reranker-large /models/multilingual-e5-large
sudo chown $USER:$USER /models/bge-reranker-large /models/multilingual-e5-large

hf download BAAI/bge-reranker-large --local-dir /models/bge-reranker-large
hf download intfloat/multilingual-e5-large --local-dir /models/multilingual-e5-large
```

### 2.3 Configure the Telegram Bot

First obtain `TELEGRAM_BOT_TOKEN` (from @BotFather) and `ALLOWED_USER_IDS` (from
@userinfobot) as described in the original manual.

```bash
cd docker-deploy/telegram-bot
cp .env.example .env
vim .env   # fill in TELEGRAM_BOT_TOKEN / ALLOWED_USER_IDS; leave the rest at their
           # defaults for now — ONYX_SERVICE_ACCOUNT_TOKEN and other Onyx-related
           # fields get filled in after Onyx is deployed in Step 3
```

### 2.4 One-shot startup

```bash
cd docker-deploy
cp .env.example .env   # if models aren't under /models, edit MODEL_DIR
docker compose up -d --build
docker compose ps
```

### 2.5 Verify

```bash
curl http://localhost:8883/health   # bge-reranker-api
curl http://localhost:8881/health   # text-embedding-api
curl http://localhost:8888/health   # qwen3-model-api (also probes vLLM reachability)
docker compose logs -f telegram-bot
```

`qwen3-model-api`'s `/health` must return `vllm_backend: reachable` to confirm it
successfully connected to the bare-metal vLLM deployed in Step 1; if it fails, check
whether `extra_hosts: host.docker.internal:host-gateway` is taking effect
(`docker exec qwen3-model-api getent hosts host.docker.internal` should resolve to the
host's IP).

---

## Step 3: Deploy Onyx (official Docker Compose)

Onyx itself is already a multi-container Docker application (api_server / background /
web_server / postgres / opensearch / nginx / redis, etc.), so there's no need to
reimplement it — just use the official repository:

```bash
git clone https://github.com/onyx-dot-app/onyx.git
cd onyx/deployment/docker_compose
cp env.template .env
vim .env   # at minimum set USER_AUTH_SECRET (a random string)
docker compose -f docker-compose.prod.yml up -d
```

Visiting `http://<host-ip>:3000` should show the Onyx login/setup page.

> If Onyx runs on the same host as the Docker services from Step 2 but as a separate
> Docker Compose project (two independent compose stacks), they can talk to each other
> through host ports — there's no need to merge them into a single `docker-compose.yml`.
> Onyx reaches the LLM via `http://host.docker.internal:8888` (configured in the next
> step); `qwen3-model-api` already publishes port `8888` to the host in
> `docker-compose.yml`.

---

## Step 4: Configure Onyx to connect to the local LLM / Embedding

1. On first visit to `http://<host-ip>:3000/app`, create an admin account.
2. **Admin Panel → API Keys → New**: generate a Service Account Token (prefixed `on_`)
   and note it down — you'll need it for the Telegram Bot's `.env` later.
3. **Admin Panel → LLM Providers → Add**:
   - Provider type: "OpenAI API Compatible" (or an equivalent custom provider)
   - API Base URL: `http://host.docker.internal:8888/qwen3-model/v1`
   - Model Name: `Qwen-On-Premise`
   - API Key: any non-empty string (`qwen3-model-api` doesn't validate it — Onyx's form
     just requires a non-empty value)
4. **Admin Panel → Embedding → Add Provider** (or Search Settings, depending on the Onyx
   version's UI):
   - API Base URL: `http://host.docker.internal:8881/v1`
   - Model Name: `multilingual-e5-large`
   - Dimensions: `1024`
5. **Admin Panel → Document Sets → New**:
   - The name must be `ABS_AI` (matching `ONYX_DOCUMENT_SET` in `telegram-bot/.env` —
     otherwise the Bot won't retrieve any documents and will only reply "I don't know")
   - Attach one or more connectors and feed in company SOPs, product manuals, etc.
6. **Admin Panel → Assistants (Persona) → New**:
   - Bind it to the `ABS_AI` Document Set created above
   - Note this Persona's ID (visible in the URL or the list page) and put it into the
     Telegram Bot's `ONYX_PERSONA_ID`

> ⚠️ Common pitfalls (from real debugging sessions):
> - If `internal_search_filters.document_set` is passed as an empty array `[]`, Onyx
>   won't search any document set and will always reply "I don't know" — the document
>   set name must be explicitly specified.
> - Newer versions of Onyx's chat endpoint is `/api/chat/send-chat-message` (not
>   `send-message`), and the SSE response format is line-delimited JSON
>   (`{"obj": {"type": "message_delta", "content": "..."}}`), not the old
>   `data: {...}` format — the `bot.py` shipped with this manual already implements the
>   new format, no changes needed.

---

## Step 5: Fill in the Telegram Bot config and restart

```bash
cd docker-deploy/telegram-bot
vim .env
```

Fill in:

```env
ONYX_SERVICE_ACCOUNT_TOKEN=on_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   # token from Step 4.2
ONYX_PERSONA_ID=1                                                 # ID from Step 4.6
ONYX_DOCUMENT_SET=ABS_AI
```

```bash
cd docker-deploy
docker compose up -d --build telegram-bot
docker compose logs -f telegram-bot
```

Deployment is complete once the log shows `Bot starting - allowed users: {...}` with no
errors. Send `/start` to the Bot from a whitelisted Telegram account, then ask a question
covered by the knowledge base to verify RAG is working.

---

## Debugging commands

```bash
# vLLM (bare metal)
journalctl -u vllm.service -f
curl http://localhost:8880/v1/models

# Docker services
docker compose -f docker-deploy/docker-compose.yml logs -f bge-reranker-api
docker compose -f docker-deploy/docker-compose.yml logs -f text-embedding-api
docker compose -f docker-deploy/docker-compose.yml logs -f qwen3-model-api
docker compose -f docker-deploy/docker-compose.yml logs -f telegram-bot

# GPU usage (vLLM + Rerank + Embedding share the same card)
nvidia-smi

# Port check
sudo ss -ltnp | grep -E '8880|8881|8883|8888|3000'
```

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| `qwen3-model-api` `/health` returns `unhealthy` | Can't reach bare-metal vLLM | Check `vllm.service` status; confirm `extra_hosts: host-gateway` is in effect |
| Rerank/Embedding container OOMs or hits CUDA OOM on startup | Insufficient VRAM | Lower vLLM's `--gpu-memory-utilization` (e.g. to 0.8), or stagger startup |
| Telegram keeps replying "unauthorized user" | `ALLOWED_USER_IDS` missing or wrong | Confirm the numeric ID via @userinfobot, comma-separate, restart the container |
| Bot replies "I don't know" | Onyx `document_set` doesn't match | Confirm the Document Set name exactly matches `ONYX_DOCUMENT_SET` in `.env`, and that documents are indexed |
| Mem0 memory isn't persisting | `qwen3-model-api` data volume not persisted | Confirm `qwen3-model-data` exists in `docker volume ls` and wasn't accidentally removed by `docker compose down -v` |
