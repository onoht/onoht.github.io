// Theme Toggle - handles button click only
// Theme initialization is done via inline script in <head> to prevent flash
(function() {
  const toggle = document.querySelector('.theme-toggle');

  // Toggle on click
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }
})();
