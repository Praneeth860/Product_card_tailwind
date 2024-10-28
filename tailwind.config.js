/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        pale_orange: "#ffd9a6",
        light_orange: "#fbb03b",
        orange: "#f7931e",
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        title: ["Playfair Display", "serif"],
      },
      gridTemplateRows: {
        layout: "230px ",
      },
      boxShadow: {
        shadow_1: "7px 7px 0 0 rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
