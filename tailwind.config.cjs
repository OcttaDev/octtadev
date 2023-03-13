/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "1000": "1000px"
      },
      minWidth:{
        "1000":"1000px"
      },
      colors: {
        'text-gray': '#828282',
        'bg-button':"#00DF5E",
        "border":"#333333",
      },
    },
  },
  plugins: [],
}
