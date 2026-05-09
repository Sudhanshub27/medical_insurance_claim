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

  return `
  <div class="dashboard-wrapper">
    
    <!-- Mobile Overlay -->
    <div id="dashboard-mobile-overlay" class="dashboard-mobile-overlay" onclick="window.toggleDashboardSidebar()"></div>

    <!-- Sidebar -->
    <aside id="dashboard-sidebar" class="dashboard-sidebar">
      <div class="dashboard-sidebar__logo">
        ${icon('shield', 28)} ClaimSure
      </div>
      <nav class="dashboard-sidebar__nav" style="padding-top: 24px;">
        <a href="#/dashboard" class="dashboard-nav-item active">${icon('home', 18)} Dashboard</a>
        <a href="#/my-claims" class="dashboard-nav-item">${icon('clipboard', 18)} My Claims</a>
        <a href="#/upload" class="dashboard-nav-item">${icon('upload', 18)} Upload Documents</a>
        <a href="#/messages" class="dashboard-nav-item">${icon('mail', 18)} Messages</a>
        <a href="#/contact" class="dashboard-nav-item" style="margin-top: auto;">${icon('helpCircle', 18)} Support</a>
        <a href="#/" class="dashboard-nav-item">${icon('arrow', 18)} Back</a>
      </nav>
      <div class="dashboard-sidebar__bottom">
        <a href="#" onclick="event.preventDefault();window.handleLogout()" class="dashboard-nav-item" style="color:#FF8A8A;font-weight:700;">${icon('logout', 18)} Log Out</a>
      </div>
    </aside>

    <!-- Main Content Area -->
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
          <h1 style="margin-bottom:8px">Welcome, ${user.name}</h1>
          <p class="subtitle">Here's the status of your claim journey.</p>
        </div>

        <!-- Stats Row -->
        <div class="grid grid-4 mb-4">
          <div class="card" style="padding:24px;display:flex;align-items:center;gap:16px">
            <div style="flex:1">
              <div class="section-label" style="margin-bottom:4px">Claim ID</div>
              <div style="font-size:1.4rem;font-weight:700;color:var(--text-dark)">MC25125</div>
            </div>
            <div style="color:var(--text-muted)">${icon('clipboard', 24)}</div>
          </div>
          <div class="card" style="padding:24px;display:flex;align-items:center;gap:16px">
            <div class="card__icon card__icon--teal" style="margin-bottom:0;flex-shrink:0">${icon('shield', 24)}</div>
            <div>
              <div class="section-label" style="margin-bottom:4px">Est. Amount</div>
              <div style="font-size:1.4rem;font-weight:700;color:var(--text-dark)">₹ 45,230</div>
            </div>
          </div>
          <div class="card" style="padding:24px;display:flex;align-items:center;gap:16px">
            <div class="card__icon card__icon--gold" style="margin-bottom:0;flex-shrink:0">${icon('clock', 24)}</div>
            <div>
              <div class="section-label" style="margin-bottom:4px">Status</div>
              <div style="font-size:1.2rem;font-weight:700;color:var(--text-dark)">Under Review</div>
            </div>
          </div>
          <div class="card" style="padding:24px;display:flex;align-items:center;gap:16px">
            <div class="card__icon" style="margin-bottom:0;flex-shrink:0">${icon('check', 24)}</div>
            <div>
              <div class="section-label" style="margin-bottom:4px">Recovered</div>
              <div style="font-size:1.4rem;font-weight:700;color:var(--text-dark)">₹ 0</div>
            </div>
          </div>
        </div>

        <!-- Progress Stepper -->
        <div class="card mb-4" style="padding:32px 40px">
          <h3 class="mb-4">Claim Progress</h3>
          <div class="claim-stepper">
            <div class="claim-stepper__line" style="width: 50%;"></div>
            
            <div class="claim-step completed">
              <div class="claim-step__circle">${icon('check', 16)}</div>
              <div>
                <div class="claim-step__label">Documents Uploaded</div>
                <div class="claim-step__date">12 May 2026</div>
              </div>
            </div>
            
            <div class="claim-step completed">
              <div class="claim-step__circle">${icon('check', 16)}</div>
              <div>
                <div class="claim-step__label">Verification</div>
                <div class="claim-step__date">14 May 2026</div>
              </div>
            </div>
            
            <div class="claim-step active">
              <div class="claim-step__circle">3</div>
              <div>
                <div class="claim-step__label">Claim Submitted</div>
                <div class="claim-step__date">16 May 2026</div>
              </div>
            </div>
            
            <div class="claim-step">
              <div class="claim-step__circle">4</div>
              <div>
                <div class="claim-step__label" style="color:var(--text-muted)">Insurer Review</div>
                <div class="claim-step__date">In Progress</div>
              </div>
            </div>
            
            <div class="claim-step">
              <div class="claim-step__circle">5</div>
              <div>
                <div class="claim-step__label" style="color:var(--text-muted)">Settlement</div>
                <div class="claim-step__date">Pending</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Grid -->
        <div class="grid grid-3">
          
          <!-- Uploaded Documents -->
          <div class="card" style="grid-column: span 1.5;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px">
              <h3 style="font-size:1.3rem">Uploaded Documents</h3>
              <a href="#/upload" class="btn btn--outline btn--sm">View All</a>
            </div>
            <div style="display:flex;flex-direction:column;gap:16px">
              ${[
      { name: 'Hospital Bill.pdf', date: '12 May 2026', status: 'Uploaded', badge: 'review' },
      { name: 'Discharge Summary.pdf', date: '12 May 2026', status: 'Uploaded', badge: 'review' },
      { name: 'Lab Reports.pdf', date: '12 May 2026', status: 'Uploaded', badge: 'review' }
    ].map((d, i, arr) => `
                <div style="display:flex;align-items:center;justify-content:space-between;padding-bottom:16px;${i !== arr.length - 1 ? 'border-bottom:1px solid var(--border)' : ''}">
                  <div style="display:flex;align-items:center;gap:12px">
                    <div style="width:40px;height:40px;border-radius:8px;background:var(--bg-lavender);color:var(--primary);display:flex;align-items:center;justify-content:center">${icon('doc', 20)}</div>
                    <div>
                      <div style="font-weight:600;color:var(--text-dark)">${d.name}</div>
                      <div style="font-size:0.8rem;color:var(--text-muted)">${d.date}</div>
                    </div>
                  </div>
                  <span class="status-badge status-badge--${d.badge}">${d.status}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Claim Manager -->
          <div class="card">
            <h3 style="font-size:1.3rem;margin-bottom:24px">Claim Manager</h3>
            <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px">
              <img src="/avatars/priya.png" alt="Neha Verma" style="width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid var(--primary-light)" />
              <div>
                <div style="font-weight:700;color:var(--text-dark);font-size:1.1rem">Neha Verma</div>
                <div style="font-size:0.85rem;color:var(--text-muted)">Senior Claim Expert</div>
              </div>
            </div>
            <div style="background:var(--bg-lavender);padding:16px;border-radius:var(--radius-sm);margin-bottom:24px;display:flex;flex-direction:column;gap:12px;font-size:0.9rem">
              <div style="display:flex;align-items:center;gap:12px;color:var(--text-dark)">${icon('phone', 18)} +91 98765 43210</div>
              <div style="display:flex;align-items:center;gap:12px;color:var(--text-dark)">${icon('mail', 18)} neha@claimsure.in</div>
            </div>
            <button class="btn btn--outline btn--sm" style="width:100%">Message Neha</button>
          </div>

          <!-- Need Help CTA -->
          <div class="cta-banner" style="padding:32px 24px;display:flex;flex-direction:column;justify-content:center">
            <h3 style="color:#fff;font-size:1.6rem;margin-bottom:12px">Need Help?</h3>
            <p style="color:rgba(255,255,255,0.9);font-size:0.9rem;margin-bottom:24px;line-height:1.5">Our support team is available Mon-Sat, 9 AM - 7 PM to assist you with any questions.</p>
            <a href="#/contact" class="btn btn--white btn--sm" style="margin-bottom:16px">Contact Support</a>
            <div style="color:rgba(255,255,255,0.8);font-size:0.85rem">Call: 1800-309-XXXX</div>
          </div>

        </div>
      </div>
    </main>
  </div>
  `;
}
