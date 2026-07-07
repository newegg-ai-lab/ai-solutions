window.GuideI18n = {
  init: function (T) {
    var LANG = 'en';

    function t(key) { var d = T[LANG] || T.en; return d[key] !== undefined ? d[key] : (T.en[key] || key); }

    function applyLang(lang) {
      LANG = lang;
      document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var v = t(el.getAttribute('data-i18n')); if (v !== undefined) el.textContent = v;
      });
      document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
        var v = t(el.getAttribute('data-i18n-html')); if (v !== undefined) el.innerHTML = v;
      });
    }

    window.copyCode = function (btn) {
      var pre = btn.closest('.code-block').querySelector('pre');
      var text = pre.innerText;
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = t('copied');
        setTimeout(function () { btn.textContent = t('copy'); }, 1500);
      });
    };

    var LANG_MAP = { 'EN': 'en', '中文': 'zh' };
    var langSel = document.querySelector('.lang-select');
    if (langSel) {
      var saved = localStorage.getItem('lang') || 'en';
      Array.from(langSel.options).find(function (o) { if (LANG_MAP[o.value] === saved) { langSel.value = o.value; return true; } });
      applyLang(saved);
      langSel.addEventListener('change', function () { var l = LANG_MAP[this.value] || 'en'; localStorage.setItem('lang', l); applyLang(l); });
    } else { applyLang(localStorage.getItem('lang') || 'en'); }

    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.sidebar nav a');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (a) { a.classList.remove('active'); });
          var active = document.querySelector('.sidebar nav a[href="#' + entry.target.id + '"]');
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    sections.forEach(function (s) { observer.observe(s); });
  }
};
