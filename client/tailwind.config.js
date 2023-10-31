/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFontFamily: "'Oswald', sans-serif",
        cormorantFontFamily: "'Cormorant', serif",
        relativeFontFamily: "'Relative'",
      },
      colors: {
        "green": "#31985A",
        "lightGreen": "#43FFD2",
        "darkGreen": "#142B2B",
        "red": "#D978AC",
        "grey": "#939393",
        "purple": "#4E46B4",
        "dark": "#202020",
        "lightGrey": "#E9E9E9"
      },
      height: {
        "flower": "-webkit-fill-available"
      },
      keyframes: {
        flower: {
          "0%": {opacity: '0',},
          "25%": {opacity: '25%'},
          "50%": {opacity: '50%'},
          "100%": {opacity: '100%'},
        }
      },
      animation: {
        flower: "flower 1.5s ease-in-out"
      },
      backgroundColor: {
        "green": "#31985A",
        "lightGreen": "#43FFD2",
        "darkGreen": "#142B2B",
        "red": "#D978AC",
        "grey": "#939393",
        "basket": "rgba(0, 0, 0, 0.20);",
        "question": "#0F2222",
        "purple": "#4E46B4",
        "dark": "#202020",
        "lightGrey": "#E9E9E9"
      },
      backgroundImage: {
        "hero": "url('/src/assets/images/heroBg.png')",
        "hero2": "linear-gradient(180deg, rgba(4, 10, 10, 0.00) 0%, #040A0A 100%);",
        "btn": "url('./src/assets/images/icons/ArrowBTN.png')",
        "occasion": "url('./src/assets/images/occasion.png')",
        "questionMobile": "url('./src/assets/images/questionMobile.png')",
        "questionDesktop": "url('./src/assets/images/questionDesktop.png')",
        "shopLeft": "url('./src/assets/images/shopLeft.png')",
        "shopRight": "url('./src/assets/images/shopRight.png')",
        "arrow": "url('./public/icons/right.png')"
      },
      fill: {
        basket: "rgba(0, 0, 0, 0.20);",
      },
      backdropBlur: {
        basket: "10px"
      },
      container: false,
      screens: {
        '2xl': { max: '1535px' },
        xl: { max: '1279px' },
        lg: { max: '1023px' },
        md: { max: '767px' },
        sm: { max: '639px' },
        xs: { max: '375px' },
        minxs: { min: '375px' },
        minsm: { min: '640px' },
        minmd: { min: '768px' },
        minlg: { min: '1024px' },
        minxl: { min: '1280px' },
        min2xl: { min: '1536px' },
      },
    },
  },
  plugins: [],
}

