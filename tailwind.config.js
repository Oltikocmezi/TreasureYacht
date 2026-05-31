/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        treasure: {
          DEFAULT: "#a2622b",
          light: "#a2622b9d",
          muted: "#a2622b85",
          soft: "#a2622b79",
          glass: "#a2622b96",
        },
        navy: {
          DEFAULT: "#00214D",
          card: "#142866a9",
        },
        club: {
          gold: "#BDA05B",
        },
        ink: {
          DEFAULT: "#2e2d2c",
        },
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        playfair: ["Playfair", "serif"],
        ysabeau: ["Ysabeau SC", "sans-serif"],
        sans: [
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
