/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        // peela:'#c6ae39',
        peela:'#a9973d',
        // peela:'#b9a541',
      },
      fontFamily: {
        custom: ['Lora', 'sans-serif'],
        custom2: ['Cinzel', 'sans-serif'],
        custom3: ['Nunito Sans', 'sans-serif'],
        custom4: ['Lancelot', 'sans-serif'],
        
      },
    },
  },
  plugins: [
    daisyui
  ],
}

