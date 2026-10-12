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
          50: '#FAF8F5',
          100: '#F5EFEB',
          200: '#E8DCCB',
          300: '#D5C3A5',
          400: '#C2A77D',
          500: '#B08C59',
          600: '#947244',
          700: '#755833',
          800: '#564024',
          900: '#382916',
        },
        onyx: {
          900: '#0B0B0C',
          800: '#151517',
          700: '#222226',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'serif'],
        sans: ['Cormorant Garamond', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
