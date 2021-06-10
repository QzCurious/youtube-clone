module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { red: { 0: "#f00" } },
      spacing: {
        18: '4.5rem',
        '120': '30rem',
        "144": "36rem"
      },
      opacity: {
        '98': '0.98'
      },
      fontSize: {
        '2xs': ['0.625rem'],
      },
      transitionProperty: {
        visibility: "visibility"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      overflow: ['hover']
    },
  },
  plugins: [],
}
