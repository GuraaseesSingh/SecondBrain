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
         900: "#000000",
         500: "#212020",
        },
        grey:{
          900:"#777777",
          700:"#888888",
          300:"#e5e5e5",

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

