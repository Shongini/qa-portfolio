/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Orbitron", "system-ui", "sans-serif"],
        sans: ["Rajdhani", "system-ui", "sans-serif"],
        mono: ["Share Tech Mono", "ui-monospace", "monospace"]
      },
      colors: {
        bg: "#070b14",
        card: "#0f1628",
        neonBlue: "#22d3ee",
        neonPurple: "#a855f7",
        neonGreen: "#00ff9f"
      },
      boxShadow: {
        neon: "0 0 24px rgba(34, 211, 238, 0.35)",
        purple: "0 0 24px rgba(168, 85, 247, 0.28)"
      }
    }
  },
  plugins: []
};
