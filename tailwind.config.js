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
        // Updated marquee animations
        marquee: 'marquee 90s linear infinite',
        marquee2: 'marquee2 90s linear infinite',
        'marquee-reverse': 'marquee-reverse 110s linear infinite',
        'marquee2-reverse': 'marquee2-reverse 110s linear infinite',
        // Keeping existing animations
        pulseScroll: 'pulseScroll 2s infinite',
        pulseScrollLine: 'pulseScrollLine 2s infinite',
      },
      keyframes: {
        // Updated marquee keyframes
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'marquee2-reverse': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        // Keeping existing keyframes
        pulseScroll: {
          '0%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
          '100%': { opacity: 0.5, transform: 'scale(1)' },
        },
        pulseScrollLine: {
          '0%': { height: '0px' },
          '50%': { height: '60px' },
          '100%': { height: '0px' },
        },
      },
    },
  },
  plugins: [],
};
