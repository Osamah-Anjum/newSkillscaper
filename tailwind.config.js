/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      letterSpacing: {
        tight: '0.02em',
        normal: '0.03em',
        wide: '0.06em',
        wider: '0.1em',
        widest: '0.2em',
      },
      colors: {
        ink: '#0D0800',
        'ink-soft': '#1A0F00',
        'ink-muted': '#2A1A00',
        'ink-warm': '#120A00',
        pearl: '#FFF5E4',
        'pearl-soft': '#FFE8C0',
        accent: '#FFA400',
        'accent-light': '#FFA400',
        'accent-dim': '#FFA400',
        'accent-glow': '#FFA400',
      },
      backgroundImage: {},
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
