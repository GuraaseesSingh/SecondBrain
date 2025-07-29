/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black:{
         900: "#000000"
        },
        grey:{
          900:"#888888",
          200:"#f4f4f4"
        },
        white:{
          900:"#fdfdfd"
        }
      }
    },
  },
  plugins: [],
}

