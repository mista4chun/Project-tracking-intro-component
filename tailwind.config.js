/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  screens: {
    sm: '468px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      colors: {
        veryDarkBlue: 'hsl(230, 29%, 20%)',
        darkGrayishBlue: 'hsl(230, 11%, 40%)',
        grayishBlue: 'hsl(231, 7%, 65%)',
        lightGrayishBlue: 'hsl(207, 33%, 95%)',
        Red: 'hsl(0, 100%, 68%)',
      },
      fontFamily: {
        sans: ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
