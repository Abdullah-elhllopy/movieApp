/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3085fe',
        secondary :"#f9c644",
        natural :"#eeeff0",
        title :"#0d3671",
        border : '#C6C6C6',
        des:'#7fa7df',
        err:"#cb3629"
      },
    },
  },
  plugins: [],
}
