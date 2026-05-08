import { icon } from '../components/icons.js';

export function legalPage() {
  return `
  <section class="page-header">
    <div class="container">
      <p class="section-label">Legal</p>
      <h1>Legal Information</h1>
      <p class="subtitle">Our commitment to transparency, privacy, and your rights.</p>
    </div>
  </section>

  <section class="section" style="padding-top:24px">
    <div class="container" style="max-width:900px">
      <div class="tabs reveal">
        <div class="tab-btn active" data-tab="tab-privacy">Privacy Policy</div>
        <div class="tab-btn" data-tab="tab-terms">Terms & Conditions</div>
        <div class="tab-btn" data-tab="tab-disclaimer">Disclaimer</div>
      </div>

      <!-- PRIVACY POLICY -->
      <div class="tab-content active" id="tab-privacy">
        <div class="card reveal" style="padding:40px;line-height:1.8;font-size:.94rem">
          <p style="color:var(--text-muted);margin-bottom:24px"><strong>Last Updated:</strong> May 1, 2026</p>

          <h3 class="mb-2">1. Information We Collect</h3>
          <p class="mb-3">We collect personal information that you voluntarily provide when using our services, including: full name, email address, phone number, physical address, insurance policy documents, policy numbers, and related identification documents. We also automatically collect device information, IP addresses, and usage data through cookies and analytics.</p>

          <h3 class="mb-2">2. How We Use Your Information</h3>
          <p class="mb-1">Your information is used exclusively for:</p>
          <ul style="list-style:disc;padding-left:24px;margin-bottom:24px">
            <li>Reviewing your insurance policy to identify eligible benefits</li>
            <li>Preparing claim documentation and providing guidance</li>
            <li>Communicating service updates and benefit reports</li>
            <li>Scheduling and coordinating doorstep visits</li>
            <li>Improving our services and customer experience</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h3 class="mb-2">3. Data Security</h3>
          <p class="mb-3">We implement industry-standard security measures including 256-bit SSL encryption, secure server infrastructure, access controls, and regular security audits. All team members undergo background verification and sign confidentiality agreements. Your documents are encrypted both in transit and at rest.</p>

          <h3 class="mb-2">4. Data Sharing</h3>
          <p class="mb-3">We do NOT sell, rent, or share your personal information with third parties for marketing purposes. Your data may only be shared with your insurance provider when you explicitly authorize us to act on your behalf, or when required by law.</p>

          <h3 class="mb-2">5. Data Retention</h3>
          <p class="mb-3">We retain your documents and personal information only for as long as necessary to provide our services. Upon completion of services or upon your request, we securely delete all your documents and personal data within 30 days.</p>

          <h3 class="mb-2">6. Your Rights</h3>
          <p class="mb-3">You have the right to: access your personal data, request corrections, request deletion of your data, withdraw consent for data processing, and receive a copy of your data. To exercise any of these rights, contact us at privacy@claimsure.in.</p>

          <h3 class="mb-2">7. Cookies</h3>
          <p class="mb-3">Our website uses essential cookies for functionality and analytics cookies to improve user experience. You can manage cookie preferences through your browser settings.</p>

          <h3 class="mb-2">8. Contact Us</h3>
          <p>For privacy-related inquiries, contact our Data Protection Officer at <strong>privacy@claimsure.in</strong> or call <strong>+91 12345 67890</strong>.</p>
        </div>
      </div>

      <!-- TERMS -->
      <div class="tab-content" id="tab-terms">
        <div class="card reveal" style="padding:40px;line-height:1.8;font-size:.94rem">
          <p style="color:var(--text-muted);margin-bottom:24px"><strong>Last Updated:</strong> May 1, 2026</p>

          <h3 class="mb-2">1. Acceptance of Terms</h3>
          <p class="mb-3">By accessing or using ClaimSure's website and services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.</p>

          <h3 class="mb-2">2. Service Description</h3>
          <p class="mb-3">ClaimSure provides insurance benefit discovery and claim assistance services. We review your existing insurance policies, identify eligible benefits, and guide you through the claim process. We act as your service provider and advisor — we are NOT an insurance company, broker, or agent.</p>

          <h3 class="mb-2">3. User Responsibilities</h3>
          <p class="mb-1">As a user, you agree to:</p>
          <ul style="list-style:disc;padding-left:24px;margin-bottom:24px">
            <li>Provide accurate and complete information</li>
            <li>Upload genuine, unaltered documents</li>
            <li>Not misuse our platform or services</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Notify us immediately of any unauthorized access</li>
          </ul>

          <h3 class="mb-2">4. Service Fees</h3>
          <p class="mb-3">Policy review is provided free of charge. Claim assistance services are charged on a success-based model — fees are a percentage of successfully recovered benefits. Doorstep visit fees are communicated before scheduling. All applicable fees are disclosed transparently before service engagement.</p>

          <h3 class="mb-2">5. Limitation of Liability</h3>
          <p class="mb-3">ClaimSure provides guidance and assistance but does not guarantee claim approval or specific benefit amounts. Final claim decisions rest with your insurance provider. We are not liable for claim rejections, processing delays, or decisions made by insurance companies.</p>

          <h3 class="mb-2">6. Intellectual Property</h3>
          <p class="mb-3">All content, branding, and materials on this website are the intellectual property of ClaimSure. Unauthorized reproduction, distribution, or use is prohibited.</p>

          <h3 class="mb-2">7. Governing Law</h3>
          <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.</p>
        </div>
      </div>

      <!-- DISCLAIMER -->
      <div class="tab-content" id="tab-disclaimer">
        <div class="card reveal" style="padding:40px;line-height:1.8;font-size:.94rem">
          <div style="background:var(--bg-cream);border-radius:var(--radius-sm);padding:20px;margin-bottom:24px;display:flex;gap:12px;align-items:flex-start">
            <span style="color:var(--accent-gold);flex-shrink:0">${icon('helpCircle', 24)}</span>
            <div>
              <strong style="color:var(--text-dark)">Important Notice</strong><br>
              Please read this disclaimer carefully to understand the nature of our services and our relationship with you.
            </div>
          </div>

          <h3 class="mb-2">Nature of Our Services</h3>
          <p class="mb-3">ClaimSure is a <strong>documentation and process assistance company</strong>. We help policyholders understand their insurance policies, identify eligible benefits, and navigate the claims process. We provide guidance, documentation support, and process facilitation.</p>

          <h3 class="mb-2">What We Are NOT</h3>
          <ul style="list-style:disc;padding-left:24px;margin-bottom:24px">
            <li>We are <strong>NOT</strong> an insurance company or insurer</li>
            <li>We are <strong>NOT</strong> an insurance broker or agent</li>
            <li>We are <strong>NOT</strong> a financial advisory firm</li>
            <li>We do <strong>NOT</strong> sell, underwrite, or manage insurance policies</li>
            <li>We do <strong>NOT</strong> guarantee claim approvals or specific benefit amounts</li>
          </ul>

          <h3 class="mb-2">Claim Outcomes</h3>
          <p class="mb-3">While we strive to maximize your benefit recovery, all claim decisions are ultimately made by your insurance provider. We cannot guarantee approval of any claim, specific timelines, or exact benefit amounts. Our role is limited to assistance and guidance.</p>

          <h3 class="mb-2">Professional Advice</h3>
          <p class="mb-3">Our services should not be considered as legal, financial, or insurance advice. For specific legal or financial decisions related to your insurance, we recommend consulting with qualified professionals.</p>

          <h3 class="mb-2">Document Handling</h3>
          <p>While we implement the highest security standards for document handling, users share documents at their own discretion. We recommend keeping personal copies of all documents shared with us.</p>
        </div>
      </div>
    </div>
  </section>
  `;
}
