(function () {

  /* ---- i18n ---- */

  var T = {
    en: {
      'hero-tag':'Newegg AI Solutions','hero-h1':'AI that stays on','hero-h1-line2':'your hardware.',
      'hero-sub':'Three platforms built for teams that take data seriously. Private by design — no cloud dependency, no subscriptions, no compromise.',
      'badge-1':'3 Platforms','badge-2':'100% On-Device','badge-3':'Zero Cloud','badge-4':'No Usage Limits',
      'cta-primary':'Explore Platforms','scroll-hint':'Scroll',
      'products-eye':'Available Solutions','products-h':'Choose your AI Solution.',
      'rtx-cat':'Enterprise AI','rtx-desc':'Make AI truly yours — not the cloud\'s. No subscriptions, no uploaded data, no privacy concerns: a locally deployed LLM and knowledge base delivering round-the-clock intelligent Q&A, knowledge retrieval, document analysis, and long-term memory.',
      'rtx-c1':'Multi-user','rtx-c2':'RAG','rtx-c3':'Image Gen','rtx-c4':'Memory',
      'analysis-cat':'Business Intelligence AI','analysis-desc':'Built on OpenCowork + DataLLM, connecting directly to your enterprise BI cubes and turning complex data analysis into natural-language conversation. No SQL to write, no data model to learn — every employee gets accurate, trustworthy, traceable analysis results, making AI-driven data decisions a reality.',
      'analysis-c1':'BI Integration','analysis-c3':'Live Data','analysis-c4':'OpenCowork',
      'analysis-status':'In Development',
      'card-cta':'Explore',
      'support-eye':'Support','support-h':"We're here to help.",
      'support-eye-1':'Documentation','support-h-1':'Step-by-step setup guides for every platform.',
      'support-p-1':'Get your platform running — from unboxing to your first working AI service.',
      'support-cta-1':'View Setup Guides <span>&rarr;</span>',
      'footer-meta':'<b>Newegg</b> AI Solutions · Private AI for Enterprise',
      'footer-nav-1':'Platforms','footer-nav-3':'Support',
    },
    zh: {
      'hero-tag':'Newegg AI 解决方案','hero-h1':'AI 永驻','hero-h1-line2':'您的硬件之上',
      'hero-sub':'专为重视数据安全的团队打造的三款平台。私密设计——无云端依赖、无订阅费、零妥协。',
      'badge-1':'3 款平台','badge-2':'100% 本地运行','badge-3':'零云端','badge-4':'无使用限制',
      'cta-primary':'探索平台','scroll-hint':'向下滚动',
      'products-eye':'可选解决方案','products-h':'选择您的 AI 解决方案。',
      'rtx-cat':'企业 AI','rtx-desc':'让 AI 真正属于您，而不是属于云端。无需订阅、无需上传数据、无需担心隐私泄露，本地部署大模型与知识库，全天候为您提供智能问答、知识检索、文档分析和长期记忆服务。',
      'rtx-c1':'多用户','rtx-c2':'RAG 检索','rtx-c3':'图像生成','rtx-c4':'长期记忆',
      'analysis-cat':'商业智能 AI','analysis-desc':'基于 OpenCowork + DataLLM，连接企业 BI Cube，将复杂的数据分析转化为自然语言对话。无需编写 SQL，无需熟悉数据模型，每位员工都能快速获得准确、可信、可追溯的数据分析结果，真正实现 AI 驱动的数据决策。',
      'analysis-c1':'BI 集成','analysis-c3':'实时数据','analysis-c4':'OpenCowork',
      'analysis-status':'开发中',
      'card-cta':'探索',
      'support-eye':'支持服务','support-h':'我们随时为您服务。',
      'support-eye-1':'文档资料','support-h-1':'各平台的安装配置文档。',
      'support-p-1':'从开箱到运行您的第一项 AI 服务，助您顺利完成部署。',
      'support-cta-1':'查看安装指南 <span>&rarr;</span>',
      'footer-meta':'<b>Newegg</b> AI 解决方案 · 企业私有 AI',
      'footer-nav-1':'平台','footer-nav-3':'支持',
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