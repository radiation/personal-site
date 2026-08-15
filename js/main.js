(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-nav');
  const savedTheme = localStorage.getItem('theme');

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  };

  if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme);

  themeToggle?.addEventListener('click', () => {
    const currentTheme = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  });

  menuToggle?.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navigation?.addEventListener('click', (event) => {
    if (event.target.closest('a') && navigation.classList.contains('is-open')) {
      navigation.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.querySelector('#year').textContent = new Date().getFullYear();
})();
