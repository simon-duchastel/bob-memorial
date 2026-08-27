(function() {
  const root = document.documentElement;

  function apply(t) {
    root.classList.remove('dark', 'light');
    if (t === 'dark') root.classList.add('dark');
    else if (t === 'light') root.classList.add('light');
  }

  requestAnimationFrame(function() {
    root.classList.add('theme-ready');
  });

  document.getElementById('theme-toggle').addEventListener('click', function() {
    const next = root.classList.contains('dark') ? 'light' : 'dark';
    try { localStorage.setItem('theme', next); } catch (e) {}
    apply(next);
  });
})();
