import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: {
          DEFAULT: "#0C3C84",
          50: "#E8EEF7",
          100: "#C5D5EC",
          200: "#9BB8DB",
          300: "#719BCA",
          400: "#4D83BD",
          500: "#2A6BB0",
          600: "#0C3C84",
          700: "#0A3170",
          800: "#08265B",
          900: "#061B47",
        },
        bordo: {
          DEFAULT: "#9A003F",
          50: "#F7E1EB",
          100: "#ECC0D5",
          200: "#DB95B8",
          300: "#CA6A9B",
          400: "#BD4A84",
          500: "#9A003F",
          600: "#880037",
          700: "#6E002D",
          800: "#540023",
          900: "#3A0019",
        },
        gris: {
          fondo: "#F4F6F8",
          texto: "#5F6368",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;