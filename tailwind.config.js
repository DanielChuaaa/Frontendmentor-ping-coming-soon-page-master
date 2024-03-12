/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      ff: "Libre Franklin, sans-serif",
    },
    extend: {
      colors: {
        blue: "hsl(223, 87%, 63%)",
        paleBlue: "hsl(223, 100%, 88%)",
        lightRed: "hsl(354, 100%, 66%)",
        gray: "hsl(0, 0%, 59%)",
        VeryDarkBlue: "hsl(209, 33%, 12%)",
        white: "hsl(1, 40%, 100%)",
      },
      width: {
        w_96: "30rem",
      },
      padding: {
        px_28: "7.2rem",
        pl_5: "1.6rem",
      },
      screens: {
        sm: "614px",
      },
    },
  },
  plugins: [],
};
