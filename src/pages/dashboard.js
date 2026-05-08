import { icon } from '../components/icons.js';

export function dashboardPage() {
  return `
  <section style="padding-top:calc(var(--header-h) + 32px);padding-bottom:16px;background:var(--bg-lavender)">
    <div class="container">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px">
        <div>
          <h2 style="margin-bottom:4px">Welcome back, Rajesh 👋</h2>
          <p style="color:var(--text-muted)">Here's an overview of your insurance benefit journey.</p>
        </div>
        <a href="#/upload" class="btn btn--primary btn--sm">${icon('upload', 16)} Upload New Document</a>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:32px">
    <div class="container">
      <!-- STATS -->
      <div class="grid grid-4 mb-4 reveal">
        ${[
          { num: '3', label: 'Documents Uploaded', color: 'var(--primary)' },
          { num: '2', label: 'Active Requests', color: 'var(--accent-gold)' },
          { num: '1', label: 'Visit Scheduled', color: 'var(--accent-teal)' },
          { num: '₹47K', label: 'Benefits Identified', color: 'var(--success)' },
        ].map(s => `
          <div class="dash-stat">
            <div class="dash-stat__number" style="color:${s.color}">${s.num}</div>
            <div class="dash-stat__label">${s.label}</div>
          </div>
        `).join('')}
      </div>

      <div class="grid grid-2">
        <!-- DOCUMENTS -->
        <div class="dash-card reveal reveal-delay-1">
          <div class="dash-card__header">
            <div class="dash-card__title">${icon('doc', 18)} Uploaded Documents</div>
            <a href="#/upload" style="font-size:.85rem;color:var(--primary);font-weight:500">Upload More</a>
          </div>
          ${[
            { name: 'Health Policy - Star Health', date: 'May 3, 2026', status: 'Under Review', badge: 'review' },
            { name: 'Motor Insurance - Bajaj Allianz', date: 'Apr 28, 2026', status: 'Benefits Found', badge: 'active' },
            { name: 'Life Policy - LIC', date: 'Apr 20, 2026', status: 'Pending Documents', badge: 'pending' },
          ].map(d => `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--border)">
              <div>
                <div style="font-weight:600;font-size:.9rem;color:var(--text-dark)">${d.name}</div>
                <div style="font-size:.8rem;color:var(--text-muted)">Uploaded: ${d.date}</div>
              </div>
              <span class="status-badge status-badge--${d.badge}">${d.status}</span>
            </div>
          `).join('')}
        </div>

        <!-- SERVICE REQUESTS -->
        <div class="dash-card reveal reveal-delay-2">
          <div class="dash-card__header">
            <div class="dash-card__title">${icon('clipboard', 18)} Service Requests</div>
          </div>
          ${[
            { title: 'Health Claim Review', desc: 'Star Health - Policy #SH-78234', status: 'In Progress', badge: 'active' },
            { title: 'Benefit Discovery', desc: 'Bajaj Allianz - Motor', status: 'Completed', badge: 'active' },
          ].map(r => `
            <div style="padding:14px;background:var(--bg-lavender);border-radius:var(--radius-sm);margin-bottom:10px">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
                <div style="font-weight:600;font-size:.9rem;color:var(--text-dark)">${r.title}</div>
                <span class="status-badge status-badge--${r.badge}">${r.status}</span>
              </div>
              <div style="font-size:.82rem;color:var(--text-muted)">${r.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="grid grid-2" style="margin-top:24px">
        <!-- UPCOMING VISIT -->
        <div class="dash-card reveal reveal-delay-1">
          <div class="dash-card__header">
            <div class="dash-card__title">${icon('calendar', 18)} Upcoming Visit</div>
          </div>
          <div style="background:var(--bg-cream);border-radius:var(--radius-sm);padding:20px;display:flex;gap:16px;align-items:flex-start">
            <div style="min-width:56px;height:56px;border-radius:var(--radius-sm);background:linear-gradient(135deg,var(--accent-gold),var(--accent-warm));color:#1A1A2E;display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:700">
              <div style="font-size:1.2rem">12</div>
              <div style="font-size:.65rem">MAY</div>
            </div>
            <div>
              <div style="font-weight:700;color:var(--text-dark);margin-bottom:4px">Doorstep Document Collection</div>
              <div style="font-size:.85rem;color:var(--text-body);margin-bottom:4px">3:00 PM – 3:30 PM | Andheri West, Mumbai</div>
              <div style="font-size:.8rem;color:var(--text-muted)">Representative: Vikram S. (ID: CS-4521)</div>
            </div>
          </div>
        </div>

        <!-- PROFILE -->
        <div class="dash-card reveal reveal-delay-2">
          <div class="dash-card__header">
            <div class="dash-card__title">${icon('users', 18)} Profile</div>
            <a href="#" style="font-size:.85rem;color:var(--primary);font-weight:500" onclick="event.preventDefault()">Edit</a>
          </div>
          <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px">
            <div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,var(--primary),#9B6FE8);color:#fff;font-size:1.4rem;font-weight:700;display:flex;align-items:center;justify-content:center">R</div>
            <div>
              <div style="font-weight:700;color:var(--text-dark)">Rajesh Sharma</div>
              <div style="font-size:.85rem;color:var(--text-muted)">rajesh.sharma@email.com</div>
            </div>
          </div>
          <div style="font-size:.88rem;color:var(--text-body);display:flex;flex-direction:column;gap:6px">
            <div>${icon('phone', 14)} +91 98765 43210</div>
            <div>${icon('map', 14)} Mumbai, Maharashtra</div>
            <div>${icon('shield', 14)} Member since April 2026</div>
          </div>
        </div>
      </div>

      <!-- SUPPORT CTA -->
      <div class="cta-banner reveal" style="margin-top:32px">
        <h2 style="font-size:1.4rem">Need Help?</h2>
        <p>Our support team is available Mon–Sat, 9 AM – 7 PM</p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <a href="#/contact" class="btn btn--white btn--sm">${icon('mail', 16)} Contact Support</a>
          <a href="tel:+911234567890" class="btn btn--gold btn--sm">${icon('phone', 16)} Call Us</a>
        </div>
      </div>
    </div>
  </section>
  `;
}
