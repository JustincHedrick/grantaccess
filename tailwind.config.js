/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    // './node_modules/tw-elements/dist/js/**/*.js'

  ],

  theme: {
    extend: {
      colors: {
        'primary': {
          10: '#CAE1D9',
          50: '#217A5D',
          300: '#1B634B',
          500: '#134736',
          700: '#0F382A'
        },
        'neutral' : {
          50: '#DFDFDF',
          300: '#B8B8B8',
          500: '#8F8F8F',
          700: '#676767',
          900: '#676767'
        },
        'error' : '#FF5151',
        'shade' : {
          0: '#FAFAFA',
          100: '#23242C'
        }
      }
    }
  },
  plugins: [
    // require('tw-elements/dist/plugin')

  ],
}
