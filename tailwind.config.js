/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SANS: ["Noto Sans JP"]
      },
      colors: {
        KEY: "#0071C1",
        BG: "#E5E5E5",
        GRAY: "#A7A6A5"
      },
    },
  },
  plugins: [],
};
