(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  const setTheme = (theme) => {
    root.dataset.theme = theme;
    themeToggle?.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  };
  if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme);
  themeToggle?.addEventListener('click', () => {
    const systemTheme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const nextTheme = (root.dataset.theme || systemTheme) === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  });
})();