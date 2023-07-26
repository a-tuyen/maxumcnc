/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        boldHeading: ["Bebas Neue"],
        heading: ["Oswald"],
        banner: ["Kaushan Script"]
      },

      colors: {
        darkMain: '#393b3e',
        main: '#4C4E52',
        lightMain:'#d1d5db',
        accent: '#039BC3', //waves blue


    },
  },
  plugins: [],
}
