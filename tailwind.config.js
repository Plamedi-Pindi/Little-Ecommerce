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

    },
    screens: {
      'sl': '370px'
    },
      
  },
  plugins: [],
}

