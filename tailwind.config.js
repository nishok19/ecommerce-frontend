/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          default: "#03203C",
          hover: "#383CC1",
        },
        text: {
          link: "#E03B8B",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
});
