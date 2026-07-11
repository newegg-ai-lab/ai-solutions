(function () {

  /* ---- i18n ---- */

  var T = {
    en: {
      'hero-tag':'Newegg AI Solutions','hero-h1':'AI that stays on','hero-h1-line2':'your hardware.',
      'hero-sub':'Three platforms built for teams that take data seriously. Private by design — no cloud dependency, no subscriptions, no compromise.',
      'badge-1':'3 Platforms','badge-2':'100% On-Device','badge-3':'Zero Cloud','badge-4':'No Usage Limits',
      'cta-primary':'Explore Platforms','cta-secondary':'Compare Specs','scroll-hint':'Scroll',
      'products-eye':'Available Solutions','products-h':'Choose your AI Solution.',
      'rtx-cat':'Enterprise AI','rtx-desc':'High-throughput on-premise AI workstation. Multi-user chat, document RAG, image generation, and long-term memory.',
      'rtx-c1':'Multi-user','rtx-c2':'RAG','rtx-c3':'Image Gen','rtx-c4':'Memory',
      'film-cat':'Creative AI','film-desc':'A full local ComfyUI pipeline — SDXL for stills, ControlNet for pose and composition, AnimateDiff for motion, then upscaling. No render farm, no cloud fees.',
      'film-c1':'SDXL','film-c2':'ControlNet','film-c3':'AnimateDiff','film-c4':'Upscaling',
      'analysis-cat':'Business Intelligence AI','analysis-desc':'Ask business questions in plain language. Private AI connects directly to your BI cubes through OpenCowork, pulling live data for instant, conversational analysis.',
      'analysis-c1':'BI Integration','analysis-c2':'Conversational Analytics','analysis-c3':'Live Data','analysis-c4':'OpenCowork',
      'analysis-status':'In Development',
      'card-cta':'Explore',
      'compare-eye':'Compare Solutions','compare-h':'Find the right fit.',
      'th-platform':'Runs On','th-usecase':'Use Case','th-datasource':'Data Source',
      'th-modes':'Key Capabilities','th-users':'Users','th-bestfor':'Best For',
      'kb-usecase':'Knowledge Q&A / RAG chat','film-usecase':'Generative image & video pipeline','analysis-usecase':'Conversational business analysis',
      'kb-datasource':'Internal docs & Wiki','film-datasource':'Local models & workflows','analysis-datasource':'BI cubes via OpenCowork',
      'kb-modes':'Chat · RAG · Long-Term Memory','film-modes':'SDXL · ControlNet · AnimateDiff','analysis-modes':'BI Integration · Live Data',
      'kb-users':'Multi-user','film-users':'Single / small team','analysis-users':'TBD',
      'kb-b1':'Enterprise','kb-b2':'Knowledge work','film-b1':'Creative teams','film-b2':'Content production','analysis-b1':'Analysts','analysis-b2':'Leadership',
      'support-eye':'Support','support-h':"We're here to help.",
      'support-eye-1':'Documentation','support-h-1':'Step-by-step setup guides for every platform.',
      'support-p-1':'Get your platform running — from unboxing to your first working AI service.',
      'support-cta-1':'View Setup Guides <span>&rarr;</span>',
      'footer-meta':'<b>Newegg</b> AI Solutions · Private AI for Enterprise',
      'footer-nav-1':'Platforms','footer-nav-2':'Compare','footer-nav-3':'Support',
    },
    zh: {
      'hero-tag':'Newegg AI 解决方案','hero-h1':'AI 永驻','hero-h1-line2':'您的硬件之上',
      'hero-sub':'专为重视数据安全的团队打造的三款平台。私密设计——无云端依赖、无订阅费、零妥协。',
      'badge-1':'3 款平台','badge-2':'100% 本地运行','badge-3':'零云端','badge-4':'无使用限制',
      'cta-primary':'探索平台','cta-secondary':'对比参数','scroll-hint':'向下滚动',
      'products-eye':'可选解决方案','products-h':'选择您的 AI 解决方案。',
      'rtx-cat':'企业 AI','rtx-desc':'高吞吐量本地 AI 工作站。支持多用户对话、文档 RAG、图像生成与长期记忆。',
      'rtx-c1':'多用户','rtx-c2':'RAG 检索','rtx-c3':'图像生成','rtx-c4':'长期记忆',
      'film-cat':'创意 AI','film-desc':'完整的本地 ComfyUI 流水线——SDXL 生成静态画面，ControlNet 控制姿态与构图，AnimateDiff 让画面动起来，再经过放大处理。无需渲染农场，也无需云端费用。',
      'film-c1':'SDXL','film-c2':'ControlNet','film-c3':'AnimateDiff','film-c4':'放大处理',
      'analysis-cat':'商业智能 AI','analysis-desc':'用自然语言提出业务问题。私有 AI 通过 OpenCowork 直接连接您的 BI 数据立方体，实时拉取数据进行对话式分析。',
      'analysis-c1':'BI 集成','analysis-c2':'对话式分析','analysis-c3':'实时数据','analysis-c4':'OpenCowork',
      'analysis-status':'开发中',
      'card-cta':'探索',
      'compare-eye':'解决方案对比','compare-h':'找到最适合您的方案。',
      'th-platform':'运行平台','th-usecase':'使用场景','th-datasource':'数据来源',
      'th-modes':'核心能力','th-users':'用户规模','th-bestfor':'最适合',
      'kb-usecase':'知识问答 / RAG 对话','film-usecase':'图像与视频生成流水线','analysis-usecase':'对话式业务分析',
      'kb-datasource':'内部文档与 Wiki','film-datasource':'本地模型与工作流','analysis-datasource':'通过 OpenCowork 连接的 BI 数据立方体',
      'kb-modes':'对话 · RAG · 长期记忆','film-modes':'SDXL · ControlNet · AnimateDiff','analysis-modes':'BI 集成 · 实时数据',
      'kb-users':'多用户','film-users':'单用户 / 小团队','analysis-users':'待定',
      'kb-b1':'企业级','kb-b2':'知识型工作','film-b1':'创意团队','film-b2':'内容制作','analysis-b1':'分析师','analysis-b2':'管理层',
      'support-eye':'支持服务','support-h':'我们随时为您服务。',
      'support-eye-1':'文档资料','support-h-1':'各平台的安装配置文档。',
      'support-p-1':'从开箱到运行您的第一项 AI 服务，助您顺利完成部署。',
      'support-cta-1':'查看安装指南 <span>&rarr;</span>',
      'footer-meta':'<b>Newegg</b> AI 解决方案 · 企业私有 AI',
      'footer-nav-1':'平台','footer-nav-2':'对比','footer-nav-3':'支持',
    },
  };

  /* ---- Language select ---- */

  window.ProductI18n.init(T);

  /* ---- Scroll reveal ---- */

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

})();