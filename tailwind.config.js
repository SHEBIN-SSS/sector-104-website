/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#FFD400",
          dark: "#0B0B0B",
          grayDark: "#2A2A2A",
        },
      },
    },
    plugins: [],
  };
  