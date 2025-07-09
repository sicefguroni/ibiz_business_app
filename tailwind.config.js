/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inria: ['Inria Sans', 'sans-serif'],
        istok: ['Istok Web', 'sans-serif']
      },
      colors: {
        primary: {
          pink: '#CE2C84',
          orange: '#EE7002',
          brown: '#402806',
          black: '#282828',
          white: '#FBFBFB',
          red: '#D63E3E',
          blue: '#3E85D6',
          green: '#26B98A',
          rose: '#F69480',
          yellow: '#F9AD21'
        },
        secondary: {
          pink: '#EFBBD7',
          orange: '#FFE5CE',
          brown: '#FFF1C5',
          black: '#7B7D7F',
          red: '#FFCECF',
          blue: '#CEE3FF',
          green: '#E7F8F2',
          yellow: '#FFF7E9'
        },
        tint: {
          pink: '#FFCEF3',
          brown: '#FEF4EB',
        },
        stroke: {
          300: '#C3C3C3',
          200: '#DFDFDF',
          100: '#F1F1F1',
        },
        overlay: {
          green: '#61D1AE',
          pink: '#FCF1F7'
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

