/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','./src/**/*.{vue,js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        "dodgeroll-gold": '#F79F1A',
      },
      fontFamily:{
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      container:{
        center: true,
        padding: "32px",
      }
    },
  },
  plugins: [],
}