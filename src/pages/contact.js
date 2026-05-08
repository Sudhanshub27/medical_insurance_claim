import { icon } from '../components/icons.js';

export function contactPage() {
  return `
  <section class="page-header">
    <div class="container">
      <p class="section-label">Contact Us</p>
      <h1>We're Here to Help</h1>
      <p class="subtitle">Have questions or need assistance? Reach out to our friendly support team.</p>
    </div>
  </section>

  <section class="section" style="padding-top:32px">
    <div class="container">
      <div class="grid grid-2" style="gap:40px">
        <!-- CONTACT FORM -->
        <div class="card reveal" style="padding:40px">
          <h3 class="mb-3">Send Us a Message</h3>
          <form onsubmit="event.preventDefault();alert('Thank you! We\\'ll respond within 24 hours.')">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="ct-name">Your Name *</label>
                <input class="form-input" type="text" id="ct-name" placeholder="Full name" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="ct-email">Email *</label>
                <input class="form-input" type="email" id="ct-email" placeholder="you@example.com" required />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="ct-subject">Subject</label>
              <select class="form-input" id="ct-subject">
                <option>General Inquiry</option>
                <option>Claim Assistance</option>
                <option>Doorstep Visit</option>
                <option>Technical Support</option>
                <option>Feedback</option>
                <option>Partnership</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="ct-message">Message *</label>
              <textarea class="form-input" id="ct-message" placeholder="Tell us how we can help..." rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn--primary" style="width:100%">${icon('mail', 16)} Send Message</button>
          </form>
        </div>

        <!-- CONTACT INFO -->
        <div class="reveal reveal-delay-1">
          <div class="card mb-3" style="padding:28px">
            <div style="display:flex;gap:16px;align-items:flex-start">
              <div class="card__icon">${icon('phone')}</div>
              <div>
                <div class="card__title">Phone</div>
                <div class="card__text">+91 12345 67890</div>
                <div style="font-size:.82rem;color:var(--text-muted)">Mon–Sat, 9 AM – 7 PM IST</div>
              </div>
            </div>
          </div>

          <div class="card mb-3" style="padding:28px">
            <div style="display:flex;gap:16px;align-items:flex-start">
              <div class="card__icon card__icon--gold">${icon('mail')}</div>
              <div>
                <div class="card__title">Email</div>
                <div class="card__text">support@claimsure.in</div>
                <div style="font-size:.82rem;color:var(--text-muted)">We respond within 24 hours</div>
              </div>
            </div>
          </div>

          <div class="card mb-3" style="padding:28px">
            <div style="display:flex;gap:16px;align-items:flex-start">
              <div class="card__icon card__icon--teal">${icon('map')}</div>
              <div>
                <div class="card__title">Office</div>
                <div class="card__text">123 Trust Tower, 4th Floor<br>Andheri West, Mumbai — 400058</div>
              </div>
            </div>
          </div>

          <div class="card" style="padding:28px">
            <div style="display:flex;gap:16px;align-items:flex-start">
              <div class="card__icon card__icon--pink">${icon('clock')}</div>
              <div>
                <div class="card__title">Support Hours</div>
                <div class="card__text">Monday – Saturday: 9:00 AM – 7:00 PM<br>Sunday: Closed</div>
              </div>
            </div>
          </div>

          <!-- MAP PLACEHOLDER -->
          <div class="card" style="margin-top:24px;padding:0;overflow:hidden;height:200px;display:flex;align-items:center;justify-content:center;background:var(--bg-lavender)">
            <div style="text-align:center;color:var(--text-muted)">
              ${icon('map', 40)}
              <div style="margin-top:8px;font-size:.88rem">Map: Andheri West, Mumbai</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}
