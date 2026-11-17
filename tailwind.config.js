/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium Color Palette
        brand: {
          50: '#faf8f5',
          100: '#f3efe9',
          200: '#e6ddd5',
          300: '#d4c4b3',
          400: '#bda38c',
          500: '#a68566',
          600: '#947056',
          700: '#7a5945',
          800: '#654a3b',
          900: '#533e33',
          950: '#2c1f1a',
        },
        // Deep charcoal - primary dark
        charcoal: {
          50: '#f8f7f6',
          100: '#eeebe8',
          200: '#dcd5d0',
          300: '#c4b7ae',
          400: '#a69185',
          500: '#8b7364',
          600: '#755e51',
          700: '#634e44',
          800: '#55433a',
          900: '#4a3b33',
          950: '#271d19',
        },
        // Warm white / cream
        cream: {
          50: '#fdfcfb',
          100: '#faf8f4',
          200: '#f4efe8',
          300: '#ebe0d1',
          400: '#e0cdb9',
          500: '#d4b69a',
          600: '#c79b7a',
          700: '#b87f5e',
          800: '#a6674e',
          900: '#905745',
          950: '#4d2b22',
        },
        // Accent gold
        gold: {
          50: '#fefbf3',
          100: '#fef7e0',
          200: '#fdedbe',
          300: '#fbe48c',
          400: '#f8d85c',
          500: '#f5cb30',
          600: '#e0a91c',
          700: '#b87d14',
          800: '#935d14',
          900: '#774c14',
          950: '#402209',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '0' }],
        'heading-xl': ['clamp(1.75rem, 3.5vw, 2.5rem)', { lineHeight: '1.25' }],
        'heading-lg': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.3' }],
        'heading-md': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.35' }],
        'heading-sm': ['clamp(1.125rem, 1.5vw, 1.25rem)', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 20px 40px -5px rgba(0, 0, 0, 0.06)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 30px 60px -15px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 40px -10px rgba(166, 133, 102, 0.4)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'reveal': 'reveal 1s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        reveal: {
          '0%': { clipPath: 'inset(100% 0 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}