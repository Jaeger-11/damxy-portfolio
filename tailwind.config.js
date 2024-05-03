/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      smd: '600px',
      md: '825px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        textDark: "#000013",
        textGray:"#C4BDD5",
        darkBlue:"#3326AE",
        darkOrange: "#FF392B",
        grayBg: "#F5F5FC",
        lightBlue: "#00C3F8",
        skyBlue: "#C3E8EF"
      },
      fontFamily: {
        open:['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

