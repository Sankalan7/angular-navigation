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
      keyframes: {
        flipHorizontal: {
          "50%": { transform: "rotateY(180deg)" },
        },
        rotation: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        rubberband: {
          from: {
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            transform: "scale3d(1.25, 0.75, 1)",
          },
          "40%": {
            transform: "scale3d(0.75, 1.25, 1)",
          },
          "50%": {
            transform: "scale3d(1.15, 0.85, 1)",
          },
          "65%": {
            transform: "scale3d(0.95, 1.05, 1)",
          },
          "75%": {
            transform: "scale3d(1.05, 0.95, 1)",
          },
          to: {
            transform: "scale3d(1, 1, 1)",
          },
        },
      },
      animation: {
        hflip: "flipHorizontal 2s",
        rotation: "rotation 2s",
        rubberband: "rubberband 2s",
      },
    },
  },
  plugins: [],
};
