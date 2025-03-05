const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#EEEEEE',
        darkGray: '#3b3d41',
        lightGray : '#a9a5ac',
      },
      fontFamily: {
        sfbold: ['SFBOLD', 'sans-serif'],
        sfregular: ['SFREGULAR', 'sans-serif'],
        sfultralight: ['SFULTRALIGHT', 'sans-serif'],
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
  plugins: [addVariablesForColors],
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
