(function () {
  var HAMBURGER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';

  document.querySelectorAll('.topbar').forEach(function (topbar) {
    var nav = topbar.querySelector('nav');
    if (!nav) return;

    var btn = document.createElement('button');
    btn.className = 'nav-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle navigation');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = HAMBURGER;
    nav.parentNode.insertBefore(btn, nav);

    function close() {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') close();
    });

    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && e.target !== btn) close();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) close();
    });
  });
})();
