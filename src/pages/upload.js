import { icon } from '../components/icons.js';

export function uploadPage() {
  return `
  <section class="page-header">
    <div class="container">
      <p class="section-label">Upload Documents</p>
      <h1>Share Your Documents<br>Securely</h1>
      <p class="subtitle">Upload your insurance policy documents and our experts will review them to find benefits you may be missing.</p>
    </div>
  </section>

  <section class="section">
    <div class="container" style="max-width:800px">
      <!-- TRUST BADGES -->
      <div class="trust-badges mb-5 reveal">
        <div class="trust-badge">${icon('lock', 16)} 256-bit Encryption</div>
        <div class="trust-badge">${icon('shield', 16)} GDPR Compliant</div>
        <div class="trust-badge">${icon('eye', 16)} Privacy Protected</div>
        <div class="trust-badge">${icon('check', 16)} No Third-Party Sharing</div>
      </div>

      <div class="card reveal" style="padding:40px">
        <h3 class="mb-4" style="text-align:center">Document Upload Form</h3>

        <form id="upload-form" onsubmit="event.preventDefault();alert('Thank you! Your documents have been received. Our team will review them within 3-5 business days.')">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="upload-name">Full Name *</label>
              <input class="form-input" type="text" id="upload-name" placeholder="Enter your full name" required />
            </div>
            <div class="form-group">
              <label class="form-label" for="upload-phone">Phone Number *</label>
              <input class="form-input" type="tel" id="upload-phone" placeholder="+91 98765 43210" required />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="upload-email">Email Address *</label>
            <input class="form-input" type="email" id="upload-email" placeholder="you@example.com" required />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="upload-provider">Insurance Provider *</label>
              <select class="form-input" id="upload-provider" required>
                <option value="">Select your provider</option>
                <option>LIC of India</option>
                <option>HDFC Life</option>
                <option>ICICI Prudential</option>
                <option>SBI Life</option>
                <option>Max Life</option>
                <option>Star Health</option>
                <option>Bajaj Allianz</option>
                <option>Tata AIG</option>
                <option>New India Assurance</option>
                <option>Other</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="upload-policy-num">Policy Number *</label>
              <input class="form-input" type="text" id="upload-policy-num" placeholder="e.g., POL-123456789" required />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="upload-policy-type">Policy Type *</label>
            <select class="form-input" id="upload-policy-type" required>
              <option value="">Select policy type</option>
              <option>Health Insurance</option>
              <option>Life Insurance</option>
              <option>Motor Insurance</option>
              <option>Home Insurance</option>
              <option>Travel Insurance</option>
              <option>Critical Illness</option>
              <option>Group Insurance</option>
              <option>Other</option>
            </select>
          </div>

          <!-- DROPZONE -->
          <div class="form-group">
            <label class="form-label">Upload Documents *</label>
            <div class="dropzone" id="doc-dropzone">
              <div class="dropzone__icon">${icon('upload', 48)}</div>
              <div class="dropzone__text">Drag & drop your files here</div>
              <div class="dropzone__hint">or click to browse • PDF, JPG, PNG up to 10MB each</div>
              <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" style="display:none" />
            </div>
            <div class="form-hint">Upload your insurance policy, ID proof, hospital bills, or any related documents.</div>
          </div>

          <div class="form-group">
            <label class="form-label" for="upload-notes">Additional Notes (Optional)</label>
            <textarea class="form-input" id="upload-notes" placeholder="Any specific concerns, previous claim history, or questions you'd like us to address..." rows="4"></textarea>
          </div>

          <!-- SECURITY NOTICE -->
          <div style="background:var(--bg-lavender);border-radius:var(--radius-sm);padding:16px;margin-bottom:24px;display:flex;align-items:flex-start;gap:12px">
            <span style="color:var(--primary);flex-shrink:0;margin-top:2px">${icon('shield', 20)}</span>
            <div style="font-size:.88rem;color:var(--text-body)">
              <strong style="color:var(--text-dark)">Your Security is Our Priority</strong><br>
              All documents are encrypted with 256-bit SSL, stored on secure servers, and accessible only to our verified review team. We never share your data with third parties.
            </div>
          </div>

          <button type="submit" class="btn btn--primary btn--lg" style="width:100%">${icon('upload', 18)} Submit Documents Securely</button>
        </form>
      </div>
    </div>
  </section>
  `;
}
