window.ProductI18n = {
  init: function (T, onApply) {
    var LANG = 'en';

    function t(key) { var d = T[LANG] || T.en; return d[key] !== undefined ? d[key] : (T.en[key] || key); }

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
      if (typeof onApply === 'function') onApply(lang, t);
    }

    var LANG_MAP = { 'EN': 'en', '中文': 'zh' };
    var langSel = document.querySelector('.lang-select');
    if (langSel) {
      var saved = localStorage.getItem('lang') || 'en';
      Array.from(langSel.options).forEach(function (o) { if (LANG_MAP[o.value] === saved) langSel.value = o.value; });
      applyLang(saved);
      langSel.addEventListener('change', function () {
        var lang = LANG_MAP[this.value] || 'en';
        localStorage.setItem('lang', lang);
        applyLang(lang);
      });
    } else {
      applyLang(localStorage.getItem('lang') || 'en');
    }

    return { t: t, getLang: function () { return LANG; }, applyLang: applyLang };
  }
};
