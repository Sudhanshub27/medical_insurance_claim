import { icon } from '../components/icons.js';
import { authStore } from '../authStore.js';
import { showToast } from '../components/toast.js';

window.toggleProfileEdit = function (e) {
  e?.preventDefault();
  document.getElementById('profile-view').style.display = 'none';
  document.getElementById('profile-edit').style.display = 'block';
};

window.cancelProfileEdit = function (e) {
  e?.preventDefault();
  document.getElementById('profile-edit').style.display = 'none';
  document.getElementById('profile-view').style.display = 'block';
};

window.saveProfileEdit = async function (e) {
  e?.preventDefault();
  const name = document.getElementById('edit-profile-name').value;
  const phone = document.getElementById('edit-profile-phone').value;
  const locationStr = document.getElementById('edit-profile-location').value;
  const btn = document.getElementById('save-profile-btn');

  const originalText = btn.innerHTML;
  btn.innerHTML = 'Saving...';
  btn.disabled = true;

  try {
    const token = localStorage.getItem('jwt');
    const res = await fetch('http://localhost:5000/api/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ name, phone, location: locationStr })
    });
    const data = await res.json();

    if (!res.ok) {
      showToast(data.error || 'Failed to update profile.', 'error');
      btn.innerHTML = originalText;
      btn.disabled = false;
      return;
    }

    // Update store and refresh UI
    showToast('Profile updated successfully!', 'success');
    authStore.updateUser(data.user, data.token);
    setTimeout(() => window.location.reload(), 1000); // Small delay to let toast show
  } catch (error) {
    showToast('Network error. Ensure the backend server is running.', 'error');
    btn.innerHTML = originalText;
    btn.disabled = false;
  }
};

window.toggleDashboardSidebar = function () {
  document.getElementById('dashboard-sidebar')?.classList.toggle('open');
  document.getElementById('dashboard-mobile-overlay')?.classList.toggle('open');
};

