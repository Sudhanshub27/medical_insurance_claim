import { authStore } from './authStore.js';

// Hash-based SPA Router
export class Router {
  constructor(routes) {
    this.routes = routes;
    this._onHashChange = this._onHashChange.bind(this);
    window.addEventListener('hashchange', this._onHashChange);
    window.addEventListener('load', this._onHashChange);
  }

  _onHashChange() {
    const hash = location.hash.slice(1) || '/';
    
    // Auth Guard (Only dashboard is protected for now)
    const protectedRoutes = ['/dashboard'];
    if (protectedRoutes.includes(hash) && !authStore.isAuthenticated()) {
      sessionStorage.setItem('redirectAfterLogin', hash);
      location.hash = '/auth';
      return;
    }

    const route = this.routes[hash] || this.routes['/404'] || this.routes['/'];
    const container = document.getElementById('page-content');
    if (container && route) {
      container.innerHTML = '';
      container.innerHTML = route();
      container.style.animation = 'none';
      container.offsetHeight; // reflow
      container.style.animation = '';
      window.scrollTo({ top: 0, behavior: 'instant' });
      this._initReveal();
      this._updateActiveNav();
      if (route.afterRender) route.afterRender();
      document.dispatchEvent(new CustomEvent('routeChanged', { detail: { path: hash } }));
    }
  }

  _initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
  }

  _updateActiveNav() {
    const hash = location.hash.slice(1) || '/';
    document.querySelectorAll('[data-nav-link]').forEach(a => {
      const href = a.getAttribute('href')?.replace('#', '') || '';
      a.classList.toggle('active', href === hash || (hash === '/' && href === '/'));
    });
  }

  navigate(path) {
    location.hash = path;
  }
}
