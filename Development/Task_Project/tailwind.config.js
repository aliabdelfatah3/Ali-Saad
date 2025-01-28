/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
        Lustria: ["Lustria"],
      },
      colors: {
        "button-yellow": "#FFF544",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"),],
};
