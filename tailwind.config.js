/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["node_modules/preline/dist/*.js", "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
