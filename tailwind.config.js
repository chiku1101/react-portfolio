/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        'airy': '0.3px',
        'airier': '0.5px',
      },
    },
  },
  plugins: [],
};
