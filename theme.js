(function() {
  var saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') {
    document.documentElement.classList.add('theme-' + saved);
  }
  document.addEventListener('DOMContentLoaded', function() {
    var theme = document.getElementById('theme-toggle');
    var themeState = saved
      || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    theme.checked = themeState === 'dark';
    theme.addEventListener('change', function() {
      document.documentElement.classList.remove('theme-light', 'theme-dark');
      document.documentElement.classList.add('theme-' + (theme.checked ? 'dark' : 'light'));
      localStorage.setItem('theme', theme.checked ? 'dark' : 'light');
    });
  });
})();
