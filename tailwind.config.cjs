/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        redditTheme: {
          field: '#F6F7F8',
          line: '#EDEFF1',
          button: '#0079D3',
          actionIcon: '#878A8C',
        },
        redOrange: '#FF4500',
      },
      screens: {
        md: '1180px',
      },
      width: {
        30: '7.5rem',
      },
      fontSize: {
        xs: '0.625rem',
        sm: '0.75rem',
        base: '0.875rem',
        xl: '1.125rem',
      },
    },
  },
  plugins: [],
};
