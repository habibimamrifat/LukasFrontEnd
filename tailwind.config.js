/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        bodyBg: "rgba(var(--bodyBg))",
        textColor:"rgba(var(--textColor))",
        footerBg:"rgba(var(--footerBg))",
        bolletBg:"rgba(var(--bolletBg))",
        footerBodyBg:"var(--footerBodyBg)"
      },
    },
  },
  plugins: [],
};
