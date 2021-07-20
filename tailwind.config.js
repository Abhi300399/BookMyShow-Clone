module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        abhi:{
              50: '#ffe3f0',
              100: '#ffb3ce',
              200: '#fd82ae',
              300: '#fc518d',
              400: '#fb266e',
              500: '#e21654',
              600: '#b00d42',
              700: '#7e052e',
              800: '#4d001c',
              900: '#1d0009',

             },
          bms:{
              50: '#edf1fc',
              100: '#d3d4e1',
              200: '#b6b8c9',
              300: '#989bb2',
              400: '#7c7f9b',
              500: '#636582',
              600: '#4c4f66',
              700: '#363849',
              800: "#2b3147",
              900: '#0a0a16',
          },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
