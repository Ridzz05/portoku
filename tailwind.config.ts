import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['var(--font-grotesk)', 'sans-serif'],
      },
      colors: {
        neo: {
          yellow: '#FFD60A',
          coral: '#FF6B6B',
          mint: '#A7F3D0',
          sky: '#7DD3FC',
          pink: '#FCA5A5',
          lavender: '#C4B5FD',
          lime: '#BEF264',
          orange: '#FDBA74',
          bg: '#FAFAF9',
          black: '#1A1A1A',
        },
      },
      boxShadow: {
        'brutal': '4px 4px 0px #1A1A1A',
        'brutal-lg': '6px 6px 0px #1A1A1A',
        'brutal-sm': '2px 2px 0px #1A1A1A',
        'brutal-hover': '6px 6px 0px #1A1A1A',
        'brutal-active': '2px 2px 0px #1A1A1A',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        pop: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '80%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'pop': 'pop 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
