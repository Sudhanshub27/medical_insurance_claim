import './style.css';
import { Router } from './router.js';
import { renderHeader, initHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { homePage } from './pages/home.js';
import { aboutPage } from './pages/about.js';
import { servicesPage } from './pages/services.js';
import { uploadPage } from './pages/upload.js';
import { schedulePage } from './pages/schedule.js';
import { authPage } from './pages/auth.js';
import { dashboardPage } from './pages/dashboard.js';
import { faqPage } from './pages/faq.js';
import { contactPage } from './pages/contact.js';
import { legalPage } from './pages/legal.js';

// Render persistent layout
document.getElementById('site-header').outerHTML = renderHeader();
document.getElementById('site-footer').outerHTML = renderFooter();
initHeader();

// Initialize router
const router = new Router({
  '/': homePage,
  '/about': aboutPage,
  '/services': servicesPage,
  '/upload': uploadPage,
  '/schedule': schedulePage,
  '/auth': authPage,
  '/dashboard': dashboardPage,
  '/faq': faqPage,
  '/contact': contactPage,
  '/legal': legalPage,
});

// Init accordion, tabs, and other interactive elements after route change
document.addEventListener('routeChanged', () => {
  initAccordions();
  initTabs();
  initDropzone();
  initPasswordStrength();
  initMobileMenuClose();
});

function initAccordions() {
  document.querySelectorAll('.accordion__header').forEach(h => {
    h.addEventListener('click', () => {
      const item = h.closest('.accordion__item');
      const wasOpen = item.classList.contains('open');
      // Close siblings
      item.parentElement.querySelectorAll('.accordion__item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

function initTabs() {
  // Standard tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.tabs') || btn.parentElement;
      const container = group.parentElement;
      const target = btn.dataset.tab;
      group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      container.querySelectorAll('.tab-content').forEach(tc => {
        tc.classList.toggle('active', tc.id === target);
      });
    });
  });
  // Auth toggles
  document.querySelectorAll('.auth__toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.parentElement;
      const card = group.closest('.auth__card');
      const target = btn.dataset.tab;
      group.querySelectorAll('.auth__toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      card.querySelectorAll('.tab-content').forEach(tc => {
        tc.classList.toggle('active', tc.id === target);
      });
    });
  });
}

function initDropzone() {
  const dz = document.querySelector('.dropzone');
  if (!dz) return;
  ['dragenter','dragover'].forEach(e => dz.addEventListener(e, ev => { ev.preventDefault(); dz.classList.add('dragover'); }));
  ['dragleave','drop'].forEach(e => dz.addEventListener(e, ev => { ev.preventDefault(); dz.classList.remove('dragover'); }));
  dz.addEventListener('drop', e => {
    const files = e.dataTransfer?.files;
    if (files?.length) {
      dz.querySelector('.dropzone__text').textContent = `${files.length} file(s) selected`;
    }
  });
  dz.addEventListener('click', () => {
    const inp = dz.querySelector('input[type="file"]');
    if (inp) inp.click();
  });
}

function initPasswordStrength() {
  const pw = document.getElementById('signup-password');
  const bar = document.querySelector('.pw-strength__bar');
  if (!pw || !bar) return;
  pw.addEventListener('input', () => {
    const v = pw.value;
    let s = 0;
    if (v.length >= 6) s++;
    if (v.length >= 10) s++;
    if (/[A-Z]/.test(v)) s++;
    if (/[0-9]/.test(v)) s++;
    if (/[^A-Za-z0-9]/.test(v)) s++;
    const pct = Math.min(s * 20, 100);
    const colors = ['#E53E3E','#E53E3E','#F5A623','#FFCB57','#34C759','#34C759'];
    bar.style.width = pct + '%';
    bar.style.background = colors[s];
  });
}

function initMobileMenuClose() {
  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', () => {
      document.querySelector('.mobile-nav')?.classList.remove('open');
    });
  });
}
