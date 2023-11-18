/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '430px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primaryColor: "#007BFF",
        textColor: "#5C5C5C"
      }
    },
    fontFamily: {
      ebs: ["EBS훈민정음L"]
    }
  },
  plugins: [
    require("daisyui")
  ],
}

