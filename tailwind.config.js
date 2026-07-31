/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#F59E0B',
          500: '#D97706',
          600: '#B45309',
        },
        yellow: {
          400: '#FFC107',
          500: '#FFB300',
          600: '#FF9800',
          800: '#7A3D00',
          900: '#5A2D00',
        },
      },
    },
  },
  plugins: [],
}
