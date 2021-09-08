const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: 'media',
  theme: {
    colors: {
      system: {
        dark: '#101010',
        light: '#F5F5F5',
        white: '#FFFFFF',
        black: '#000000',
        green: '#367B4D',
        blue: '#228DEF',
        pyramid: '#d8373c',
        laf: '#9F3636',
        spurs: '#2464C3',
      },
    },
    fontFamily: {
      mono: ['"iA Writer Duospace"', 'SFMono-Regular', 'ui-monospace'],
      sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'ui-sans-serif',],
      serif: ['"STIX Two Text"', 'Georgia'],
    },
    fontSize: {
        'title-mobile':['24px', '120%'],
        'title-desktop':['36px', '110%'],
        'description-mobile': ['17px', '160%'],
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '18px',
        'lg': '20px',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      }
   
  }
};