export function dashboardPage() {
  const user = authStore.getUser() || { name: 'Guest', email: '' };
  const firstName = user.name.split(' ')[0];

  const LOGO_SVG = `<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="18" fill="url(#dlg)"/><path d="M18 9a3 3 0 0 1 3 3v3.5a3 3 0 0 1-6 0V12a3 3 0 0 1 3-3zm-6 9h12a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H12a2.5 2.5 0 0 1-2.5-2.5v-4A2.5 2.5 0 0 1 12 18zm3.5 3a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5z" fill="#fff" fill-rule="evenodd"/><defs><linearGradient id="dlg" x1="0" y1="0" x2="36" y2="36"><stop stop-color="#6C3FC5"/><stop offset="1" stop-color="#9B6FE8"/></linearGradient></defs></svg>`;

  const sidebarNav = (activePage) => {
    const links = [
      { href: '#/dashboard', label: 'Dashboard', ico: 'home', page: 'dashboard' },
      { href: '#/my-claims', label: 'My Claims', ico: 'clipboard', page: 'my-claims' },
      { href: '#/upload',    label: 'Upload Documents', ico: 'upload', page: 'upload' },
      { href: '#/messages',  label: 'Messages', ico: 'mail', page: 'messages' },
    ];
    return links.map(l => `
      <a href="${l.href}" class="dashboard-nav-item ${activePage === l.page ? 'active' : ''}">
        ${icon(l.ico, 17)} ${l.label}
      </a>`).join('');
  };

  return `
  <div class="dashboard-wrapper">
    <div id="dashboard-mobile-overlay" class="dashboard-mobile-overlay" onclick="window.toggleDashboardSidebar()"></div>

    <!-- Sidebar -->
    <aside id="dashboard-sidebar" class="dashboard-sidebar">
      <a href="#/" class="dashboard-sidebar__brand">${LOGO_SVG} ClaimSure</a>

      <nav class="dashboard-sidebar__nav">
        ${sidebarNav('dashboard')}
        <div class="dashboard-sidebar__divider"></div>
        <a href="#/contact" class="dashboard-nav-item">${icon('helpCircle', 17)} Support</a>
        <a href="#/" class="dashboard-nav-item">${icon('arrow', 17)} Back to Site</a>
      </nav>

      <div class="dashboard-sidebar__bottom">
        <a href="#" onclick="event.preventDefault();window.handleLogout()" class="dashboard-nav-item" style="color:var(--error);font-weight:600;">
          ${icon('logout', 17)} Log Out
        </a>
      </div>
    </aside>

    <!-- Main -->
    <main class="dashboard-main">
      <!-- Topbar -->
      <header class="dashboard-topbar">
        <div style="display:flex;align-items:center;gap:12px">
          <button class="dashboard-hamburger" style="background:none;border:none;cursor:pointer;display:none;flex-direction:column;gap:5px;padding:4px" onclick="window.toggleDashboardSidebar()">
            <span style="width:20px;height:2px;background:var(--text-dark);border-radius:2px;display:block"></span>
            <span style="width:20px;height:2px;background:var(--text-dark);border-radius:2px;display:block"></span>
            <span style="width:20px;height:2px;background:var(--text-dark);border-radius:2px;display:block"></span>
          </button>
          <div>
            <div style="font-size:0.75rem;color:var(--text-muted);font-weight:500;">Welcome back</div>
            <div style="font-family:var(--font-heading);font-size:1.05rem;color:var(--text-dark);">${firstName}</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:12px">
          <div id="dash-profile-dropdown-wrapper" style="position:relative;cursor:pointer">
            <div style="width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,var(--primary),#9B6FE8);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1rem;box-shadow:0 2px 8px rgba(108,63,197,0.25)">
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

      <!-- Content -->
      <div class="dashboard-content">

        <!-- Page heading -->
        <div style="margin-bottom:24px">
          <h2 style="margin-bottom:4px;font-size:clamp(1.5rem,3vw,2rem)">Welcome, ${user.name}</h2>
          <p style="color:var(--text-muted);font-size:0.95rem">Here's the status of your claim journey.</p>
        </div>

        <!-- KPI row -->
        <div class="grid grid-4 mb-4" style="gap:16px">
          <div class="dash-kpi">
            <div class="dash-kpi__icon dash-kpi__icon--purple">${icon('clipboard', 22)}</div>
            <div>
              <div class="dash-kpi__label">Claim ID</div>
              <div class="dash-kpi__value">MC25125</div>
            </div>
          </div>
          <div class="dash-kpi">
            <div class="dash-kpi__icon dash-kpi__icon--teal">${icon('shield', 22)}</div>
            <div>
              <div class="dash-kpi__label">Est. Amount</div>
              <div class="dash-kpi__value">₹ 45,230</div>
            </div>
          </div>
          <div class="dash-kpi">
            <div class="dash-kpi__icon dash-kpi__icon--gold">${icon('clock', 22)}</div>
            <div>
              <div class="dash-kpi__label">Status</div>
              <div class="dash-kpi__value" style="font-size:1.05rem">Under Review</div>
            </div>
          </div>
          <div class="dash-kpi">
            <div class="dash-kpi__icon dash-kpi__icon--green">${icon('check', 22)}</div>
            <div>
              <div class="dash-kpi__label">Recovered</div>
              <div class="dash-kpi__value">₹ 0</div>
            </div>
          </div>
        </div>

        <!-- Claim Progress -->
        <div class="dash-section mb-4">
          <div class="dash-section__header">
            <span class="dash-section__title">Claim Progress</span>
            <span class="status-badge status-badge--review">In Progress</span>
          </div>
          <div class="claim-stepper">
            <div class="claim-stepper__line" style="width:50%"></div>
            <div class="claim-step completed">
              <div class="claim-step__circle">${icon('check', 18)}</div>
              <div class="claim-step__label">Documents<br>Uploaded</div>
              <div class="claim-step__date">12 May 2026</div>
            </div>
            <div class="claim-step completed">
              <div class="claim-step__circle">${icon('check', 18)}</div>
              <div class="claim-step__label">Verification</div>
              <div class="claim-step__date">14 May 2026</div>
            </div>
            <div class="claim-step active">
              <div class="claim-step__circle">3</div>
              <div class="claim-step__label">Claim<br>Submitted</div>
              <div class="claim-step__date">16 May 2026</div>
            </div>
            <div class="claim-step">
              <div class="claim-step__circle">4</div>
              <div class="claim-step__label" style="color:var(--text-muted)">Insurer<br>Review</div>
              <div class="claim-step__date">In Progress</div>
            </div>
            <div class="claim-step">
              <div class="claim-step__circle">5</div>
              <div class="claim-step__label" style="color:var(--text-muted)">Settlement</div>
              <div class="claim-step__date">Pending</div>
            </div>
          </div>
        </div>

        <!-- Bottom Grid -->
        <div class="grid grid-3" style="gap:16px;align-items:start">

          <!-- Uploaded Documents -->
          <div class="dash-section" style="grid-column:span 2">
            <div class="dash-section__header">
              <span class="dash-section__title">Uploaded Documents</span>
              <a href="#/upload" class="btn btn--outline btn--sm">View All</a>
            </div>
            <div style="display:flex;flex-direction:column;gap:0">
              ${[
                { name: 'Hospital Bill.pdf', date: '12 May 2026', badge: 'review' },
                { name: 'Discharge Summary.pdf', date: '12 May 2026', badge: 'review' },
                { name: 'Lab Reports.pdf', date: '12 May 2026', badge: 'review' }
              ].map((d, i, arr) => `
                <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 0;${i !== arr.length-1 ? 'border-bottom:1px solid var(--border)' : ''}">
                  <div style="display:flex;align-items:center;gap:12px">
                    <div style="width:38px;height:38px;border-radius:var(--radius-sm);background:var(--bg-lavender);color:var(--primary);display:flex;align-items:center;justify-content:center;flex-shrink:0">${icon('doc', 18)}</div>
                    <div>
                      <div style="font-weight:600;font-size:0.9rem;color:var(--text-dark)">${d.name}</div>
                      <div style="font-size:0.78rem;color:var(--text-muted)">${d.date}</div>
                    </div>
                  </div>
                  <span class="status-badge status-badge--${d.badge}">Uploaded</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Right column: Claim Manager + CTA -->
          <div style="display:flex;flex-direction:column;gap:16px">

            <!-- Claim Manager -->
            <div class="dash-section">
              <div class="dash-section__header" style="margin-bottom:14px">
                <span class="dash-section__title">Claim Manager</span>
              </div>
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
                <div style="width:44px;height:44px;border-radius:50%;background:var(--primary-light);display:flex;align-items:center;justify-content:center;font-family:var(--font-heading);font-size:1.2rem;color:var(--primary);flex-shrink:0">N</div>
                <div>
                  <div style="font-weight:700;color:var(--text-dark);font-size:0.95rem">Neha Verma</div>
                  <div style="font-size:0.8rem;color:var(--text-muted)">Senior Claim Expert</div>
                </div>
              </div>
              <div style="background:var(--bg-lavender);border-radius:var(--radius-sm);padding:12px 14px;display:flex;flex-direction:column;gap:8px;font-size:0.85rem;margin-bottom:14px">
                <div style="display:flex;align-items:center;gap:8px;color:var(--text-body)">${icon('phone',15)} +91 98765 43210</div>
                <div style="display:flex;align-items:center;gap:8px;color:var(--text-body)">${icon('mail',15)} neha@claimsure.in</div>
              </div>
              <button class="btn btn--outline btn--sm" style="width:100%">Message Neha</button>
            </div>

            <!-- Need Help CTA -->
            <div class="cta-banner" style="padding:24px 20px;border-radius:var(--radius-md);text-align:left">
              <div style="font-family:var(--font-heading);font-size:1.3rem;color:#fff;margin-bottom:8px">Need Help?</div>
              <p style="color:rgba(255,255,255,0.85);font-size:0.85rem;margin-bottom:16px;line-height:1.5">Support available Mon–Sat, 9 AM–7 PM.</p>
              <a href="#/contact" class="btn btn--white btn--sm">Contact Support</a>
            </div>
          </div>

        </div>
      </div>
    </main>
  </div>
  `;
}

