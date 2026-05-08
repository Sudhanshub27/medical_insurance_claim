import { icon } from '../components/icons.js';

export function schedulePage() {
  return `
  <section class="page-header">
    <div class="container">
      <p class="section-label">Schedule a Visit</p>
      <h1>We'll Come to You</h1>
      <p class="subtitle">Schedule a convenient home visit. Our verified representative will collect your documents and explain your policy benefits face-to-face.</p>
    </div>
  </section>

  <section class="section">
    <div class="container" style="max-width:800px">
      <div class="trust-badges mb-5 reveal">
        <div class="trust-badge">${icon('check', 16)} ID-Verified Representatives</div>
        <div class="trust-badge">${icon('shield', 16)} Secure Document Handling</div>
        <div class="trust-badge">${icon('clock', 16)} Confirmation Within 2 Hours</div>
      </div>

      <div class="card reveal" style="padding:40px">
        <h3 class="mb-4" style="text-align:center">Schedule Your Home Visit</h3>

        <form id="schedule-form" onsubmit="event.preventDefault();alert('Visit scheduled successfully! You will receive a confirmation call within 2 hours.')">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="sch-name">Full Name *</label>
              <input class="form-input" type="text" id="sch-name" placeholder="Enter your full name" required />
            </div>
            <div class="form-group">
              <label class="form-label" for="sch-phone">Phone Number *</label>
              <input class="form-input" type="tel" id="sch-phone" placeholder="+91 98765 43210" required />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="sch-email">Email Address *</label>
            <input class="form-input" type="email" id="sch-email" placeholder="you@example.com" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="sch-address">Complete Address *</label>
            <textarea class="form-input" id="sch-address" placeholder="Flat/House no., Building, Street, Area, City, PIN Code" rows="3" required></textarea>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="sch-date">Preferred Date *</label>
              <input class="form-input" type="date" id="sch-date" required />
            </div>
            <div class="form-group">
              <label class="form-label">Preferred Time Slot *</label>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
                ${['9 AM – 12 PM', '12 PM – 3 PM', '3 PM – 6 PM', '6 PM – 8 PM'].map((s, i) => `
                  <label style="display:flex;align-items:center;gap:8px;padding:10px 14px;border:2px solid var(--border);border-radius:var(--radius-sm);cursor:pointer;font-size:.88rem;transition:var(--transition)">
                    <input type="radio" name="time-slot" value="${s}" ${i === 0 ? 'checked' : ''} style="accent-color:var(--primary)" /> ${s}
                  </label>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="sch-provider">Insurance Provider</label>
            <select class="form-input" id="sch-provider">
              <option value="">Select your provider (optional)</option>
              <option>LIC of India</option><option>HDFC Life</option><option>ICICI Prudential</option>
              <option>SBI Life</option><option>Star Health</option><option>Bajaj Allianz</option>
              <option>Other</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="sch-notes">Special Instructions (Optional)</label>
            <textarea class="form-input" id="sch-notes" placeholder="Any specific requirements, landmarks for direction, or questions..." rows="3"></textarea>
          </div>

          <div style="background:var(--bg-cream);border-radius:var(--radius-sm);padding:16px;margin-bottom:24px;display:flex;align-items:flex-start;gap:12px">
            <span style="color:var(--accent-gold);flex-shrink:0;margin-top:2px">${icon('users', 20)}</span>
            <div style="font-size:.88rem;color:var(--text-body)">
              <strong style="color:var(--text-dark)">What to Expect</strong><br>
              Our representative will carry a ClaimSure ID badge. They will explain the process, collect required documents, and provide a receipt for all collected items. Typical visit duration: 20–30 minutes.
            </div>
          </div>

          <button type="submit" class="btn btn--gold btn--lg" style="width:100%">${icon('calendar', 18)} Confirm Home Visit</button>
        </form>
      </div>
    </div>
  </section>
  `;
}
