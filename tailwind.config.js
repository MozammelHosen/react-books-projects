/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1bc126",
        
"secondary": "#045575",
        
"accent": "#f4f389",
        
"neutral": "#312531",
        
"base-100": "#DDE1EE",
        
"info": "#A7DFEC",
        
"success": "#2DE6BB",
        
"warning": "#ECC732",
        
"error": "#FA6F57",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

