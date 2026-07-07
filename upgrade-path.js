(function () {
  var HTML =
    '<h2 data-i18n="h2-upgrade">Upgrade Path</h2>' +
    '<p data-i18n="upgrade-p">The current setup is deliberately modular, so most upgrades are additive — new node packs and models dropped in, not a rebuild. Here\'s how the common upgrade paths would actually work.</p>' +

    '<div class="step-card">' +
      '<div class="step-num" data-i18n="upgrade-label">Upgrade</div>' +
      '<div class="step-title" data-i18n="up1-title">More Capable Video Models</div>' +
      '<p data-i18n-html="up1-p">AnimateDiff (SD1.5-based) is the oldest/roughest video diffusion approach — it\'s the standard starting point, but newer models produce noticeably better motion coherence and longer clips: <strong>Stable Video Diffusion (SVD)</strong>, <strong>CogVideoX</strong>, <strong>Mochi-1</strong>, or <strong>LTX-Video</strong>. These are already ComfyUI-compatible (same node-graph environment), so the upgrade is: download the larger model (these run 10–30GB+ each), install a matching custom node if it\'s not in ComfyUI core yet, swap the workflow graph. VRAM isn\'t a constraint on this GPU (96GB) — the real cost is disk space and longer per-clip generation time.</p>' +
    '</div>' +

    '<div class="step-card">' +
      '<div class="step-num" data-i18n="upgrade-label">Upgrade</div>' +
      '<div class="step-title" data-i18n="up2-title">Character &amp; Style Consistency Across Shots</div>' +
      '<p data-i18n="up2-p">The biggest practical pain point in AI filmmaking is that every generation is independent — the same "character" looks slightly different shot to shot. Two upgrade paths:</p>' +
      '<ul style="list-style:disc; padding-left:20px; color:var(--text-muted); font-size:14px; line-height:1.8; margin-top:8px;">' +
        '<li data-i18n-html="up2-li1"><strong style="color:var(--text);">IPAdapter</strong> (a ComfyUI node) — feeds a reference image into generation to pull the look toward a consistent character/style. Same install pattern as ControlNet (node pack + model file), moderate complexity.</li>' +
        '<li data-i18n-html="up2-li2"><strong style="color:var(--text);">Custom LoRA training</strong> — train a small model on a specific character\'s face/style using a tool like <code>kohya_ss</code>. This is a real step up in complexity: it needs a curated image dataset (typically 15–50 images), a separate training run (hours, not seconds), and iteration to avoid overfitting. It\'s a new skill/workflow, not just a new download.</li>' +
      '</ul>' +
    '</div>' +

    '<div class="step-card">' +
      '<div class="step-num" data-i18n="upgrade-label">Upgrade</div>' +
      '<div class="step-title" data-i18n="up3-title">Multi-ControlNet / More Precise Direction</div>' +
      '<p data-i18n="up3-p">Stacking multiple ControlNet types at once (e.g. pose + depth simultaneously) for tighter shot-composition control. Same download mechanism as single ControlNet, just wiring more nodes into the graph — no new infrastructure needed.</p>' +
    '</div>' +

    '<div class="step-card">' +
      '<div class="step-num" data-i18n="upgrade-label">Upgrade</div>' +
      '<div class="step-title" data-i18n="up4-title">Batch Automation</div>' +
      '<p data-i18n-html="up4-p">Right now the workflow is manual: open ComfyUI in a browser, queue one prompt at a time. If you want to generate many shots/variations unattended, ComfyUI exposes an <strong>API</strong> — a Python script can queue dozens of prompts programmatically and collect outputs overnight. This is a scripting layer on top of what\'s already installed, not new software.</p>' +
    '</div>' +

    '<div class="step-card">' +
      '<div class="step-num" data-i18n="not-covered-label">Not Yet Covered</div>' +
      '<div class="step-title" data-i18n="up5-title">Voice / Music / Audio Generation</div>' +
      '<p data-i18n="up5-p">Not covered by anything on the current list — if you want AI-generated dialogue or score rather than just editing in licensed/recorded audio, that\'s an entirely separate category of tool (e.g. audio diffusion models) that would need to be scoped and added fresh.</p>' +
    '</div>' +

    '<div class="info-box" style="margin-top:14px;">' +
      '<span class="icon">📦</span>' +
      '<div data-i18n-html="upgrade-closing"><strong>What doesn\'t change:</strong> the underlying stack (driver &rarr; PyTorch &rarr; ComfyUI) stays exactly as-is for all of these — they\'re all just more custom nodes and model files layered on top. <strong>What does change:</strong> disk footprint climbs fast (each new large video model or LoRA experiment set can eat 10–30GB), so growth into "more complex" territory is really a storage-planning conversation more than a software-capability one on this hardware — the GPU has headroom to spare.</div>' +
    '</div>';

  var el = document.getElementById('upgrade');
  if (el) el.innerHTML = HTML;

  window.UpgradePathDict = {
    en: {
      'h2-upgrade':'Upgrade Path',
      'upgrade-p':'The current setup is deliberately modular, so most upgrades are additive — new node packs and models dropped in, not a rebuild. Here\'s how the common upgrade paths would actually work.',
      'upgrade-label':'Upgrade',
      'up1-title':'More Capable Video Models',
      'up1-p':'AnimateDiff (SD1.5-based) is the oldest/roughest video diffusion approach — it\'s the standard starting point, but newer models produce noticeably better motion coherence and longer clips: <strong>Stable Video Diffusion (SVD)</strong>, <strong>CogVideoX</strong>, <strong>Mochi-1</strong>, or <strong>LTX-Video</strong>. These are already ComfyUI-compatible (same node-graph environment), so the upgrade is: download the larger model (these run 10–30GB+ each), install a matching custom node if it\'s not in ComfyUI core yet, swap the workflow graph. VRAM isn\'t a constraint on this GPU (96GB) — the real cost is disk space and longer per-clip generation time.',
      'up2-title':'Character & Style Consistency Across Shots',
      'up2-p':'The biggest practical pain point in AI filmmaking is that every generation is independent — the same "character" looks slightly different shot to shot. Two upgrade paths:',
      'up2-li1':'<strong style="color:var(--text);">IPAdapter</strong> (a ComfyUI node) — feeds a reference image into generation to pull the look toward a consistent character/style. Same install pattern as ControlNet (node pack + model file), moderate complexity.',
      'up2-li2':'<strong style="color:var(--text);">Custom LoRA training</strong> — train a small model on a specific character\'s face/style using a tool like <code>kohya_ss</code>. This is a real step up in complexity: it needs a curated image dataset (typically 15–50 images), a separate training run (hours, not seconds), and iteration to avoid overfitting. It\'s a new skill/workflow, not just a new download.',
      'up3-title':'Multi-ControlNet / More Precise Direction',
      'up3-p':'Stacking multiple ControlNet types at once (e.g. pose + depth simultaneously) for tighter shot-composition control. Same download mechanism as single ControlNet, just wiring more nodes into the graph — no new infrastructure needed.',
      'up4-title':'Batch Automation',
      'up4-p':'Right now the workflow is manual: open ComfyUI in a browser, queue one prompt at a time. If you want to generate many shots/variations unattended, ComfyUI exposes an <strong>API</strong> — a Python script can queue dozens of prompts programmatically and collect outputs overnight. This is a scripting layer on top of what\'s already installed, not new software.',
      'not-covered-label':'Not Yet Covered',
      'up5-title':'Voice / Music / Audio Generation',
      'up5-p':'Not covered by anything on the current list — if you want AI-generated dialogue or score rather than just editing in licensed/recorded audio, that\'s an entirely separate category of tool (e.g. audio diffusion models) that would need to be scoped and added fresh.',
      'upgrade-closing':'<strong>What doesn\'t change:</strong> the underlying stack (driver &rarr; PyTorch &rarr; ComfyUI) stays exactly as-is for all of these — they\'re all just more custom nodes and model files layered on top. <strong>What does change:</strong> disk footprint climbs fast (each new large video model or LoRA experiment set can eat 10–30GB), so growth into "more complex" territory is really a storage-planning conversation more than a software-capability one on this hardware — the GPU has headroom to spare.',
    },
    zh: {
      'h2-upgrade':'升级路径',
      'upgrade-p':'当前设置刻意采用模块化设计，因此大多数升级都是增量式的——加入新的节点包和模型，而不是推倒重来。以下是几种常见升级路径的实际做法。',
      'upgrade-label':'升级',
      'up1-title':'更强大的视频模型',
      'up1-p':'AnimateDiff（基于 SD1.5）是最早期、效果也最粗糙的视频扩散方案——它是标准的入门起点，但更新的模型能带来明显更连贯的运动效果和更长的片段：<strong>Stable Video Diffusion (SVD)</strong>、<strong>CogVideoX</strong>、<strong>Mochi-1</strong> 或 <strong>LTX-Video</strong>。这些模型均已与 ComfyUI 兼容（同一套节点图环境），因此升级方式是：下载更大的模型（每个约 10–30GB 以上），如果 ComfyUI 核心中尚未内置对应节点，则安装匹配的自定义节点，再替换工作流图。这块 GPU 的显存（96GB）不是瓶颈——真正的成本在于磁盘空间和更长的单片段生成时间。',
      'up2-title':'跨镜头的角色与风格一致性',
      'up2-p':'AI 影视制作中最大的实际痛点是：每次生成都是独立的——同一个"角色"在不同镜头中看起来会略有差异。有两种升级路径：',
      'up2-li1':'<strong style="color:var(--text);">IPAdapter</strong>（一个 ComfyUI 节点）——将参考图像输入生成过程，使外观向一致的角色/风格靠拢。安装方式与 ControlNet 相同（节点包 + 模型文件），复杂度中等。',
      'up2-li2':'<strong style="color:var(--text);">自定义 LoRA 训练</strong>——使用类似 <code>kohya_ss</code> 的工具，针对特定角色的面部/风格训练一个小型模型。这在复杂度上是实质性的提升：需要一套精心挑选的图像数据集（通常 15–50 张）、一次独立的训练过程（耗时以小时计，而非秒级），以及反复迭代以避免过拟合。这是一项全新的技能/工作流程，而不仅仅是多下载一个文件。',
      'up3-title':'多重 ControlNet / 更精确的画面控制',
      'up3-p':'同时叠加多种 ControlNet 类型（例如姿态 + 深度同时使用），以实现更精确的镜头构图控制。下载方式与单一 ControlNet 相同，只需在图中多接入几个节点——无需任何新的基础设施。',
      'up4-title':'批量自动化',
      'up4-p':'目前的工作流程是手动的：在浏览器中打开 ComfyUI，逐条排队生成提示词。如果您希望无人值守地批量生成大量镜头/变体，ComfyUI 提供了 <strong>API</strong>——可以用 Python 脚本以编程方式排队数十个提示词，并在一夜之间收集输出结果。这只是在已安装内容之上增加的一层脚本，而非新的软件。',
      'not-covered-label':'尚未涵盖',
      'up5-title':'语音 / 音乐 / 音频生成',
      'up5-p':'当前清单中的任何内容都不涉及这一块——如果您希望使用 AI 生成对白或配乐，而不仅仅是剪入已获得授权的录制音频，那将是一个完全独立的工具类别（例如音频扩散模型），需要重新评估范围并单独添加。',
      'upgrade-closing':'<strong>不变的部分：</strong>底层技术栈（驱动 &rarr; PyTorch &rarr; ComfyUI）在所有这些升级中都保持完全不变——它们都只是在此基础上叠加更多自定义节点和模型文件。<strong>会变化的部分：</strong>磁盘占用会快速增长（每一个新的大型视频模型或 LoRA 实验集都可能占用 10–30GB），因此向"更复杂"方向发展，其实更多是一场存储规划的讨论，而不是这台硬件在软件能力上的限制——GPU 本身还有充足的余量。',
    }
  };
})();
