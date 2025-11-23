/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'k72-black': '#000000',
        'k72-white': '#ffffff',
        'k72-grey': '#f2f2f2',
        'k72-dark-grey': '#333333',
        'k72-red': '#ff3300', // Accent color observed on links sometimes
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'], // Using Inter as a proxy for Neue Haas Grotesk
      },
      fontSize: {
        'huge': '14vw', // Dynamic sizing for the hero text
      },
      letterSpacing: {
        'tightest': '-0.08em',
      }
    },
  },
  plugins: [],
}
