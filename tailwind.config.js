/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dkBg: "#292f36ff",
        accent: "#4ecdc4ff",
        heading: "#f7fff7ff",
        highlight: "#ff6b6bff",
        // "naples-yellow": "#ffe66df",
      },
    },
  },
  plugins: [],
};
