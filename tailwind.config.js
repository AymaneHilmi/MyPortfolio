const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgLight: '#ffffff',
        lightPrimary: '#3b3d41',
        lightSecondary: '#a9a5ac',
        lightContainer: '#f9fafb',


        bgDark: '#171717',
        darkPrimary: '#d4d4d4',
        darkSecondary: '#a1a1a1',
        darkContainer: '#3a3a3a',
        darkBorder: "#404040",


        // ultralightGray: '#000000',
        ultralightGray: '#e4e4e7',
      },
      backgroundImage: {
        brandgradient: "linear-gradient(to right, #3B82F6, #fb923c, #ef4444)",
      },
      fontFamily: {
        sfbold: ['SFBOLD', 'sans-serif'],
        sfregular: ['SFREGULAR', 'sans-serif'],
        sfultralight: ['SFULTRALIGHT', 'sans-serif'],
        InkBrushArabic: ['InkBrushArabic', 'sans-serif'],
        AutomnBrush: ['AutomnBrush', 'sans-serif'],
        ramidots: ['ramidots', 'sans-serif'],
        handwriting: ['"Caveat"', "cursive"],
        LoveloLineLight: ['"LoveloLineLight"', "sans-serif"],
        LoveloLineBold: ['"LoveloLineBold"', "sans-serif"],


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
  // Désactive l'affichage du curseur sur tout le site
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
    'a, button': { cursor: 'none' }, // liens et boutons cliquables
    'input, textarea': { cursor: 'text' },
  });
}