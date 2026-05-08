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

import { authStore } from '../authStore.js';

export function renderHeader() {
  const isAuth = authStore.isAuthenticated();
  const user = authStore.getUser();
  const initials = user ? user.name.charAt(0).toUpperCase() : 'U';

  const authHtml = isAuth ? `
    <div style="display:flex;align-items:center;gap:12px">
      <a href="#/dashboard" class="btn btn--outline btn--sm" style="padding:6px 12px">Dashboard</a>
      <div style="position:relative;cursor:pointer" onclick="document.getElementById('profile-dropdown').classList.toggle('show')">
        <div style="width:36px;height:36px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700">
          ${initials}
        </div>
        <div id="profile-dropdown" style="display:none;position:absolute;top:48px;right:0;background:#fff;border-radius:var(--radius-sm);box-shadow:var(--shadow-lg);border:1px solid var(--border);padding:8px 0;min-width:180px;z-index:100">
          <div style="padding:8px 16px;border-bottom:1px solid var(--border);margin-bottom:8px">
            <div style="font-weight:600;font-size:.9rem">${user?.name || 'User'}</div>
            <div style="font-size:.8rem;color:var(--text-muted);word-break:break-all">${user?.email || ''}</div>
          </div>
          <a href="#/dashboard" style="display:block;padding:8px 16px;color:var(--text-body);font-size:.9rem;text-decoration:none">My Profile</a>
          <a href="#" onclick="event.preventDefault();window.handleLogout()" style="display:block;padding:8px 16px;color:var(--accent-pink);font-size:.9rem;text-decoration:none">Logout</a>
        </div>
      </div>
    </div>
  ` : `
    <a href="#/auth" class="btn btn--outline btn--sm" data-nav-link>Login</a>
    <a href="#/auth" class="btn btn--primary btn--sm" onclick="location.hash='/auth';setTimeout(()=>{const b=document.querySelector('[data-tab=signup]');if(b)b.click()},100)">Sign Up</a>
  `;

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
        ${authHtml}
        <div class="header__hamburger" id="hamburger-btn" aria-label="Menu">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
    <nav class="mobile-nav" id="mobile-nav">
      ${NAV_LINKS.map(l => `<a href="${l.href}" data-nav-link>${l.label}</a>`).join('')}
      <hr style="border:none;border-top:1px solid var(--border);margin:8px 0">
      ${isAuth ? `
        <a href="#/dashboard" data-nav-link>Dashboard</a>
        <a href="#" onclick="event.preventDefault();window.handleLogout()" style="color:var(--accent-pink)">Logout</a>
      ` : `
        <a href="#/auth" data-nav-link>Login / Sign Up</a>
      `}
    </nav>
  </header>
  <style>
    #profile-dropdown.show { display: block !important; }
  </style>`;
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
