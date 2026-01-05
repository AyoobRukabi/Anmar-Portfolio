/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        yellow: {
          DEFAULT: '#FFD700',
          hover: '#FFC700',
        },
        gray: {
          50: 'rgba(255,255,255,0.05)',
          100: 'rgba(255,255,255,0.1)',
          200: 'rgba(255,255,255,0.2)',
          400: 'rgba(255,255,255,0.4)',
          600: 'rgba(255,255,255,0.6)',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
        display: ['Anton', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.1' }],
        'hero-mobile': ['48px', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
