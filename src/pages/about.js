import { icon } from '../components/icons.js';

export function aboutPage() {
  return `
  <section class="page-header">
    <div class="container">
      <p class="section-label">About Us</p>
      <h1>Your Insurance Partner, <br>Not Just Another Company</h1>
      <p class="subtitle">We believe every family deserves to get the full value of what they're already paying for.</p>
    </div>
  </section>

  <!-- STORY -->
  <section class="section">
    <div class="container">
      <div class="grid grid-2" style="align-items:center;gap:48px">
        <div class="reveal">
          <p class="section-label">Our Story</p>
          <h2 class="mb-3">Born from a Simple Frustration</h2>
          <p class="mb-2">Our founder watched his parents struggle with a health insurance claim for months — missing documents, confusing forms, endless follow-ups. The claim was valid, but the process was broken.</p>
          <p class="mb-2">That's when ClaimSure was born. We realized that millions of Indian families are in the same situation: <strong>paying for insurance they don't fully understand</strong>, and missing out on benefits they're entitled to.</p>
          <p>Today, we've helped over 10,000 families across India recover benefits worth crores — one policy at a time.</p>
        </div>
        <div class="reveal reveal-delay-1" style="background:var(--bg-lavender);border-radius:var(--radius-md);padding:48px;text-align:center">
          <div style="font-size:3rem;font-family:var(--font-heading);color:var(--primary);margin-bottom:8px">10,000+</div>
          <div style="font-weight:600;color:var(--text-dark);margin-bottom:24px">Families Helped</div>
          <div class="grid grid-2" style="gap:16px">
            <div style="background:#fff;border-radius:var(--radius-sm);padding:20px">
              <div style="font-size:1.6rem;font-weight:700;color:var(--accent-gold)">₹4.2Cr+</div>
              <div style="font-size:.82rem;color:var(--text-muted)">Benefits Recovered</div>
            </div>
            <div style="background:#fff;border-radius:var(--radius-sm);padding:20px">
              <div style="font-size:1.6rem;font-weight:700;color:var(--accent-teal)">98%</div>
              <div style="font-size:.82rem;color:var(--text-muted)">Satisfaction Rate</div>
            </div>
            <div style="background:#fff;border-radius:var(--radius-sm);padding:20px">
              <div style="font-size:1.6rem;font-weight:700;color:var(--primary)">15+</div>
              <div style="font-size:.82rem;color:var(--text-muted)">Cities Covered</div>
            </div>
            <div style="background:#fff;border-radius:var(--radius-sm);padding:20px">
              <div style="font-size:1.6rem;font-weight:700;color:var(--accent-pink)">3–5 Days</div>
              <div style="font-size:.82rem;color:var(--text-muted)">Avg. Review Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MISSION & VISION -->
  <section class="section section--cream">
    <div class="container">
      <div class="grid grid-2" style="gap:32px">
        <div class="card reveal" style="border-left:4px solid var(--primary)">
          <div class="card__icon">${icon('target')}</div>
          <h3 class="mb-2">Our Mission</h3>
          <p class="card__text">To ensure every Indian family receives the full value of their insurance by simplifying the claims process with expert human assistance, transparent guidance, and doorstep convenience.</p>
        </div>
        <div class="card reveal reveal-delay-1" style="border-left:4px solid var(--accent-gold)">
          <div class="card__icon card__icon--gold">${icon('eye')}</div>
          <h3 class="mb-2">Our Vision</h3>
          <p class="card__text">A world where no insurance benefit goes unclaimed. Where families are empowered with clarity, supported with care, and treated with the dignity they deserve.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- VALUES -->
  <section class="section">
    <div class="container text-center">
      <p class="section-label reveal">What We Stand For</p>
      <h2 class="mb-5 reveal">Our Core Values</h2>
      <div class="grid grid-3">
        ${[
          { icon: 'heart', title: 'Empathy First', text: 'We listen, understand, and support. Every family\'s situation is unique.' },
          { icon: 'shield', title: 'Trust & Transparency', text: 'No hidden fees, no jargon. We explain everything in simple language.' },
          { icon: 'users', title: 'Human Connection', text: 'Real experts, not chatbots. Personal guidance at every step.' },
          { icon: 'lock', title: 'Privacy & Security', text: 'Your documents are sacred. We protect them like our own.' },
          { icon: 'award', title: 'Excellence', text: 'We don\'t stop until every eligible benefit is identified and recovered.' },
          { icon: 'thumbsUp', title: 'Accessibility', text: 'From digital uploads to doorstep visits — we meet you where you are.' },
        ].map((v, i) => `
          <div class="card reveal reveal-delay-${(i % 3) + 1}">
            <div class="card__icon${i % 2 ? ' card__icon--gold' : ''}">${icon(v.icon)}</div>
            <div class="card__title">${v.title}</div>
            <div class="card__text">${v.text}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- TEAM -->
  <section class="section section--lavender">
    <div class="container text-center">
      <p class="section-label reveal">Meet the Team</p>
      <h2 class="mb-3 reveal">Real People Behind ClaimSure</h2>
      <p class="subtitle mx-auto mb-5 reveal">A dedicated team of insurance professionals, customer support specialists, and technology experts.</p>
      <div class="grid grid-4">
        ${[
          { name: 'Arun Mehta', role: 'Founder & CEO', initial: 'A' },
          { name: 'Dr. Kavita Rao', role: 'Head of Claims', initial: 'K' },
          { name: 'Vikram Singh', role: 'Operations Lead', initial: 'V' },
          { name: 'Neha Gupta', role: 'Customer Success', initial: 'N' },
        ].map((m, i) => `
          <div class="card reveal reveal-delay-${i + 1}" style="text-align:center">
            <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,var(--primary),#9B6FE8);color:#fff;font-size:1.8rem;font-weight:700;display:flex;align-items:center;justify-content:center;margin:0 auto 16px">${m.initial}</div>
            <div class="card__title">${m.name}</div>
            <div style="font-size:.85rem;color:var(--text-muted)">${m.role}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section">
    <div class="container">
      <div class="cta-banner reveal">
        <h2>Your Insurance Benefits Are Waiting</h2>
        <p>Let our team help you discover what your policy really covers.</p>
        <a href="#/upload" class="btn btn--gold btn--lg">Get Started Today</a>
      </div>
    </div>
  </section>
  `;
}
