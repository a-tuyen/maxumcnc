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
        accent1: '#4081A9',
        accent1Light: '#8cb3cb',
        accent2: '#FF924E',
        accent2Light: '#ffdec9'



    },
  },
},
  plugins: [],
}
