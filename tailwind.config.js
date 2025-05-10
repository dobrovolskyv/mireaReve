/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','./src/**/*.{vue,js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E1E1E',
        accent: '#F79F1A',
        muted: '#D0D5DD',
        background: '#F8F8F8',
        success: '#00C48C',
        error: '#FF5631',
      },
      fontSize: {
        "md": '16px',
        "title": '32px',
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