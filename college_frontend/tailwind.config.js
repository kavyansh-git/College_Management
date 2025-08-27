/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"]  
      },
      height: {
        '1/7': '15%',
        '1/8': '12%',
        '1/10': '10%', // Adds a custom height class h-1/10
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '7/8':'88%',
        '9/10': '90%',
        '95/10': '95%',
      },
      width: {
        '1/20': '5%', // Adds a custom width class w-1/10
        '1/7': '15%', // Adds a custom width class w-1/10
        '6/7': '85%', // Adds a custom width class w-1/10
        '1/10': '10%', // Adds a custom width class w-1/10
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '95/10': '95%',
      },
    },
  },
  plugins: [],
}