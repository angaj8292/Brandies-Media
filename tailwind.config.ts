import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#15D8E1',
          'cyan-dark': '#0AB6C4',
          'cyan-light': '#E0FAFB',
          teal: '#0E7490',
          'teal-deep': '#064E59',
          navy: '#0B1220',
          'navy-light': '#131D31',
          'navy-card': '#111A2E',
          cream: '#FFF8F0',
          amber: '#F59E0B',
          gold: '#FBBF24',
          festivePink: '#F43F5E',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Plus Jakarta Sans', 'sans-serif'],
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -5px rgba(21, 216, 225, 0.45)',
        'cyan-glow-lg': '0 0 45px -5px rgba(21, 216, 225, 0.55)',
        'card-soft': '0 10px 30px -10px rgba(0, 0, 0, 0.07)',
        'card-elevated': '0 20px 40px -15px rgba(11, 18, 32, 0.12)',
        'dark-card': '0 15px 35px -10px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'cyan-gradient': 'linear-gradient(135deg, #15D8E1 0%, #0AB6C4 100%)',
        'cyan-gradient-bright': 'linear-gradient(135deg, #22E7F0 0%, #15D8E1 50%, #0AB6C4 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0B1220 0%, #060A12 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 248, 240, 0.6) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'festive-swing': 'festiveSwing 4.5s ease-in-out infinite',
        'festive-tassel': 'festiveTasselSway 2.2s ease-in-out infinite',
        'festive-glow': 'festiveGlowPulse 2.4s ease-in-out infinite',
        'rangoli-breathe': 'rangoliBreathe 6s ease-in-out infinite',
        'rangoli-shimmer': 'rangoliDotShimmer 3s ease-in-out infinite',
        'diya-float': 'diyaFloat 6s ease-in-out infinite',
        'flame-flicker': 'flameFlicker 0.6s ease-in-out infinite alternate',
        'flower-drift': 'flowerDrift 10s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.95)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        festiveSwing: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        festiveTasselSway: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        },
        festiveGlowPulse: {
          '0%, 100%': { opacity: '0.7', transform: 'scale(0.95)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        rangoliBreathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
        rangoliDotShimmer: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.95' },
        },
        diyaFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        flameFlicker: {
          '0%, 100%': { transform: 'scaleY(0.92) scaleX(0.96)', opacity: '0.82' },
          '50%': { transform: 'scaleY(1.1) scaleX(1.04)', opacity: '1' },
        },
        flowerDrift: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(10px, -12px) rotate(8deg)' },
          '66%': { transform: 'translate(-10px, 10px) rotate(-8deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
