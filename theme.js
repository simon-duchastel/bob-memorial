(function() {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') root.classList.add('dark');
  else if (saved === 'light') root.classList.add('light');

  function toggle() {
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else if (root.classList.contains('light')) {
      root.classList.remove('light');
      localStorage.setItem('theme', 'auto');
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  document.getElementById('theme-toggle').addEventListener('click', toggle);
})();
