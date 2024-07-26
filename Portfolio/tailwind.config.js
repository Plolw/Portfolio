/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007bff",
        secondary: "#4a90e2",
        primarytext: "#ffffff",
        sectext: '#b0bec5',
        bgcolor: '#082f49'
      }
    },
  },
  plugins: [],
}

