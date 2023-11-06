/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      ebs: ["EBS훈민정음L"]
    }
  },
  plugins: [],
}

