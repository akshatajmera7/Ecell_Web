/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // ⚡ Startup Minimal
        'startup-header': ['Outfit', 'sans-serif'],
        'startup-box': ['Plus Jakarta Sans', 'sans-serif'],
        'startup-body': ['Poppins', 'sans-serif'],

        // 💼 Professional Tech
        'tech-header': ['Lexend', 'sans-serif'],
        'tech-box': ['Urbanist', 'sans-serif'],
        'tech-body': ['Inter', 'sans-serif'],

        // 🚀 Futuristic / LaunchPad
        'futuristic-header': ['Syne', 'sans-serif'],
        'futuristic-box': ['Satoshi', 'sans-serif'],
        'futuristic-body': ['Work Sans', 'sans-serif'],

        // 🧠 University + Modern
        'university-header': ['Poppins', 'sans-serif'],
        'university-box': ['DM Sans', 'sans-serif'],
        'university-body': ['Inter', 'sans-serif'],

        // 🌐 Elegant + Premium
        'elegant-header': ['Clash Display', 'sans-serif'],
        'elegant-box': ['Satoshi', 'sans-serif'],
        'elegant-body': ['Manrope', 'sans-serif'],

        // ✨ New Modern Standard
        'sans': ['Poppins', 'sans-serif'],
        'header': ['Outfit', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      letterSpacing: {
        'startup-header': '0.02em',
        'startup-box': '0.01em',
        'tech-header': '0.01em',
        'tech-box': '0.01em',
        'futuristic-header': '0.02em',
        'futuristic-box': '0.05em',
        'university-header': '0.01em',
        'university-box': '0.01em',
        'elegant-header': '0.02em',
        'elegant-box': '0.05em',
      },
      colors: {
        'ecell-bg': '#1a1a1a', // Darker base background
        'ecell-bg-light': '#2a2a2a', // Slightly lighter for cards/sections
        'ecell-primary': '#d4ff00', // Bright Lime Green
        'ecell-secondary': '#6b5fff', // Purple
        'ecell-text': '#ffffff', // Pure White
        'ecell-text-muted': '#f7fafc', // Off-white for secondary text
        'ecell-dark': '#000000', // Deep Black
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
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 255, 0, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 255, 0, 0.8)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
        'fade-in': 'fade-in 2s ease-out',
        'pulse-glow': 'pulse-glow 2s infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
      },
    },
  },
  plugins: [],
};
