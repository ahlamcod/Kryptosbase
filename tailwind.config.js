/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ruthie: ['Ruthie', 'cursive'],
        baskervville: ['Baskervville', 'cursive'],
        pigpen: ['pigpen-cipher', 'cursive']
      },
    },
  },
  plugins: [],
};

