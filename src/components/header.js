const LOGO_SVG = `<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="18" fill="url(#lg)"/><path d="M18 9a3 3 0 0 1 3 3v3.5a3 3 0 0 1-6 0V12a3 3 0 0 1 3-3zm-6 9h12a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H12a2.5 2.5 0 0 1-2.5-2.5v-4A2.5 2.5 0 0 1 12 18zm3.5 3a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5z" fill="#fff" fill-rule="evenodd"/><defs><linearGradient id="lg" x1="0" y1="0" x2="36" y2="36"><stop stop-color="#6C3FC5"/><stop offset="1" stop-color="#9B6FE8"/></linearGradient></defs></svg>`;

const NAV_LINKS = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#/about' },
  { label: 'Services', href: '#/services' },
  { label: 'Upload Docs', href: '#/upload' },
  { label: 'Schedule Visit', href: '#/schedule' },
  { label: 'FAQ', href: '#/faq' },
  { label: 'Contact', href: '#/contact' },
];

export function renderHeader() {
  return `
  <header class="header" id="site-header">
    <div class="header__inner">
      <a href="#/" class="header__logo" data-nav-link>
        ${LOGO_SVG}
        ClaimSure
      </a>
      <nav class="header__nav">
        ${NAV_LINKS.map(l => `<a href="${l.href}" data-nav-link>${l.label}</a>`).join('')}
      </nav>
      <div class="header__actions">
        <a href="#/auth" class="btn btn--outline btn--sm" data-nav-link>Login</a>
        <a href="#/auth" class="btn btn--primary btn--sm" onclick="location.hash='/auth';setTimeout(()=>{const b=document.querySelector('[data-tab=signup]');if(b)b.click()},100)">Sign Up</a>
        <div class="header__hamburger" id="hamburger-btn" aria-label="Menu">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
    <nav class="mobile-nav" id="mobile-nav">
      ${NAV_LINKS.map(l => `<a href="${l.href}" data-nav-link>${l.label}</a>`).join('')}
      <hr style="border:none;border-top:1px solid var(--border);margin:8px 0">
      <a href="#/auth" data-nav-link>Login / Sign Up</a>
      <a href="#/dashboard" data-nav-link>Dashboard</a>
    </nav>
  </header>`;
}

export function initHeader() {
  // Scroll shadow
  window.addEventListener('scroll', () => {
    document.querySelector('.header')?.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Hamburger
  document.getElementById('hamburger-btn')?.addEventListener('click', () => {
    document.getElementById('mobile-nav')?.classList.toggle('open');
  });
}
