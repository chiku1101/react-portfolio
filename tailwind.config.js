/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        'widest': '0.25em',
      },
      spacing: {
        '16': '4rem',
        '20': '5rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
      },
      fontWeight: {
        'light': 300,
      },
      colors: {
        'black': '#000000',
        'gray': {
          '200': '#E5E7EB',
        },
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        pulseScroll: 'pulseScroll 2s infinite',
        pulseScrollLine: 'pulseScrollLine 2s infinite', // Separate animation for the line
      },
      keyframes: {
        pulseScroll: {
          '0%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' }, // Animation to grow the text
          '100%': { opacity: 0.5, transform: 'scale(1)' },
        },
        pulseScrollLine: {
          '0%': { height: '0px' },
          '50%': { height: '60px' }, // Maximum height of the line
          '100%': { height: '0px' }, // Shrinks back to 0px
        },
      },
    },
  },
  plugins: [],
}
