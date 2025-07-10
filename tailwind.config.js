/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lexend: ["Lexend", "Lexend Fallback", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        "bottom-right": "4px 4px 8px rgba(0,0,0,0.15)",
        "top-left": "-4px -4px 8px rgba(0,0,0,0.15)",
        "inner-soft": "inset 0 2px 6px rgba(0,0,0,0.2)",
      },
      height: {
        "topbar": "60px",
      },
    },
  },
  plugins: [],
};
