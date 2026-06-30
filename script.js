(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('resume-theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem('resume-theme', theme);
    if (themeToggle) {
      themeToggle.textContent = theme === 'light' ? '◑' : '◐';
      themeToggle.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`);
    }
  };

  setTheme(savedTheme || (prefersLight ? 'light' : 'dark'));

  themeToggle?.addEventListener('click', () => {
    setTheme(root.dataset.theme === 'light' ? 'dark' : 'light');
  });

  const filterButtons = [...document.querySelectorAll('.filter')];
  const projectCards = [...document.querySelectorAll('.project-card')];

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'all';
      filterButtons.forEach((item) => item.classList.toggle('active', item === button));
      projectCards.forEach((card) => {
        const tags = (card.dataset.tags || '').split(/\s+/);
        card.hidden = filter !== 'all' && !tags.includes(filter);
      });
    });
  });

  const experienceItems = [...document.querySelectorAll('.experience-item')];
  document.getElementById('expandAll')?.addEventListener('click', () => {
    experienceItems.forEach((item) => { item.open = true; });
  });

  document.getElementById('collapseAll')?.addEventListener('click', () => {
    experienceItems.forEach((item, index) => { item.open = index < 5; });
  });

  const toast = document.getElementById('toast');
  let toastTimer;
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  };

  document.getElementById('copyEmail')?.addEventListener('click', async (event) => {
    const email = event.currentTarget.dataset.email;
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      showToast('Email copied to clipboard.');
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });

  const printButton = document.getElementById('printResume');
  printButton?.addEventListener('click', () => {
    const previousStates = experienceItems.map((item) => item.open);
    experienceItems.forEach((item) => { item.open = true; });
    window.print();
    experienceItems.forEach((item, index) => { item.open = previousStates[index]; });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
