(function () {

  /* ---- i18n ---- */

  var LANG = 'en';

  var T = {
    en: {
      'hero-tag':'Newegg AI Solutions','hero-h1':'AI that stays on','hero-h1-line2':'your hardware.',
      'hero-sub':'Three platforms built for teams that take data seriously. Private by design — no cloud dependency, no subscriptions, no compromise.',
      'badge-1':'3 Platforms','badge-2':'100% On-Device','badge-3':'Zero Cloud','badge-4':'No Usage Limits',
      'cta-primary':'Explore Platforms','cta-secondary':'Compare Specs','scroll-hint':'Scroll',
      'products-eye':'Available Platforms','products-h':'Choose your AI hardware.',
      'hailo-cat':'Edge AI','hailo-desc':'Standalone Windows AI for the Hailo-10H. Chat, vision, object detection, and speech — all on-device, no GPU required.',
      'hailo-c1':'LLM Chat','hailo-c2':'Image Analysis','hailo-c3':'Detection','hailo-c4':'Speech',
      'rtx-cat':'Enterprise AI','rtx-desc':'High-throughput on-premise AI workstation. Multi-user chat, document RAG, image generation, and long-term memory.',
      'rtx-c1':'Multi-user','rtx-c2':'RAG','rtx-c3':'Image Gen','rtx-c4':'Memory',
      'nuc-cat':'Desk AI','nuc-desc':'Compact always-on AI box with three compute engines. Runs 7B models locally with a local API any tool can call.',
      'nuc-c1':'3 Engines','nuc-c2':'Local API','nuc-c3':'Code Assist','nuc-c4':'28 GB',
      'card-cta':'Explore',
      'compare-eye':'Compare Platforms','compare-h':'Find the right fit.',
      'th-hardware':'Hardware','th-perf':'AI Performance','th-memory':'Memory',
      'th-modes':'AI Modes','th-users':'Users','th-bestfor':'Best For',
      'hailo-modes':'Chat · Vision · Speech · Detection','nuc-modes':'Chat · Code · Local API','rtx-modes':'Chat · RAG · Image Gen · Memory',
      'hailo-users':'Single','nuc-users':'Single / Team via API','rtx-users':'Multi-user',
      'hailo-b1':'Low-cost edge','hailo-b2':'Vision tasks','nuc-b1':'Always-on desk','nuc-b2':'Developers','rtx-b1':'Enterprise','rtx-b2':'Large models',
      'table-note':'* AI Performance bars use a logarithmic scale across a 100× range.',
      'finder-eye':'Platform Finder','finder-h':'Not sure where to start?',
      'finder-uc':'Primary use case — pick all that apply',
      'btn-vision':'Vision & Detection','btn-speech':'Speech Transcription','btn-rag':'Document Q&A / RAG',
      'btn-imagegen':'Image Generation','btn-code':'Code Assistance','btn-chat':'Conversational Chat',
      'finder-sz':'Team size','btn-solo':'Just me','btn-team':'Small team (2–10)','btn-dept':'Department (10+)',
      'result-empty':'Select your needs above to get a recommendation.',
      'result-link':'Explore →','also-consider':'Also consider:',
      'support-eye':'Support','support-h':"We're here to help.",
      'support-eye-1':'Documentation','support-h-1':'Setup guides coming soon.',
      'support-p-1':'Step-by-step documentation for setting up each platform will be available on our support page. Check back soon.',
      'footer-meta':'<b>Newegg</b> AI Solutions · Private AI for Enterprise',
      'footer-nav-1':'Platforms','footer-nav-2':'Compare','footer-nav-3':'Support',
    },
    zh: {
      'hero-tag':'Newegg AI 解决方案','hero-h1':'AI 永驻','hero-h1-line2':'您的硬件之上',
      'hero-sub':'专为重视数据安全的团队打造的三款平台。私密设计——无云端依赖、无订阅费、零妥协。',
      'badge-1':'3 款平台','badge-2':'100% 本地运行','badge-3':'零云端','badge-4':'无使用限制',
      'cta-primary':'探索平台','cta-secondary':'对比参数','scroll-hint':'向下滚动',
      'products-eye':'可选平台','products-h':'选择您的 AI 硬件。',
      'hailo-cat':'边缘 AI','hailo-desc':'基于 Hailo-10H 的独立 Windows AI 平台。对话、视觉、目标检测与语音——全本地运行，无需 GPU。',
      'hailo-c1':'LLM 对话','hailo-c2':'图像分析','hailo-c3':'目标检测','hailo-c4':'语音识别',
      'rtx-cat':'企业 AI','rtx-desc':'高吞吐量本地 AI 工作站。支持多用户对话、文档 RAG、图像生成与长期记忆。',
      'rtx-c1':'多用户','rtx-c2':'RAG 检索','rtx-c3':'图像生成','rtx-c4':'长期记忆',
      'nuc-cat':'桌面 AI','nuc-desc':'小巧的全天候 AI 主机，搭载三路计算引擎。本地运行 7B 模型，提供任意工具可调用的本地 API。',
      'nuc-c1':'三引擎','nuc-c2':'本地 API','nuc-c3':'代码辅助','nuc-c4':'28 GB',
      'card-cta':'探索',
      'compare-eye':'平台对比','compare-h':'找到最适合您的方案。',
      'th-hardware':'硬件','th-perf':'AI 性能','th-memory':'内存',
      'th-modes':'AI 模式','th-users':'用户规模','th-bestfor':'最适合',
      'hailo-modes':'对话 · 视觉 · 语音 · 检测','nuc-modes':'对话 · 代码 · 本地 API','rtx-modes':'对话 · RAG · 图像生成 · 记忆',
      'hailo-users':'单用户','nuc-users':'单用户 / 团队 API','rtx-users':'多用户',
      'hailo-b1':'低成本边缘','hailo-b2':'视觉任务','nuc-b1':'全天候桌面','nuc-b2':'开发者','rtx-b1':'企业级','rtx-b2':'大模型',
      'table-note':'* AI 性能条形图采用对数尺度，跨越 100 倍范围。',
      'finder-eye':'平台推荐','finder-h':'不确定从哪里开始？',
      'finder-uc':'主要用途——可多选',
      'btn-vision':'视觉与检测','btn-speech':'语音转录','btn-rag':'文档问答 / RAG',
      'btn-imagegen':'图像生成','btn-code':'代码辅助','btn-chat':'对话聊天',
      'finder-sz':'团队规模','btn-solo':'仅我一人','btn-team':'小团队（2–10 人）','btn-dept':'部门（10 人以上）',
      'result-empty':'请在上方选择需求，以获取推荐方案。',
      'result-link':'探索 →','also-consider':'也可考虑：',
      'support-eye':'支持服务','support-h':'我们随时为您服务。',
      'support-eye-1':'文档资料','support-h-1':'安装指南即将上线。',
      'support-p-1':'各平台的安装配置文档将在支持页面提供，敬请关注。',
      'footer-meta':'<b>Newegg</b> AI 解决方案 · 企业私有 AI',
      'footer-nav-1':'平台','footer-nav-2':'对比','footer-nav-3':'支持',
    },
  };

  function t(key) {
    var d = T[LANG] || T.en;
    return d[key] !== undefined ? d[key] : (T.en[key] || key);
  }

  function loc(obj) {
    return typeof obj === 'object' ? (obj[LANG] || obj.en) : obj;
  }

  function applyLang(lang) {
    LANG = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-html'));
      if (v !== undefined) el.innerHTML = v;
    });
    /* h1 first-text-node swap — avoids a wrapper span caught by .hero h1 span { color: accent } */
    document.querySelectorAll('[data-i18n-h1]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-h1'));
      if (v === undefined) return;
      var node = el.firstChild;
      while (node && node.nodeType !== 3) node = node.nextSibling;
      if (node) node.nodeValue = v;
    });
    updateRec();
  }

  /* ---- Platform Finder ---- */

  var USECASE_SCORES = {
    vision:  { hailo: 3, rtx: 1, nuc: 0 }, // Hailo NPU purpose-built; RTX can; NUC not specialized
    speech:  { hailo: 3, rtx: 1, nuc: 0 }, // Same as vision
    rag:     { hailo: 0, rtx: 3, nuc: 2 }, // Needs LLM; RTX runs 70B, NUC handles 7B RAG
    imagegen:{ hailo: 0, rtx: 3, nuc: 0 }, // Needs VRAM; RTX has 96 GB
    code:    { hailo: 0, rtx: 1, nuc: 3 }, // NUC is personal Copilot; RTX works but overkill solo
    chat:    { hailo: 0, rtx: 2, nuc: 3 }, // Personal chat → NUC; multi-user/large → RTX
  };

  var USERS_SCORES = {
    solo: { hailo: 2, rtx: 0, nuc: 2 }, // Edge solo → Hailo; desk solo → NUC; RTX overkill
    team: { hailo: 0, rtx: 2, nuc: 2 }, // NUC via API or RTX for demanding teams
    dept: { hailo: 0, rtx: 3, nuc: 0 }, // Department → RTX clear winner
  };

  var PRODUCTS = {
    hailo: {
      label:  { en: 'Edge AI · Recommended',       zh: '边缘 AI · 推荐方案' },
      name:   'Hailo Hub',
      reason: { en: 'Built for vision and speech at the edge — dedicated Hailo-10H NPU, low power, no GPU needed, single user.',
                zh: '专为边缘视觉与语音而生——Hailo-10H 专用 NPU，低功耗，无需 GPU，适合单用户场景。' },
      href:   'hailo-hub 3.html',
    },
    rtx: {
      label:  { en: 'Enterprise AI · Recommended', zh: '企业 AI · 推荐方案' },
      name:   'RTX PRO 6000 Hub',
      reason: { en: 'Your workload needs serious compute — multi-user access, 70B+ models, RAG pipelines, and image generation, all on-premise.',
                zh: '您的工作负载需要强力算力——多用户访问、70B+ 大模型、RAG 管道与图像生成，全部本地运行。' },
      href:   'rtx.html',
    },
    nuc: {
      label:  { en: 'Desk AI · Recommended',       zh: '桌面 AI · 推荐方案' },
      name:   'Giga Mini NUC',
      reason: { en: 'Always-on personal AI with three compute engines — private chat, code assistance, and a local API any tool can call.',
                zh: '搭载三路计算引擎的全天候个人 AI——私密对话、代码辅助，以及任意工具可调用的本地 API。' },
      href:   'Giga Mini NUC.html',
    },
  };

  var PLATFORM_NAMES = { hailo: 'Hailo Hub', nuc: 'Giga Mini NUC', rtx: 'RTX PRO 6000' };
  var KEYS = ['hailo', 'nuc', 'rtx'];

  var selUsecase = {};
  var selUsers   = null;

  function calcScores() {
    var s = { hailo: 0, rtx: 0, nuc: 0 };
    Object.keys(selUsecase).forEach(function (k) {
      if (selUsecase[k] && USECASE_SCORES[k]) {
        s.hailo += USECASE_SCORES[k].hailo;
        s.rtx   += USECASE_SCORES[k].rtx;
        s.nuc   += USECASE_SCORES[k].nuc;
      }
    });
    if (selUsers && USERS_SCORES[selUsers]) {
      s.hailo += USERS_SCORES[selUsers].hailo;
      s.rtx   += USERS_SCORES[selUsers].rtx;
      s.nuc   += USERS_SCORES[selUsers].nuc;
    }
    return s;
  }

  function updateRec() {
    var s        = calcScores();
    var hasInput = Object.values(selUsecase).some(Boolean) || selUsers;
    var maxScore = Math.max(s.hailo, s.nuc, s.rtx);

    KEYS.forEach(function (k) {
      var pct = (hasInput && maxScore > 0) ? Math.round(s[k] / maxScore * 100) : 0;
      document.getElementById('bar-' + k).style.width  = pct + '%';
      document.getElementById('pts-' + k).textContent  = hasInput ? s[k] : '—';
      document.getElementById('fsc-' + k).classList.remove('fscore--winner', 'fscore--inactive');
    });

    var empty = document.getElementById('resultEmpty');
    var card  = document.getElementById('resultCard');

    if (!hasInput) {
      empty.style.display = '';
      card.classList.remove('show');
      return;
    }

    var sorted   = KEYS.slice().sort(function (a, b) { return s[b] - s[a]; });
    var winner   = sorted[0];
    var runnerUp = sorted[1];

    KEYS.forEach(function (k) {
      document.getElementById('fsc-' + k).classList.add(k === winner ? 'fscore--winner' : 'fscore--inactive');
    });

    var rec = PRODUCTS[winner];
    empty.style.display = 'none';
    document.getElementById('resultLabel').textContent  = loc(rec.label);
    document.getElementById('resultName').textContent   = rec.name;
    document.getElementById('resultReason').textContent = loc(rec.reason);
    document.getElementById('resultLink').href          = rec.href;
    document.getElementById('resultLink').textContent   = t('result-link');

    var runnerEl = document.getElementById('resultRunner');
    if (s[runnerUp] > 0 && (s[winner] - s[runnerUp]) <= 2) {
      runnerEl.innerHTML = t('also-consider') + ' <b>' + PLATFORM_NAMES[runnerUp] + '</b>';
    } else {
      runnerEl.textContent = '';
    }

    card.classList.add('show');
  }

  document.querySelectorAll('[data-group="usecase"]').forEach(function (b) {
    b.addEventListener('click', function () {
      var k = this.getAttribute('data-key');
      selUsecase[k] = !selUsecase[k];
      this.classList.toggle('active', !!selUsecase[k]);
      updateRec();
    });
  });

  document.querySelectorAll('[data-group="users"]').forEach(function (b) {
    b.addEventListener('click', function () {
      var k = this.getAttribute('data-key');
      if (selUsers === k) {
        selUsers = null;
        this.classList.remove('active');
      } else {
        selUsers = k;
        document.querySelectorAll('[data-group="users"]').forEach(function (x) { x.classList.remove('active'); });
        this.classList.add('active');
      }
      updateRec();
    });
  });

  /* ---- Language select ---- */

  var LANG_MAP = { 'EN': 'en', '中文': 'zh' };
  var langSel  = document.querySelector('.lang-select');

  if (langSel) {
    var saved = localStorage.getItem('lang') || 'en';
    Array.from(langSel.options).forEach(function (o) {
      if (LANG_MAP[o.value] === saved) langSel.value = o.value;
    });
    applyLang(saved);

    langSel.addEventListener('change', function () {
      var lang = LANG_MAP[this.value] || 'en';
      localStorage.setItem('lang', lang);
      applyLang(lang);
    });
  }

  /* ---- Scroll reveal ---- */

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

})();