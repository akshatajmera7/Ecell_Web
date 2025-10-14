/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ecell-bg': '#0C233C',
        'ecell-primary': '#296685',
        'ecell-secondary': '#FD8916',
        'ecell-text': '#F5EDE4',
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
        'fade-in': 'fade-in 2s ease-out',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
