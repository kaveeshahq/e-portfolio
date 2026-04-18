/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#F8FAF5",
          100: "#EAF3DE",
          200: "#D4E7BA",
          600: "#639922",
          700: "#3B6D11",
          900: "#27500A",
        },
        teal: {
          100: "#E1F5EE",
          600: "#0F6E56",
        },
        amber: {
          100: "#FAEEDA",
          600: "#BA7517",
        },
        gray: {
          200: "rgba(0,0,0,0.1)",
          400: "#5F5E5A",
          800: "#2C2C2A",
        },
      },
      fontFamily: {
        serif: ["Lora", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
