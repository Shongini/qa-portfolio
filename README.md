# Dawid Chryc QA Portfolio

Cyberpunk-themed QA portfolio built with React 18, Vite, Tailwind CSS, React Router, and Framer Motion.

## Setup

1. Install Node.js 18+ (with `npm` available in terminal).
2. Install dependencies:
   - `npm install`
3. Configure EmailJS:
   - copy `.env.example` to `.env`
   - fill `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
4. Run local dev server:
   - `npm run dev`
5. Build for production:
   - `npm run build`

## Deployment

- Netlify: uses `netlify.toml`
- Vercel: uses `vercel.json`

Both platforms should work with standard Vite build output (`dist`).
