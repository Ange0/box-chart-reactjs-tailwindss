/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      red: colors.red,
      green: colors.red,
      'twitter': {
        primary: '#000000',
        secondary: '#FFFFFF',
        tertiary: '#1d9bf0',
        quaternary: '#71767b',
        quinary: ''
      }
    },
    extend: {
      width: {
        'sm': '20rem',
        'md': '40rem',
        'lg': '60rem'
      },
      animation: {
        'loading-bar': 'loading-bar 2s linear infinite',
      },
      keyframes: {
        'loading-bar': {
          '0%%': { transform: 'translate(-4rem)' },
          '50%': { transform: 'translate(20rem)' },
          '100%': { transform: 'translate(40rem)' },
        }
      }
    },
  },
  plugins: [],
}
