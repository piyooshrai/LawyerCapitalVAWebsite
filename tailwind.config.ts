import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1C1C1E',
          mid: '#2C2C2E',
          light: '#3A3A3C',
        },
        brass: {
          DEFAULT: '#B8963E',
          light: '#D4B263',
          muted: 'rgba(184,150,62,0.15)',
        },
        ivory: {
          DEFAULT: '#F7F5F0',
          warm: '#EFECE4',
        },
        text: {
          dark: '#1C1C1E',
          mid: '#636366',
          light: '#8E8E93',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: '11px',
        sm: '12px',
        base: '15px',
        lg: '16px',
        xl: '17px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': ['32px', { lineHeight: '1.12' }],
        '5xl': ['48px', { lineHeight: '1.05' }],
        '6xl': ['52px', { lineHeight: '1.05' }],
        '7xl': ['76px', { lineHeight: '1.05' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.03em',
        wider: '0.08em',
        widest: '0.12em',
        uppercase: '0.2em',
      },
      backgroundImage: {
        'pinstripe-vertical': 'repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(184,150,62,0.04) 49px, rgba(184,150,62,0.04) 50px)',
        'pinstripe-horizontal': 'repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(184,150,62,0.04) 49px, rgba(184,150,62,0.04) 50px)',
      },
      animation: {
        reveal: 'reveal 0.6s ease forwards',
        slideUp: 'slideUp 0.3s ease',
        blink: 'blink 1.2s infinite',
      },
      keyframes: {
        reveal: {
          '0%': {
            opacity: '0',
            transform: 'translateY(24px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        blink: {
          '0%, 100%': {
            opacity: '0.3',
          },
          '50%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
