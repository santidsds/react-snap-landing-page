/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        almostWhite:'hsl(0, 0%, 98%)',
        mediumGray:'hsl(0, 0%, 41%)',
        almostBlack:'hsl(0, 0%, 8%)',
      },
      fontFamily:{
        Epilogue:'Epilogue',
      },
    },
    screens:{
      //m-mobile, d-desktop

      ms:'375px',
      mm:'480px',
      ml:'620px',
      mxl:'768px',

      dxs:'1060px',
      ds:'1200px',
      dm:'1680px',
      dl:'1920px',
      dxl:'1440px',

    }
  },
  plugins: [],
}
