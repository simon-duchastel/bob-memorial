(function() {
  const root = document.documentElement;
  const mql = matchMedia('(prefers-color-scheme: dark)');
  const saved = localStorage.getItem('theme');

  function apply(t) {
    root.classList.remove('dark', 'light');
    if (t === 'dark') root.classList.add('dark');
    else if (t === 'light') root.classList.add('light');
  }

  apply(saved || (mql.matches ? 'dark' : 'light'));

  requestAnimationFrame(function() {
    root.classList.add('theme-ready');
  });

  document.getElementById('theme-toggle').addEventListener('click', function() {
    const next = root.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    apply(next);
  });
})();
