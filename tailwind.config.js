/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Play: ['"Cinzel"'],// Google fonts to index.html
      },
    },
  },
  plugins: [],
}