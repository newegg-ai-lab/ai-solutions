(function () {
  var LANG = 'en';
  var T = {
    en: {
      'nav-back':'← All Setup Guides',
      'hero-crumb':'AI Filmmaking',
      'hero-h1':'AI Filmmaking <span>Setup Guides</span>',
      'hero-sub-1':'Generate, animate, and upscale film shots entirely on your own GPU.',
      'pill-preloaded':'Pre-Loaded — everything installed',
      'pill-fresh':'Fresh Hardware — manual install',
      'g1-eyebrow':'AI Filmmaking',
      'g1-title':'The ComfyUI pipeline — SDXL, ControlNet, and AnimateDiff',
      'g1-lede':'Generate, animate, and upscale shots entirely on-device.',
      'path-preloaded':'Pre-Loaded · Everything Downloaded',
      'path-fresh':'Fresh Hardware · Install Yourself',
      'film-pre-title':'ComfyUI & models pre-installed',
      'film-pre-desc':'Launch ComfyUI and load the provided workflow — no downloads required.',
      'film-pre-cta':'Open Guide <span>&rarr;</span>',
      'fresh-title':'Manual install from a bare machine',
      'film-fresh-desc':'Install PyTorch, ComfyUI, ControlNet, AnimateDiff, and the upscaling/interpolation nodes from scratch.',
      'film-fresh-cta':'Open Guide <span>&rarr;</span>',
      'footer-meta':'<b>AI Filmmaking</b> &middot; Setup Guides',
    },
    zh: {
      'nav-back':'← 全部安装指南',
      'hero-crumb':'AI 影视制作',
      'hero-h1':'AI 影视制作 <span>安装指南</span>',
      'hero-sub-1':'完全在自有 GPU 上生成、动画化并放大影视镜头。',
      'pill-preloaded':'预装机型 — 已完成安装',
      'pill-fresh':'全新硬件 — 需手动安装',
      'g1-eyebrow':'AI 影视制作',
      'g1-title':'ComfyUI 流水线——SDXL、ControlNet 与 AnimateDiff',
      'g1-lede':'完全在本地生成、动画化并放大影视镜头。',
      'path-preloaded':'预装机型 · 已完成下载',
      'path-fresh':'全新硬件 · 自行安装',
      'film-pre-title':'ComfyUI 与模型均已预装',
      'film-pre-desc':'直接启动 ComfyUI 并加载提供的工作流——无需任何下载。',
      'film-pre-cta':'查看指南 <span>&rarr;</span>',
      'fresh-title':'在裸机上手动安装',
      'film-fresh-desc':'从零安装 PyTorch、ComfyUI、ControlNet、AnimateDiff 及放大补帧节点。',
      'film-fresh-cta':'查看指南 <span>&rarr;</span>',
      'footer-meta':'<b>AI 影视制作</b> &middot; 安装指南',
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
