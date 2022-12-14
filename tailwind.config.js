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
        'base-background': '#3D4451',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#F6D739',
          'primary-content': '#323847',
          secondary: '#37CDBE',
          'secondary-content': '#FFFFFF',
          accent: '#1FB2A5',
          'accent-content': '#ffffff',
          neutral: '#191D24',
          'neutral-focus': '#111318',
          'neutral-content': '#A6ADBB',
          'base-100': '#2A303C',
          'base-200': '#242933',
          'base-300': '#20252E',
          'base-content': '#ffffff',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
