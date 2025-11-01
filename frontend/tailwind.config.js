/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // ⚡ Startup Minimal
        'startup-header': ['Space Grotesk', 'sans-serif'],
        'startup-box': ['Plus Jakarta Sans', 'sans-serif'],
        'startup-body': ['Manrope', 'sans-serif'],
        
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
        'ecell-bg': '#2a2a2a',
        'ecell-primary': '#d4ff00',
        'ecell-secondary': '#6b5fff',
        'ecell-text': '#ffffff',
        'ecell-dark': '#1a1a1a',
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
