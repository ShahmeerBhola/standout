/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        primary:'#22a7f1',
        dark:'rgba(24, 23, 32, 1)',
        dark1:'rgba(24, 23, 32, 0.1)',
        light:'#f8f8f8',
      },
      display: ["group-hover"],  
      transform:['group1-hover'],
    },
  },
  plugins: [],
}
