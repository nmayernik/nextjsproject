const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: 'media',
  theme: {
    colors: {
      system: {
        dark: '#1C1C1D',
        light: '#E1E4E5',
        green: '#367B4D'
      },
    },
    fontFamily: {
      mono: ['"iA Writer Duospace"', 'SFMono-Regular', 'ui-monospace'],
      sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'ui-sans-serif',],
      serif: ['"STIX Two Text"', 'Georgia'],
    },
    fontSize: {
        'title-mobile':['34px', '120%'],
        'title-desktop':['48px', '110%'],
        'description-mobile': ['17px', '160%'],
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '17px',
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
