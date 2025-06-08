/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','./src/**/*.{vue,js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        "gray-primary": '#5C5C5C',
        "text-white": '#FFFFFF',
        muted: '#D0D5DD',
        background: '#F8F8F8',
        success: '#00C48C',
        error: '#FF5631',
      },
      borderRadius:{
        main: '20px',
      },
      fontSize: {
        "md": '16px',
        "title": '32px',
      },
      fontFamily:{
        Montserrat: ['Montserrat', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
      container:{
        center: true,
        padding: "15px",
      }
    },
  },
  plugins: [],
}