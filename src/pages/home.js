import { icon } from '../components/icons.js';

export function homePage() {
  return `
  <!-- HERO -->
  <section class="hero">
    <div class="container">
      <div class="hero__inner">
        <div class="hero__content">
          <div class="hero__tag">${icon('shield', 16)} Trusted by 10,000+ Families</div>
          <h1>Unlock the <span>Full Value</span> of Your Insurance</h1>
          <p class="hero__subtitle">Your insurance already covers benefits you may not know about. We help you discover, understand, and claim what's rightfully yours — with real human support, every step of the way.</p>
          <div class="hero__ctas">
            <a href="#/upload" class="btn btn--primary btn--lg">${icon('upload', 18)} Upload Documents</a>
            <a href="#/schedule" class="btn btn--gold btn--lg">${icon('home', 18)} Schedule Home Visit</a>
          </div>
          <div class="trust-badges">
            <div class="trust-badge">${icon('lock', 16)} Bank-Grade Security</div>
            <div class="trust-badge">${icon('shield', 16)} Privacy Protected</div>
            <div class="trust-badge">${icon('check', 16)} No Hidden Charges</div>
          </div>
        </div>
        <div class="hero__image">
          <img src="/hero-illustration.png" alt="Happy family receiving insurance assistance" loading="eager" />
        </div>
      </div>
    </div>
  </section>

  <!-- PROBLEM SECTION -->
  <section class="section">
    <div class="container text-center">
      <p class="section-label reveal">The Problem</p>
      <h2 class="mb-3 reveal">Insurance Shouldn't Be This Confusing</h2>
      <p class="subtitle mx-auto mb-5 reveal">Millions of policyholders miss out on benefits they're already paying for — simply because the process feels overwhelming.</p>
      <div class="grid grid-4">
        ${[
          { icon: 'helpCircle', color: '', title: 'Confusing Policies', text: 'Complex jargon, exclusions, and fine print make it nearly impossible to understand what you\'re covered for.' },
          { icon: 'dollar', color: 'gold', title: 'Unclaimed Benefits', text: 'Thousands of rupees in eligible claims go uncollected every year because people don\'t know what to file.' },
          { icon: 'doc', color: 'pink', title: 'Rejected Claims', text: 'Incorrect documentation or missed deadlines lead to claim rejections that could have been avoided.' },
          { icon: 'eye', color: 'teal', title: 'No Clarity on Process', text: 'Most people don\'t know the right steps, required documents, or timelines for filing claims.' },
        ].map((c, i) => `
          <div class="card reveal reveal-delay-${i + 1}">
            <div class="card__icon${c.color ? ' card__icon--' + c.color : ''}">${icon(c.icon)}</div>
            <div class="card__title">${c.title}</div>
            <div class="card__text">${c.text}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section class="section section--cream">
    <div class="container text-center">
      <p class="section-label reveal">Simple 4-Step Process</p>
      <h2 class="mb-3 reveal">How ClaimSure Works</h2>
      <p class="subtitle mx-auto mb-5 reveal">From document submission to benefit recovery — we make it effortless.</p>
      <div class="stepper reveal">
        ${[
          { title: 'Share Documents', text: 'Upload digitally or schedule a home pickup' },
          { title: 'Expert Review', text: 'Our team manually reviews your policy details' },
          { title: 'Guided Journey', text: 'We walk you through the entire claim process' },
          { title: 'Get Benefits', text: 'Receive the benefits your policy already covers' },
        ].map(s => `
          <div class="stepper__item">
            <div class="stepper__title">${s.title}</div>
            <div class="stepper__text">${s.text}</div>
          </div>
        `).join('')}
      </div>
      <div style="margin-top:40px" class="reveal">
        <a href="#/services" class="btn btn--outline">Learn More About Our Process ${icon('arrow', 16)}</a>
      </div>
    </div>
  </section>

  <!-- SERVICE OPTIONS -->
  <section class="section">
    <div class="container text-center">
      <p class="section-label reveal">Choose Your Way</p>
      <h2 class="mb-3 reveal">Two Simple Ways to Get Started</h2>
      <p class="subtitle mx-auto mb-5 reveal">Whether you prefer digital convenience or personal doorstep service — we've got you covered.</p>
      <div class="grid grid-2">
        <div class="card reveal reveal-delay-1" style="text-align:left">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
            <div class="card__icon">${icon('upload')}</div>
            <div>
              <div class="card__title" style="margin:0">Digital Upload</div>
              <div style="font-size:.85rem;color:var(--text-muted)">Quick & Convenient</div>
            </div>
          </div>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;margin-bottom:24px">
            ${['Upload documents from your phone or computer', 'Share policy credentials securely if needed', 'Track progress through your dashboard', 'Get updates via email and phone'].map(t => `
              <li style="display:flex;align-items:flex-start;gap:10px;font-size:.92rem">
                <span style="color:var(--success);flex-shrink:0;margin-top:2px">${icon('check', 18)}</span> ${t}
              </li>
            `).join('')}
          </ul>
          <a href="#/upload" class="btn btn--primary" style="width:100%">Upload Documents Now</a>
        </div>
        <div class="card card--highlight reveal reveal-delay-2" style="text-align:left">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
            <div class="card__icon card__icon--gold">${icon('home')}</div>
            <div>
              <div class="card__title" style="margin:0">Doorstep Assistance</div>
              <div style="font-size:.85rem;color:var(--text-muted)">Personal & Hassle-Free</div>
            </div>
          </div>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;margin-bottom:24px">
            ${['Schedule a home visit at your convenience', 'Our verified representative collects documents', 'Face-to-face policy explanation included', 'Best for senior citizens & busy families'].map(t => `
              <li style="display:flex;align-items:flex-start;gap:10px;font-size:.92rem">
                <span style="color:var(--success);flex-shrink:0;margin-top:2px">${icon('check', 18)}</span> ${t}
              </li>
            `).join('')}
          </ul>
          <a href="#/schedule" class="btn btn--gold" style="width:100%">Schedule a Home Visit</a>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY CHOOSE US -->
  <section class="section section--cream">
    <div class="container text-center">
      <p class="section-label reveal">Why ClaimSure?</p>
      <h2 class="mb-3 reveal">Built on Trust, Powered by Humans</h2>
      <p class="subtitle mx-auto mb-5 reveal">We're not an app or algorithm — we're real people who care about your financial well-being.</p>
      <div class="grid grid-3">
        ${[
          { icon: 'users', color: '', title: 'Expert Human Support', text: 'Real insurance professionals review your documents — not bots, not AI.' },
          { icon: 'lock', color: 'gold', title: 'Secure Document Handling', text: 'Your documents are encrypted, protected, and never shared with third parties.' },
          { icon: 'dollar', color: 'teal', title: 'Transparent Pricing', text: 'No upfront costs. We charge only when you successfully recover benefits.' },
          { icon: 'shield', color: 'pink', title: 'Privacy Protected', text: 'Your personal information stays confidential. We follow strict data protection standards.' },
          { icon: 'thumbsUp', color: '', title: 'Easy & Effortless', text: 'Whether digital or doorstep — the entire process is designed around your comfort.' },
          { icon: 'heart', color: 'gold', title: 'Family-First Approach', text: 'We treat every policyholder like family. Empathetic, patient, and always available.' },
        ].map((c, i) => `
          <div class="card reveal reveal-delay-${(i % 3) + 1}">
            <div class="card__icon${c.color ? ' card__icon--' + c.color : ''}">${icon(c.icon)}</div>
            <div class="card__title">${c.title}</div>
            <div class="card__text">${c.text}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="section">
    <div class="container text-center">
      <p class="section-label reveal">Real Stories</p>
      <h2 class="mb-3 reveal">Families Who Recovered Their Benefits</h2>
      <p class="subtitle mx-auto mb-5 reveal">Join thousands of satisfied families who unlocked hidden value from their insurance.</p>
      <div class="grid grid-3">
        ${[
          { name: 'Rajesh Sharma', role: 'Recovered ₹47,000 in health claims', initial: 'R', text: 'I had no idea my health insurance covered diagnostic tests. ClaimSure found benefits I was paying for but never using. The doorstep visit made it so easy for my mother.' },
          { name: 'Priya Patel', role: 'Recovered ₹1,23,000 in maternity benefits', initial: 'P', text: 'After my pregnancy, I was confused about what documents to submit. The ClaimSure team walked me through everything and I received my full maternity benefit within 3 weeks.' },
          { name: 'Suresh Iyer', role: 'Recovered ₹85,000 in policy benefits', initial: 'S', text: 'As a senior citizen, handling insurance paperwork felt impossible. ClaimSure sent someone to my home, collected everything, and handled the entire process. Truly remarkable service.' },
        ].map((t, i) => `
          <div class="testimonial reveal reveal-delay-${i + 1}">
            <div class="testimonial__stars">${Array(5).fill(icon('star', 16)).join('')}</div>
            <div class="testimonial__text">"${t.text}"</div>
            <div class="testimonial__author">
              <div class="testimonial__avatar">${t.initial}</div>
              <div>
                <div class="testimonial__name">${t.name}</div>
                <div class="testimonial__role">${t.role}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- FAQ PREVIEW -->
  <section class="section">
    <div class="container" style="max-width:800px">
      <div class="text-center">
        <p class="section-label reveal">Common Questions</p>
        <h2 class="mb-3 reveal">Frequently Asked Questions</h2>
        <p class="subtitle mx-auto mb-5 reveal">Quick answers to help you feel confident about our service.</p>
      </div>
      <div class="reveal">
        ${[
          { q: 'Is my data safe with ClaimSure?', a: 'Absolutely. We use bank-grade encryption, strict access controls, and never share your data with third parties. Your documents are handled with the same care as a bank handles your financial records.' },
          { q: 'Why do you need my insurance documents?', a: 'To identify hidden benefits and eligible claims in your policy. Our experts manually review your documents to find coverages and reimbursements you may not be aware of.' },
          { q: 'How much does ClaimSure charge?', a: 'We operate on a success-based model. You pay only when we successfully help you recover benefits. No upfront fees, no hidden charges. Complete transparency.' },
          { q: 'How long does the process take?', a: 'Most benefit reviews are completed within 3–5 business days. Actual claim timelines depend on your insurance provider, but we keep you updated at every step.' },
        ].map(f => `
          <div class="accordion__item">
            <div class="accordion__header">${f.q}<span class="accordion__chevron">${icon('chevDown', 20)}</span></div>
            <div class="accordion__body"><div class="accordion__content">${f.a}</div></div>
          </div>
        `).join('')}
      </div>
      <div class="text-center reveal" style="margin-top:32px">
        <a href="#/faq" class="btn btn--outline">View All FAQs ${icon('arrow', 16)}</a>
      </div>
    </div>
  </section>

  <!-- CTA BANNER -->
  <section class="section">
    <div class="container">
      <div class="cta-banner reveal">
        <h2>Ready to Discover Your Hidden Benefits?</h2>
        <p>Join 10,000+ families who recovered money from their existing insurance policies. It's simple, secure, and costs nothing upfront.</p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <a href="#/upload" class="btn btn--gold btn--lg">Get Started Free</a>
          <a href="#/schedule" class="btn btn--white btn--lg">Schedule Home Visit</a>
        </div>
      </div>
    </div>
  </section>
  `;
}
