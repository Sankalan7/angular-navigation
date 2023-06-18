/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      // light mode colors
      primary: "#ffffff",
      secondary: "#808080",
      text: "#000000",
      "primary-active-tab": "#858888",
      "primary-black": "#000000",
      "primary-gray": "#73706f",

      // dark mode colors
      "dark-primary": "#1f3164",
      "dark-secondary": "#121d3b",
      "dark-text": "#ffffff",
      "dark-active-tab": "#3f63c6",

      // miscellanous colors
      "logo-green-500": "#1cb33a",
      "avatar-border": "#ffffff",
    },
    extend: {
      fontFamily: {
        handdrawn: "'Delicious Handrawn', cursive",
        merriweather: "'Merriweather', serif",
        maven: "'Maven Pro', sans-serif",
        yanone: "'Yanone Kaffeesatz', sans-serif",
        cormorant: "'Cormorant Garamond', serif",
        roboto: "'Roboto Condensed', sans-serif",
      },
    },
  },
  plugins: [],
};
