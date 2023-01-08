const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        primary800: '#1E3CE8',
        primary600: '#4562F8',
        darker: '#3B4252',
        back: 'hsl(200, 7.0%, 8.8%)'
      },
    },
    fontFamily: {
      sans: ["IBM Plex Mono", 'monospace'],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
