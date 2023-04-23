const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#60A498',
      white: '#ffffff',
      black: '#191C1D',
      lightGrey: '#FAFAFA',
      grey: '#3F4452',
      grey2: '#F2F3F7',
      grey3: '#CDCDCD',
      grey4: '#2D3334',
      grey5: '#222627',
      grey6: '#9A9AAF',
      grey7: '#9ca3af',
      blue: '#3506EF',
      green: '#0F9464',
      green1: '#5EDC3E',
      red: '#E24928',
      red1: '#F2673C',
      yellow: '#ffeb3b',
    },
    extend: {
      fontFamily: {
        body: ['Uncut-Sans', ...defaultTheme.fontFamily.sans],
        heading: ['Bebas Neue', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        up: {
          '0%': {
            bottom: '-40%',
            transform: 'translateX (0%) rotate(0deg)',
          },
          '20%': {
            transform: 'translateX (-20px) rotate(45deg)',
          },
          '40%': {
            transform: 'translateX (-20px) rotate(90deg)',
          },
          '60%': {
            transform: 'translateX (-20px) rotate(135deg)',
          },
          '80%': {
            transform: 'translateX (-20px) rotate(180deg)',
          },
          '100%': {
            bottom: '110%',
            transform: 'translateX (-20px) rotate(225deg)',
          },
        },

        down: {
          '0%': {
            top: '-40%',
            transform: 'translateX (0%) rotate(0deg)',
          },
          '20%': {
            transform: 'translateX (-20px) rotate(45deg)',
          },
          '40%': {
            transform: 'translateX (-20px) rotate(90deg)',
          },
          '60%': {
            transform: 'translateX (-20px) rotate(135deg)',
          },
          '80%': {
            transform: 'translateX (-20px) rotate(180deg)',
          },
          '100%': {
            top: '110%',
            transform: 'translateX (-20px) rotate(225deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
