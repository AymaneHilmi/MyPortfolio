/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Surfaces claires (papier)
        paper: "#ffffff",
        paper2: "#f7f7f8",
        paper3: "#f0f1f2",
        hair: "#e6e7e9", // filets / bordures
        // Encre (texte)
        ink: "#16171a", // presque noir — titres, CTA
        ink2: "#3b3d41", // gris foncé — corps de texte
        mute: "#8a8d93", // gris secondaire
        faint: "#b6b9bf", // gris très clair / placeholders
        // Voyant caméra (à utiliser avec parcimonie)
        rec: "#e5484d",
      },
      fontFamily: {
        display: ["SFBOLD", "system-ui", "sans-serif"],
        medium: ["SFMEDIUM", "system-ui", "sans-serif"],
        body: ["SFREGULAR", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        ultra: "0.3em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(22,23,26,0.04), 0 8px 30px -12px rgba(22,23,26,0.12)",
        soft: "0 10px 40px -16px rgba(22,23,26,0.22)",
      },
      animation: {
        "fade-in": "fadeIn 1s ease forwards",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "rec-blink": "recBlink 1.6s steps(1) infinite",
        "scroll-hint": "scrollHint 1.8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        recBlink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0.15 },
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
