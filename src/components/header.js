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
    <div style="display:flex;align-items:center;gap:16px">
      <a href="#/dashboard" class="btn btn--outline btn--sm header__dash-btn" style="padding:6px 16px">Dashboard</a>
      <div id="profile-dropdown-wrapper" style="position:relative;cursor:pointer">
        <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--primary),#9B6FE8);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.1rem;box-shadow:0 2px 8px rgba(108,63,197,0.2)">
          ${initials}
        </div>
        <div id="profile-dropdown" class="profile-dropdown">
          <div class="profile-dropdown__header">
            <div class="profile-dropdown__name">${user?.name || 'User'}</div>
            <div class="profile-dropdown__email">${user?.email || ''}</div>
          </div>
          <a href="#/dashboard" class="profile-dropdown__item">My Profile</a>
          <a href="#" onclick="event.preventDefault();window.handleLogout()" class="profile-dropdown__item profile-dropdown__item--danger">Logout</a>
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
    .profile-dropdown {
      position: absolute;
      top: calc(100% + 12px);
      right: 0;
      background: #fff;
      border-radius: var(--radius-md);
      box-shadow: 0 10px 40px rgba(0,0,0,0.08);
      border: 1px solid rgba(0,0,0,0.05);
      padding: 8px 0;
      min-width: 220px;
      z-index: 100;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      transition: all 0.2s ease;
    }
    .profile-dropdown.show {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    .profile-dropdown__header {
      padding: 12px 20px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 8px;
    }
    .profile-dropdown__name {
      font-weight: 700;
      font-size: 0.95rem;
      color: var(--text-dark);
    }
    .profile-dropdown__email {
      font-size: 0.8rem;
      color: var(--text-muted);
      word-break: break-all;
      margin-top: 2px;
    }
    .profile-dropdown__item {
      display: block;
      padding: 10px 20px;
      color: var(--text-body);
      font-size: 0.9rem;
      font-weight: 500;
      text-decoration: none;
      transition: var(--transition);
    }
    .profile-dropdown__item:hover {
      background: var(--bg-lavender);
      color: var(--primary);
    }
    .profile-dropdown__item--danger {
      color: var(--accent-pink);
    }
    .profile-dropdown__item--danger:hover {
      background: #FFF0F5;
      color: #D6336C;
    }
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

  // Profile Dropdown
  const profileWrapper = document.getElementById('profile-dropdown-wrapper');
  const profileDropdown = document.getElementById('profile-dropdown');
  
  if (profileWrapper && profileDropdown) {
    // Toggle on click
    profileWrapper.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent document click from closing it immediately
      profileDropdown.classList.toggle('show');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!profileWrapper.contains(e.target)) {
        profileDropdown.classList.remove('show');
      }
    });
  }
}
