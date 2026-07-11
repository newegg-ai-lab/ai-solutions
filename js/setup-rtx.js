(function () {
  var LANG = 'en';
  var T = {
    en: {
      'nav-back':'← All Setup Guides',
      'hero-h1':'Private AI & KB <span>Setup Guides</span>',
      'hero-sub-1':'Pick your use case, then the path that matches how your unit shipped.',
      'pill-preloaded':'Pre-Loaded — everything installed',
      'pill-fresh':'Fresh Hardware — manual install',
      'g1-eyebrow':'Knowledge Base & Private AI Assistant',
      'g1-title':'Covers all KB functionalities',
      'g1-lede':'The Onyx + Qwen3 + Mem0 stack behind chat & RAG.',
      'path-preloaded':'Pre-Loaded · Everything Downloaded',
      'path-fresh':'Fresh Hardware · Install Yourself',
      'kb-pre-title':'Pre-loaded image, ready to launch',
      'kb-pre-desc':'Your unit shipped with every model and service already installed. Start each service and connect Telegram in a few steps.',
      'kb-pre-cta':'Open Guide <span>&rarr;</span>',
      'fresh-title':'Manual install from a bare machine',
      'kb-fresh-desc':'Setting up the LLM, Onyx, reranker, embedding, and memory services from scratch on unconfigured hardware.',
      'kb-fresh-cta':'Open Guide <span>&rarr;</span>',
      'kb-installer-sublink':'Quick Download Guide →',
      'coming-soon':'Coming Soon',
      'footer-meta':'<b>Private AI & KB</b> &middot; Setup Guides',
    },
    zh: {
      'nav-back':'← 全部安装指南',
      'hero-h1':'Private AI & KB <span>安装指南</span>',
      'hero-sub-1':'先选择您的使用场景，再选择与设备到货方式匹配的安装路径。',
      'pill-preloaded':'预装机型 — 已完成安装',
      'pill-fresh':'全新硬件 — 需手动安装',
      'g1-eyebrow':'知识库与私有 AI 助手',
      'g1-title':'涵盖全部知识库功能',
      'g1-lede':'由 Onyx + Qwen3 + Mem0 构成的对话与 RAG 技术栈。',
      'path-preloaded':'预装机型 · 已完成下载',
      'path-fresh':'全新硬件 · 自行安装',
      'kb-pre-title':'预装镜像，开箱即用',
      'kb-pre-desc':'您的设备已预先安装好所有模型与服务。只需启动各项服务并连接 Telegram 即可使用。',
      'kb-pre-cta':'查看指南 <span>&rarr;</span>',
      'fresh-title':'在裸机上手动安装',
      'kb-fresh-desc':'在未配置的硬件上从零搭建 LLM、Onyx、重排序、向量嵌入与记忆服务。',
      'kb-fresh-cta':'查看指南 <span>&rarr;</span>',
      'kb-installer-sublink':'快速下载指南 →',
      'coming-soon':'即将上线',
      'footer-meta':'<b>Private AI & KB</b> &middot; 安装指南',
    }
  };

  function t(key) { var d=T[LANG]||T.en; return d[key]!==undefined?d[key]:(T.en[key]||key); }

  function applyLang(lang) {
    LANG = lang;
    document.documentElement.lang = lang==='zh'?'zh-CN':'en';
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var v=t(el.getAttribute('data-i18n')); if(v!==undefined) el.textContent=v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){
      var v=t(el.getAttribute('data-i18n-html')); if(v!==undefined) el.innerHTML=v;
    });
  }

  var LANG_MAP={'EN':'en','中文':'zh'};
  var langSel=document.querySelector('.lang-select');
  if(langSel){
    var saved=localStorage.getItem('lang')||'en';
    Array.from(langSel.options).find(function(o){ if(LANG_MAP[o.value]===saved){langSel.value=o.value;return true;} });
    applyLang(saved);
    langSel.addEventListener('change',function(){ var l=LANG_MAP[this.value]||'en'; localStorage.setItem('lang',l); applyLang(l); });
  } else { applyLang(localStorage.getItem('lang')||'en'); }
})();
