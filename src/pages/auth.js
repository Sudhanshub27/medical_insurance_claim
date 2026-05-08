import { icon } from '../components/icons.js';
import { authStore } from '../authStore.js';
import { showToast } from '../components/toast.js';

window.handleLogin = async function(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  btn.innerHTML = 'Logging in...';
  btn.disabled = true;

  try {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();

    if (!res.ok) {
      showToast(data.error || 'Login failed.', 'error');
      btn.innerHTML = originalText;
      btn.disabled = false;
      return;
    }
    
    showToast('Logged in successfully!', 'success');
    authStore.login(data.user, data.token);
    
    const redirect = sessionStorage.getItem('redirectAfterLogin') || '/dashboard';
    sessionStorage.removeItem('redirectAfterLogin');
    location.hash = redirect;
  } catch (error) {
    showToast('Network error. Ensure the backend server is running.', 'error');
    btn.innerHTML = originalText;
    btn.disabled = false;
  }
};

window.handleSignup = async function(e) {
  e.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirm = document.getElementById('signup-confirm').value;

  if (password !== confirm) {
    showToast('Passwords do not match!', 'error');
    return;
  }

  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  btn.innerHTML = 'Creating Account...';
  btn.disabled = true;

  try {
    const res = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    const data = await res.json();

    if (!res.ok) {
      showToast(data.error || 'Signup failed.', 'error');
      btn.innerHTML = originalText;
      btn.disabled = false;
      return;
    }
    
    authStore.login(data.user, data.token);
    
    showToast('Account created successfully!', 'success');
    const redirect = sessionStorage.getItem('redirectAfterLogin') || '/dashboard';
    sessionStorage.removeItem('redirectAfterLogin');
    location.hash = redirect;
  } catch (error) {
    showToast('Network error. Ensure the backend server is running.', 'error');
    btn.innerHTML = originalText;
    btn.disabled = false;
  }
};

export function authPage() {
  return `
  <section class="auth">
    <div class="auth__card">
      <div style="text-align:center;margin-bottom:24px">
        <div style="font-family:var(--font-heading);font-size:1.5rem;color:var(--primary);margin-bottom:4px">ClaimSure</div>
        <p style="font-size:.9rem;color:var(--text-muted)">Access your insurance benefit dashboard</p>
      </div>

      <div class="auth__toggle">
        <div class="auth__toggle-btn active" data-tab="login">Login</div>
        <div class="auth__toggle-btn" data-tab="signup">Sign Up</div>
      </div>

      <!-- LOGIN -->
      <div class="tab-content active" id="login">
        <form onsubmit="window.handleLogin(event)">
          <div class="form-group">
            <label class="form-label" for="login-email">Email Address</label>
            <input class="form-input" type="email" id="login-email" placeholder="you@example.com" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="login-password">Password</label>
            <input class="form-input" type="password" id="login-password" placeholder="Enter your password" required />
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;font-size:.85rem">
            <label style="display:flex;align-items:center;gap:6px;cursor:pointer">
              <input type="checkbox" style="accent-color:var(--primary)" /> Remember me
            </label>
            <a href="#" style="color:var(--primary);font-weight:500" onclick="event.preventDefault();showToast('Password reset link sent to your email!', 'info')">Forgot password?</a>
          </div>
          <button type="submit" class="btn btn--primary" style="width:100%;margin-bottom:16px">Login to Dashboard</button>
        </form>

        <div class="auth__divider">or continue with</div>

        <button class="social-btn" onclick="showToast('Google login would be integrated here', 'info')">
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          Continue with Google
        </button>
        <button class="social-btn" onclick="showToast('Apple login would be integrated here', 'info')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
          Continue with Apple
        </button>
      </div>

      <!-- SIGNUP -->
      <div class="tab-content" id="signup">
        <form onsubmit="window.handleSignup(event)">
          <div class="form-group">
            <label class="form-label" for="signup-name">Full Name</label>
            <input class="form-input" type="text" id="signup-name" placeholder="Enter your full name" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="signup-email">Email Address</label>
            <input class="form-input" type="email" id="signup-email" placeholder="you@example.com" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="signup-phone">Phone Number</label>
            <input class="form-input" type="tel" id="signup-phone" placeholder="+91 98765 43210" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="signup-password">Password</label>
            <input class="form-input" type="password" id="signup-password" placeholder="Create a strong password" required pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" />
            <div class="pw-strength"><div class="pw-strength__bar" style="width:0"></div></div>
            <div class="form-hint">Use 8+ characters with uppercase, numbers, and symbols</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="signup-confirm">Confirm Password</label>
            <input class="form-input" type="password" id="signup-confirm" placeholder="Confirm your password" required />
          </div>
          <div style="margin-bottom:24px">
            <label style="display:inline-flex;align-items:baseline;gap:8px;cursor:pointer;font-size:.85rem;line-height:1.5">
              <input type="checkbox" required style="accent-color:var(--primary);flex-shrink:0;width:16px;height:16px;margin-top:1px" />
              <span>I agree to the <a href="#/legal" style="color:var(--primary);font-weight:600">Terms &amp; Conditions</a> and <a href="#/legal" style="color:var(--primary);font-weight:600">Privacy Policy</a></span>
            </label>
          </div>
          <button type="submit" class="btn btn--primary" style="width:100%">Create Account</button>
        </form>
      </div>
    </div>
  </section>
  `;
}
