/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Fond cinématique sombre
        ink: "#07080a",
        surface: "#0d0f13",
        surface2: "#13161c",
        line: "#1e222b",
        // Accent cyan électrique
        accent: "#22d3ee",
        accentDeep: "#06b6d4",
        accentGlow: "#67e8f9",
        // Texte
        ghost: "#f5f6f8",
        muted: "#9aa1ad",
        faint: "#5b626d",
      },
      fontFamily: {
        display: ["SFBOLD", "system-ui", "sans-serif"],
        medium: ["SFMEDIUM", "system-ui", "sans-serif"],
        body: ["SFREGULAR", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        ultra: "0.35em",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #67e8f9 0%, #22d3ee 45%, #06b6d4 100%)",
        "fade-bottom": "linear-gradient(to bottom, transparent, #07080a)",
        "fade-top": "linear-gradient(to top, transparent, #07080a)",
        "radial-glow": "radial-gradient(60% 50% at 50% 40%, rgba(34,211,238,0.18) 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(34,211,238,0.45)",
        glowSoft: "0 0 80px -20px rgba(34,211,238,0.35)",
      },
      animation: {
        "fade-in": "fadeIn 1s ease forwards",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
        "pulse-soft": "pulseSoft 3.5s ease-in-out infinite",
        "scroll-hint": "scrollHint 1.8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 1 },
        },
        scrollHint: {
          "0%": { transform: "translateY(0)", opacity: 0 },
          "30%": { opacity: 1 },
          "100%": { transform: "translateY(14px)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
