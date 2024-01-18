/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        xs: "1rem",
        sm: "1rem",
        md: "3rem",
        lg: "5rem",
      }
    },
  },
  plugins: [],
}

