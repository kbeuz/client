/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2246C5",
        secondary: "#428BCA",
        primary_dark: "#1C2541",
        secondary_dark: "#2246C5",
        white: "#FAFBFE",
      },
      fontFamily: {
        custom: ["Inter"],
      },
    },
  },
  plugins: [],
};
