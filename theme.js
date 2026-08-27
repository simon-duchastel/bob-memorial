(function() {
  var themeState = localStorage.getItem('theme')
    || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  if (themeState === 'dark') document.documentElement.classList.add('theme-dark');
  document.addEventListener('DOMContentLoaded', function() {
    var theme = document.getElementById('theme-toggle');
    theme.checked = themeState === 'dark';
    document.documentElement.classList.remove('theme-dark');
    theme.addEventListener('change', function() {
      localStorage.setItem('theme', theme.checked ? 'dark' : 'light');
    });
  });
})();
