/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0D0800',
        'ink-soft': '#1A0F00',
        'ink-muted': '#2A1A00',
        'ink-warm': '#120A00',
        pearl: '#FFF5E4',
        'pearl-soft': '#FFE8C0',
        accent: '#FFA400',
        'accent-light': '#FFB733',
        'accent-dim': '#CC8300',
        'accent-glow': 'rgba(255,164,0,0.2)',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0D0800 0%, #1A0F00 50%, #0D0800 100%)',
        'gradient-orange': 'linear-gradient(135deg, #FFA400 0%, #FF6B00 100%)',
        'gradient-section': 'linear-gradient(180deg, #0D0800 0%, #1A0F00 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
