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
        dark1:'#181720b3',
        light:'#f8f8f8',
        darker:"#181720",
      },
      display: ["group-hover"],  
      transform:['group1-hover'],
      visibility:['target-hover'],
      screens: {
        'sm': '340px',
        // => @media (min-width: 640px) { ... }
  
        'md': '550px',
        'lg': '1000px',
        'mmd':'786px',
        // => @media (min-width: 768px) { ... }
  
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },

    },
  },
  plugins: [],
}
