(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  const storedTheme = (() => { try { return localStorage.getItem('shastika-theme'); } catch { return null; } })();
  if (storedTheme === 'dark' || storedTheme === 'light') root.dataset.theme = storedTheme;
  const updateThemeButton = () => {
    if (!themeButton) return;
    const dark = root.dataset.theme === 'dark';
    themeButton.textContent = dark ? '☀' : '☾';
    themeButton.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    themeButton.setAttribute('title', dark ? 'Switch to light theme' : 'Switch to dark theme');
  };
  updateThemeButton();
  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('shastika-theme', root.dataset.theme); } catch { /* Theme still works without storage. */ }
    updateThemeButton();
  });
  menuButton?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    menuButton.textContent = open ? '×' : '☰';
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) { menuButton.textContent = '☰'; menuButton.setAttribute('aria-label', 'Open navigation menu'); }
  }));
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    document.querySelectorAll('[data-project-card]').forEach(card => {
      card.hidden = filter !== 'all' && !card.dataset.category.split(' ').includes(filter);
    });
    const status = document.querySelector('[data-filter-status]');
    if (status) status.textContent = filter === 'all' ? 'Showing all projects.' : `Showing ${filter} projects.`;
  }));
  const contactForm = document.querySelector('[data-contact-form]');
  contactForm?.addEventListener('submit', event => {
    event.preventDefault();
    const message = document.querySelector('[data-form-message]');
    if (!contactForm.reportValidity()) {
      message.textContent = 'Please complete the required fields correctly.';
      message.className = 'form-message error';
      return;
    }
    const data = new FormData(contactForm);
    const subject = encodeURIComponent(`Portfolio contact from ${data.get('name')}`);
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
    message.className = 'form-message success';
    message.textContent = 'Your message is ready in your email app. The website itself does not send or store messages.';
    const mailLink = document.querySelector('[data-mailto-link]');
    if (mailLink) mailLink.href = `mailto:shastishastika25@gmail.com?subject=${subject}&body=${body}`;
    if (mailLink) mailLink.hidden = false;
  });
  const backTop = document.querySelector('[data-back-top]');
  const updateBackTop = () => backTop?.classList.toggle('visible', window.scrollY > 420);
  window.addEventListener('scroll', updateBackTop, { passive: true });
  updateBackTop();
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
