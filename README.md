# 🛡️ ClaimSure

**ClaimSure** is a modern, premium Single-Page Application (SPA) designed to help users unlock the full value of their insurance, discover hidden benefits, file claims correctly, and track claim settlements with the help of dedicated expert claim managers.

The project features a **Vanilla JavaScript + CSS SPA frontend** built with **Vite**, and an **Express + SQLite backend API** secured with JWT authentication.

---

## ✨ Features

- **Interactive Landing & Service Pages**: Built with smooth custom scroll reveal animations and curated typography.
- **Secure Authentication**: Signup and Login with password hashing (bcrypt) and JSON Web Tokens (JWT) for session management.
- **Client-Side SPA Routing**: Hash-based router (`#/`, `#/dashboard`, etc.) complete with route guards (protecting dashboard routes).
- **Personalized Dashboard**: Track real-time claim progress via an interactive progress stepper, view claim manager contact details, and list uploaded files.
- **Secure Document Upload**: Interactive drag-and-drop file upload zone for medical bills, discharge summaries, and lab reports.
- **Claim Scheduling**: Interactive booking interface to schedule consulting calls with claims advisors.
- **Profile Management**: Update user profile information (Name, Phone, Location) securely.

---

## 🛠️ Tech Stack

### Frontend
- **Core**: Vanilla HTML5 & JavaScript (ES Modules)
- **Styling**: Vanilla CSS (Custom properties, grid, flexbox, glassmorphism, keyframe micro-animations, mobile-responsive layouts)
- **Bundler**: Vite
- **Fonts**: DM Serif Display (Headings) & Inter (Body) via Google Fonts

### Backend & Database
- **Server**: Node.js & Express.js
- **Database**: SQLite3 (Local file-based SQL database)
- **Authentication**: JWT (`jsonwebtoken`)
- **Security**: Password hashing (`bcryptjs`) & Cross-Origin Resource Sharing (`cors`)

---

## 📁 Project Structure

```text
├── dist/                   # Production build folder (generated on npm run build)
├── public/                 # Static assets for the frontend
├── server/
│   ├── database.sqlite     # SQLite database file (created automatically)
│   ├── db.js               # Database schema initialization & connection
│   └── server.js           # Express API server (port 5000)
├── src/
│   ├── assets/             # Images & static assets
│   ├── components/         # Reusable HTML template components (Header, Footer, Icons, Toast)
│   ├── pages/              # SPA Page views (Home, About, Dashboard, Auth, Upload, etc.)
│   ├── authStore.js        # Frontend JWT & session state manager
│   ├── config.js           # API host config (uses VITE_API_URL or defaults to localhost)
│   ├── main.js             # Main entry point (initiates layout, event bindings, router)
│   ├── router.js           # Custom Hash-based SPA Router with route guards
│   └── style.css           # Global custom stylesheet
├── index.html              # Main HTML skeleton
├── package.json            # Scripts & dependencies
├── render.yaml             # Render deployment configuration
└── ss.js                   # Puppeteer script for generating mobile screenshots
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16.x or higher)
- **npm** (v7.x or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sudhanshub27/medical_insurance_claim.git
   cd medical_insurance_claim
   ```

2. **Install dependencies:**
   This installs packages for both the Vite development environment and the Express API server.
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ClaimSure uses `concurrently` to run both the Node.js backend API and the Vite frontend dev server with a single command:
   ```bash
   npm run dev
   ```
   - **Frontend** will be running at: `http://localhost:5173`
   - **Backend API** will be running at: `http://localhost:5000`

---

## 🔌 API Endpoints

The backend Express server exposes the following API routes under the `/api` prefix:

### Authentication
* **`POST /api/auth/signup`**
  - **Body**: `{ "name": "John Doe", "email": "john@example.com", "password": "securepassword" }`
  - **Response**: `201 Created` with JWT token and user profile object.
* **`POST /api/auth/login`**
  - **Body**: `{ "email": "john@example.com", "password": "securepassword" }`
  - **Response**: `200 OK` with JWT token and user profile object.

### User Profile (Protected)
* **`PUT /api/user/profile`**
  - **Headers**: `Authorization: Bearer <JWT_TOKEN>`
  - **Body**: `{ "name": "John Doe", "phone": "+91 99999 88888", "location": "Delhi, India" }`
  - **Response**: `200 OK` with the updated profile.

### Health Check
* **`GET /health`**
  - **Response**: `{ "status": "ok" }`

---

## ☁️ Deployment

### Backend (e.g., Render)
The project includes a `render.yaml` configuration for quick deployment on Render as a Web Service:
- **Build Command**: `npm install`
- **Start Command**: `node server/server.js`
- **Environment Variables**: Make sure to set `JWT_SECRET` and `NODE_ENV=production`.

### Frontend (e.g., Vercel / Netlify)
You can deploy the frontend as a static site by building it:
1. Run `npm run build` to generate the production-ready bundle in the `dist/` folder.
2. Set the environment variable `VITE_API_URL` to point to your live Express backend URL (e.g., `https://claimsure-api.onrender.com`).
3. Deploy the `dist` folder to your static hosting provider.
