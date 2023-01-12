/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      red: colors.red,
      green: colors.green,
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
        'loading-bar': 'loading-bar 3s linear infinite',
      },
      keyframes: {
        'loading-bar': {
          '0%': { left: '0%' },
          '50%': { left: '50%' },
          '100%': { left: '100%' },
        }
      }
    },
  },
  plugins: [],
}
