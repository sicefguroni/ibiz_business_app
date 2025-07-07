/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: '#CE2C84',
          orange: '#EE7002',
          brown: '#402806',
          black: '#3BF4F4',
          white: '#FBFBFB',
          red: '#D63E3E',
          blue: '#3E85D6',
          green: '#26B98A'
        },
        secondary: {
          pink: '#EFBBD7',
          orange: '#FFE5CE',
          brown: '#FFF1C5',
          black: '#7B7D7F',
          red: '#FFCECF',
          blue: '#CEE3FF',
          green: '#E7F8F2',
        },
        tint: {
          pink: '#FFCEF3',
          brown: '#FEF4EB',
        },
        stroke: {
          200: '#DFDFDF',
          100: '#F1F1F1',
        }
      },
    },
  },
  plugins: [],
}

