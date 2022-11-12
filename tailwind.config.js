/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorstheme: {

          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#3A4256",

          neutral: "#191D24",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
