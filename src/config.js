// Central API configuration
// In production, set VITE_API_URL in your Vercel environment variables
// pointing to your deployed backend (e.g., https://your-app.onrender.com)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default API_URL;
