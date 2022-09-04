/* eslint-disable */
const path = require('path');

module.exports = {
  content: [
    path.join(__dirname, './app/**/*.{js,ts,jsx,tsx}'),
    path.join(__dirname, './packages/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        'base-100': '#3C4452',
        'base-200': '#323847',
        'base-300': '#2A303C',
        'base-400': '#242932',
        'base-500': '#3D4451',
        'base-content': '#CFCFCF',
        primary: '#F6D739',
        accent: '#37CDBE',
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
