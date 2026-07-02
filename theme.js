(function () {
  var SUN  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/><line x1="19.78" y1="4.22" x2="17.66" y2="6.34"/><line x1="6.34" y1="17.66" x2="4.22" y2="19.78"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  var btn = document.getElementById('themeToggle');
  if (!btn) return;

  function setIcon(theme) {
    btn.innerHTML = theme === 'dark' ? SUN : MOON;
  }

  setIcon(document.documentElement.getAttribute('data-theme') || 'dark');

  btn.addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    var r    = btn.getBoundingClientRect();
    var cx   = Math.round(r.left + r.width  / 2);
    var cy   = Math.round(r.top  + r.height / 2);
    var maxR = Math.hypot(Math.max(cx, innerWidth - cx), Math.max(cy, innerHeight - cy));

    function apply() {
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      setIcon(next);
    }

    if (!document.startViewTransition) { apply(); return; }

    var t = document.startViewTransition(apply);
    t.ready.then(function () {
      document.documentElement.animate(
        { clipPath: ['circle(0px at ' + cx + 'px ' + cy + 'px)', 'circle(' + maxR + 'px at ' + cx + 'px ' + cy + 'px)'] },
        { duration: 500, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }
      );
    });
  });
})();
