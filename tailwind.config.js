/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-left': 'linear-gradient(to left, rgba(33, 117, 243, 0.82), rgba(144, 53, 255, 0.835), rgba(144, 53, 255, 0.843))',
      },
      borderColor: {
        'transparent': 'rgba(0, 0, 0, 0)',
      },
    },
  },
  plugins: [],
}