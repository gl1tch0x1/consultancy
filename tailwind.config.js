/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        shakeRightLeft: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -10px)' },
          '50%': { transform: 'translate(-10px, 10px)' },
          '75%': { transform: 'translate(10px, -10px)' },
        },
      },
      animation : {
        shakeRightLeft: 'shakeRightLeft 7s ease-in-out infinite',
      },
      colors: {
        primary: "#3f0af0",
        secondary: "#210c47",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif', 'Roborto', 'Jost'],
      },
      container:{
        center: true,
        padding: "0",
       
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.pointer-events-auto-on-hover': {
          pointerEvents: 'auto',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

