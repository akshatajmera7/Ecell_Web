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
        'fade-up': 'fade-up 0.9s ease-out forwards',
        'mask-reveal': 'mask-reveal 1.1s ease-out forwards',
        'text-fill-in': 'text-fill-in 1.1s ease-out forwards',
        'bg-pan-slow': 'bg-pan-slow 20s ease-in-out infinite alternate',
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
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'mask-reveal': {
          '0%': { 'clip-path': 'inset(0 100% 0 0)' },
          '100%': { 'clip-path': 'inset(0 0 0 0)' },
        },
        'text-fill-in': {
          '0%': { color: 'transparent', '-webkit-text-stroke': '1px currentColor' },
          '100%': { color: 'inherit', '-webkit-text-stroke': '0 currentColor' },
        },
        'bg-pan-slow': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
