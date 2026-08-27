document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('input[type="checkbox"][id^="lb-"]').forEach(function(cb) {
      cb.checked = false;
    });
  }
});
