import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FDFBF7",
          dark: "#F5F1E6",
        },
        ink: {
          DEFAULT: "#1C1612",
          light: "#3A312B",
        },
        terracotta: {
          DEFAULT: "#C84B31",
          dark: "#A03B26",
          light: "#E06349",
        },
        olive: {
          DEFAULT: "#5C6340",
          dark: "#454A30",
          light: "#788254",
        },
        gold: {
          DEFAULT: "#D4A24C",
          dark: "#B58536",
          light: "#E3B96D",
        },
        cardborder: {
          DEFAULT: "#EFECE6",
          dark: "#DFDAD0",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;