const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {

      colors: {
        'background': '#ffffff',
        darkGray: '#3b3d41',
        lightGray: '#a9a5ac',
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(to right, #3B82F6, #fb923c, #ef4444)", 
      },
      fontFamily: {
        sfbold: ['SFBOLD', 'sans-serif'],
        sfregular: ['SFREGULAR', 'sans-serif'],
        sfultralight: ['SFULTRALIGHT', 'sans-serif'],
        InkBrushArabic: ['InkBrushArabic', 'sans-serif'],
        AutomnBrush: ['AutomnBrush', 'sans-serif'],
        ramidots: ['ramidots', 'sans-serif'],

        
      },
      cursor: {
        none: 'none',
      },
    },
    animation: {
      scroll:
        "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
    },
    keyframes: {
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
    addBaseCursorNone,
  ],
}

function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}

function addBaseCursorNone({ addBase }) {
  addBase({
    '*': { cursor: 'none' },
    'a, button': { cursor: 'none' }, // liens et boutons aussi
    'input, textarea': { cursor: 'text' },
  });
}
