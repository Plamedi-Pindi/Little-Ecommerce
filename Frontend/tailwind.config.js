/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#faf7f6',
        'secundary': '#f8e2d3',
        'details': '#7b4c2d',
        'details2': '#d7e6e6',
      },

      screens: {
        'sl': '370px',
        'sls': '360px',
        'slm': '400px',
        'sc-430': '430px',
        'screen-350': '370px',
        'screen-500': '500px',
        'screen-630': '630px',
        'screen-730': '730px',
        'screen-830': '830px',
        'screen-930': '930px',
        'screen-1020': '1020px',
      },
    },
      
  },
  plugins: [],
}

