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
          300: '#10D2D2',
          200: '#BDF0F0',
          100: '#AFEEEE',
          400: '#3BF4F4'
        }
      },
    },
  },
  plugins: [],
}

