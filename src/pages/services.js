import { icon } from '../components/icons.js';

export function servicesPage() {
  return `
  <section class="page-header">
    <div class="container">
      <p class="section-label">Services & Process</p>
      <h1>What We Do &<br>How We Do It</h1>
      <p class="subtitle">Comprehensive insurance benefit recovery — through digital or doorstep assistance.</p>
    </div>
  </section>

  <!-- SERVICES GRID -->
  <section class="section">
    <div class="container text-center">
      <p class="section-label reveal">Our Services</p>
      <h2 class="mb-3 reveal">Everything You Need for Claim Success</h2>
      <p class="subtitle mx-auto mb-5 reveal">From policy review to benefit recovery — we handle the heavy lifting.</p>
      <div class="grid grid-3">
        ${[
          { icon: 'doc', color: '', title: 'Insurance Document Review', text: 'Our experts thoroughly review your policy documents to identify all coverages, benefits, and eligible claims you might be missing.' },
          { icon: 'clipboard', color: 'gold', title: 'Claim Paperwork Assistance', text: 'We prepare, organize, and verify all required documentation to ensure your claims are filed correctly the first time.' },
          { icon: 'search', color: 'teal', title: 'Benefit Discovery', text: 'We uncover hidden benefits, riders, and bonus coverages that most policyholders don\'t even know they have.' },
          { icon: 'dollar', color: 'pink', title: 'Reimbursement Guidance', text: 'Step-by-step support for filing reimbursement claims with the right forms, at the right time, to the right department.' },
          { icon: 'home', color: 'gold', title: 'Doorstep Document Pickup', text: 'Can\'t visit an office? Our verified representatives come to your home to collect documents at your convenience.' },
          { icon: 'helpCircle', color: '', title: 'Policy Explanation', text: 'We translate complex insurance jargon into simple language so you truly understand what your policy covers.' },
        ].map((s, i) => `
          <div class="card reveal reveal-delay-${(i % 3) + 1}">
            <div class="card__icon${s.color ? ' card__icon--' + s.color : ''}">${icon(s.icon)}</div>
            <div class="card__title">${s.title}</div>
            <div class="card__text">${s.text}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS - TABBED -->
  <section class="section section--cream">
    <div class="container">
      <div class="text-center">
        <p class="section-label reveal">Step-by-Step Process</p>
        <h2 class="mb-3 reveal">How It Works</h2>
        <p class="subtitle mx-auto mb-5 reveal">Choose your preferred method — both are simple, secure, and supported.</p>
      </div>

      <div class="tabs reveal">
        <div class="tab-btn active" data-tab="tab-digital">${icon('upload', 16)} Digital Upload</div>
        <div class="tab-btn" data-tab="tab-doorstep">${icon('home', 16)} Doorstep Visit</div>
      </div>

      <div class="tab-content active" id="tab-digital">
        <div class="timeline reveal" style="max-width:700px;margin:0 auto">
          ${[
            { step: 'Step 1', title: 'Create Your Account', text: 'Sign up with your name, email, and phone number. It takes less than 2 minutes.' },
            { step: 'Step 2', title: 'Upload Policy Documents', text: 'Upload your insurance policy, ID proof, and any related documents through our secure portal. Supported formats: PDF, JPG, PNG.' },
            { step: 'Step 3', title: 'Expert Review Begins', text: 'Our insurance specialists manually review your documents within 3–5 business days. We identify all eligible benefits and missed claims.' },
            { step: 'Step 4', title: 'Receive Your Benefit Report', text: 'We send you a clear, jargon-free report explaining what benefits you can claim, with exact amounts and steps.' },
            { step: 'Step 5', title: 'Guided Claim Filing', text: 'Our team guides you through filing each claim — preparing forms, organizing documents, and ensuring nothing is missed.' },
            { step: 'Step 6', title: 'Benefit Recovery', text: 'Once claims are processed, you receive your entitled benefits directly from your insurer. We charge only upon success.' },
          ].map(s => `
            <div class="timeline__item">
              <div class="timeline__step">${s.step}</div>
              <div class="timeline__title">${s.title}</div>
              <div class="timeline__text">${s.text}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="tab-content" id="tab-doorstep">
        <div class="timeline reveal" style="max-width:700px;margin:0 auto">
          ${[
            { step: 'Step 1', title: 'Schedule a Home Visit', text: 'Choose a date, time slot, and provide your address. We\'ll confirm your appointment within 2 hours.' },
            { step: 'Step 2', title: 'Verified Representative Visits', text: 'Our ID-verified representative arrives at your home. They\'ll explain the process and collect required documents.' },
            { step: 'Step 3', title: 'Face-to-Face Policy Review', text: 'During the visit, our representative explains your policy coverage in simple terms and answers all your questions.' },
            { step: 'Step 4', title: 'Documents Securely Processed', text: 'Your documents are digitized, encrypted, and sent to our expert review team. Physical copies are returned to you.' },
            { step: 'Step 5', title: 'Benefit Report & Guidance', text: 'You receive a comprehensive report via email/phone with all recoverable benefits and next steps.' },
            { step: 'Step 6', title: 'Claim Support & Recovery', text: 'We handle the claim filing process end-to-end and ensure you receive your entitled benefits.' },
          ].map(s => `
            <div class="timeline__item">
              <div class="timeline__step">${s.step}</div>
              <div class="timeline__title">${s.title}</div>
              <div class="timeline__text">${s.text}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="text-center reveal" style="margin-top:40px">
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <a href="#/upload" class="btn btn--primary btn--lg">${icon('upload', 18)} Upload Documents</a>
          <a href="#/schedule" class="btn btn--gold btn--lg">${icon('calendar', 18)} Schedule Home Visit</a>
        </div>
      </div>
    </div>
  </section>

  <!-- PRICING -->
  <section class="section">
    <div class="container text-center">
      <p class="section-label reveal">Transparent Pricing</p>
      <h2 class="mb-3 reveal">No Upfront Fees. Ever.</h2>
      <p class="subtitle mx-auto mb-5 reveal">We believe in earning our fee — you pay only when we deliver results.</p>
      <div class="grid grid-3" style="max-width:900px;margin:0 auto">
        <div class="card reveal reveal-delay-1 text-center">
          <div style="font-size:2.5rem;margin-bottom:8px">📋</div>
          <div class="card__title">Policy Review</div>
          <div style="font-size:1.8rem;font-weight:700;color:var(--success);margin:8px 0">FREE</div>
          <div class="card__text">We review your policy at no charge and tell you what benefits you can recover.</div>
        </div>
        <div class="card card--highlight reveal reveal-delay-2 text-center">
          <div style="font-size:2.5rem;margin-bottom:8px">💰</div>
          <div class="card__title">Claim Assistance</div>
          <div style="font-size:1.8rem;font-weight:700;color:var(--primary);margin:8px 0">Success Fee</div>
          <div class="card__text">A small percentage only on successfully recovered benefits. No recovery, no charge.</div>
        </div>
        <div class="card reveal reveal-delay-3 text-center">
          <div style="font-size:2.5rem;margin-bottom:8px">🏠</div>
          <div class="card__title">Doorstep Visit</div>
          <div style="font-size:1.8rem;font-weight:700;color:var(--accent-gold);margin:8px 0">Nominal Fee</div>
          <div class="card__text">A small visit fee applies, which is adjusted against your service charges upon engagement.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section section--lavender">
    <div class="container">
      <div class="cta-banner reveal">
        <h2>Start Your Benefit Recovery Today</h2>
        <p>It takes just 5 minutes to begin. Upload your documents or schedule a visit.</p>
        <a href="#/upload" class="btn btn--gold btn--lg">Get Started Free</a>
      </div>
    </div>
  </section>
  `;
}
