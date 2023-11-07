/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
  plugins: [],
}

