import { icon } from '../components/icons.js';

const FAQ_DATA = [
  { cat: 'Security & Privacy', items: [
    { q: 'Is my data safe with ClaimSure?', a: 'Yes, absolutely. We use 256-bit SSL encryption, the same standard used by banks. Your documents are stored on secure, access-controlled servers. Only verified team members can access your files, and we never share data with third parties.' },
    { q: 'Who can access my uploaded documents?', a: 'Only our verified insurance review team has access to your documents. Each team member undergoes background verification and signs confidentiality agreements. Access is logged and audited regularly.' },
    { q: 'Do you store my insurance login credentials?', a: 'We only ask for credentials when absolutely necessary for certain claim processes, and they are encrypted with bank-grade security. You can revoke access anytime through your dashboard.' },
  ]},
  { cat: 'Process & Service', items: [
    { q: 'Why do you need my insurance documents?', a: 'To identify benefits, coverages, and eligible claims in your policy that you may not be aware of. Our experts manually review every document to find hidden value in your existing insurance.' },
    { q: 'How long does the review process take?', a: 'Most policy reviews are completed within 3–5 business days. Complex cases with multiple policies may take up to 7 days. You\'ll receive updates throughout the process.' },
    { q: 'Do you contact my insurance company directly?', a: 'Not without your explicit permission. We prepare all documentation and guide you through the process. If you authorize us to communicate on your behalf, we handle all interactions with the insurer.' },
    { q: 'What types of insurance do you cover?', a: 'We work with all major insurance types: health, life, motor, home, travel, and critical illness policies. We support all major Indian insurance providers including LIC, HDFC, ICICI, Star Health, and more.' },
  ]},
  { cat: 'Doorstep Service', items: [
    { q: 'How does the doorstep visit work?', a: 'You schedule a visit at your preferred date and time. Our ID-verified representative arrives at your home, explains the process, collects required documents (providing a receipt), and answers your questions. The visit typically takes 20–30 minutes.' },
    { q: 'How do I verify the representative\'s identity?', a: 'Every ClaimSure representative carries an official photo ID badge with a unique ID number. You can verify their identity by calling our support line before the visit. You\'ll also receive their photo and details via email when the visit is confirmed.' },
    { q: 'Is the doorstep service available in my city?', a: 'We currently offer doorstep service in 15+ major Indian cities including Mumbai, Delhi, Bangalore, Pune, Hyderabad, Chennai, Kolkata, and more. We\'re expanding rapidly — contact us if your city isn\'t listed.' },
  ]},
  { cat: 'Pricing & Payment', items: [
    { q: 'How much does ClaimSure charge?', a: 'Our policy review is completely FREE. For claim assistance, we charge a success-based fee — a small percentage of the benefits we help you recover. No recovery means no charge. Doorstep visits have a nominal fee that gets adjusted against service charges.' },
    { q: 'Are there any hidden charges?', a: 'Absolutely not. We believe in complete transparency. All fees are communicated upfront before you agree to any service. There are no hidden charges, no subscription fees, and no surprise costs.' },
    { q: 'When do I need to pay?', a: 'Only after we successfully help you recover benefits. We operate on a "no recovery, no fee" model for claim assistance. You never pay upfront for our core service.' },
  ]},
];

export function faqPage() {
  return `
  <section class="page-header">
    <div class="container">
      <p class="section-label">FAQ</p>
      <h1>Frequently Asked Questions</h1>
      <p class="subtitle">Everything you need to know about how ClaimSure works, your privacy, and our process.</p>
    </div>
  </section>

  <section class="section" style="padding-top:32px">
    <div class="container" style="max-width:850px">
      <!-- SEARCH -->
      <div class="reveal mb-5" style="position:relative">
        <span style="position:absolute;left:16px;top:50%;transform:translateY(-50%);color:var(--text-muted)">${icon('search', 20)}</span>
        <input class="form-input" type="text" id="faq-search" placeholder="Search questions..." style="padding-left:48px;font-size:1rem" oninput="
          const q=this.value.toLowerCase();
          document.querySelectorAll('.accordion__item').forEach(i=>{
            const t=i.textContent.toLowerCase();
            i.style.display=t.includes(q)?'':'none';
          });
          document.querySelectorAll('.faq-category').forEach(c=>{
            const visible=c.querySelectorAll('.accordion__item[style=\"\"],.accordion__item:not([style])').length;
            c.style.display=visible?'':'none';
          });
        " />
      </div>

      ${FAQ_DATA.map(cat => `
        <div class="faq-category mb-5 reveal">
          <h3 class="mb-3" style="display:flex;align-items:center;gap:8px">${icon('helpCircle', 20)} ${cat.cat}</h3>
          ${cat.items.map(f => `
            <div class="accordion__item">
              <div class="accordion__header">${f.q}<span class="accordion__chevron">${icon('chevDown', 20)}</span></div>
              <div class="accordion__body"><div class="accordion__content">${f.a}</div></div>
            </div>
          `).join('')}
        </div>
      `).join('')}

      <!-- STILL HAVE QUESTIONS -->
      <div class="cta-banner reveal">
        <h2 style="font-size:1.4rem">Still Have Questions?</h2>
        <p>Our support team is happy to help you with any concerns.</p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <a href="#/contact" class="btn btn--white btn--sm">${icon('mail', 16)} Contact Us</a>
          <a href="tel:+911234567890" class="btn btn--gold btn--sm">${icon('phone', 16)} Call: +91 12345 67890</a>
        </div>
      </div>
    </div>
  </section>
  `;
}
