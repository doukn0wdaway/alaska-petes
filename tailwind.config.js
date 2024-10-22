/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./src/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { DrukCondTrial: ['DrukCondTrial', 'sans-serif'] },
      backgroundColor: {
        "milky": "#E9E1D4"
      }
    },
  },
  plugins: [],
}

