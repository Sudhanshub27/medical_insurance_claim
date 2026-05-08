// src/authStore.js

export const authStore = {
  login(user, token) {
    localStorage.setItem('jwt', token);
    localStorage.setItem('user', JSON.stringify(user));
    document.dispatchEvent(new CustomEvent('authChanged'));
  },

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    document.dispatchEvent(new CustomEvent('authChanged'));
  },

  isAuthenticated() {
    return !!localStorage.getItem('jwt');
  },

  getUser() {
    try {
      return JSON.parse(localStorage.getItem('user'));
    } catch {
      return null;
    }
  }
};
