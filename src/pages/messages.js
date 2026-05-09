import { authStore } from '../authStore.js';
import { icon } from '../components/icons.js';

export function messagesPage() {
  const user = authStore.getUser();
  if (!user) {
    location.hash = '/auth';
    return '';
  }

  return `
  <div class="dashboard-wrapper">
    <div id="dash-overlay" class="dashboard-mobile-overlay" onclick="document.getElementById('dashboard-sidebar').classList.remove('open'); this.classList.remove('open')"></div>
    
    <!-- Sidebar -->
    <aside id="dashboard-sidebar" class="dashboard-sidebar">
      <div class="dashboard-sidebar__logo">
        ${icon('shield', 28)} ClaimSure
      </div>
      <nav class="dashboard-sidebar__nav" style="padding-top: 24px;">
        <a href="#/dashboard" class="dashboard-nav-item">${icon('home', 18)} Dashboard</a>
        <a href="#/my-claims" class="dashboard-nav-item">${icon('clipboard', 18)} My Claims</a>
        <a href="#/upload" class="dashboard-nav-item">${icon('upload', 18)} Upload Documents</a>
        <a href="#/messages" class="dashboard-nav-item active">${icon('mail', 18)} Messages</a>
        <a href="#/contact" class="dashboard-nav-item" style="margin-top: auto;">${icon('helpCircle', 18)} Support</a>
        <a href="#/" class="dashboard-nav-item">${icon('arrow', 18)} Back</a>
      </nav>
      <div class="dashboard-sidebar__bottom">
        <a href="#" onclick="event.preventDefault();window.handleLogout()" class="dashboard-nav-item" style="color:#FF8A8A;font-weight:700;">${icon('logout', 18)} Log Out</a>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="dashboard-main">
      <!-- Topbar -->
      <header class="dashboard-topbar">
        <div style="display:flex;align-items:center;gap:16px">
          <button class="btn btn--outline dashboard-hamburger" style="padding:6px;border:none" onclick="window.toggleDashboardSidebar()">
            <div style="display:flex;flex-direction:column;gap:4px;width:20px">
              <span style="height:2px;background:var(--text-dark);width:100%"></span>
              <span style="height:2px;background:var(--text-dark);width:100%"></span>
              <span style="height:2px;background:var(--text-dark);width:100%"></span>
            </div>
          </button>
        </div>
        <div style="display:flex;align-items:center;gap:12px">
          <div id="dash-profile-dropdown-wrapper" style="position:relative;cursor:pointer">
            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--primary),#9B6FE8);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.1rem;box-shadow:0 2px 8px rgba(108,63,197,0.2)">
              ${user.name.charAt(0).toUpperCase()}
            </div>
            <div id="dash-profile-dropdown" class="profile-dropdown">
              <div class="profile-dropdown__header">
                <div class="profile-dropdown__name">${user?.name || 'User'}</div>
                <div class="profile-dropdown__email">${user?.email || ''}</div>
              </div>
              <a href="#/dashboard" class="profile-dropdown__item">My Profile</a>
              <a href="#" onclick="event.preventDefault();window.handleLogout()" class="profile-dropdown__item profile-dropdown__item--danger">Logout</a>
            </div>
          </div>
        </div>
      </header>

      <!-- Scrollable Content -->
      <div class="dashboard-content">
        <div style="margin-bottom:32px">
          <h1 style="margin-bottom:8px">Messages</h1>
          <p class="subtitle">Communicate securely with your claim manager.</p>
        </div>

        <div class="card" style="padding:40px;text-align:center">
          <div style="width:64px;height:64px;background:var(--primary-light);color:var(--primary);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 24px">
            ${icon('mail', 32)}
          </div>
          <h3 style="margin-bottom:12px">No New Messages</h3>
          <p style="color:var(--text-muted);max-width:400px;margin:0 auto 24px">Your inbox is empty. We will notify you here when there is an update on your claim.</p>
          <a href="#/contact" class="btn btn--outline">Contact Support</a>
        </div>
      </div>
    </main>
  </div>
  `;
}
