import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#04223a",
          50: "#f0f5fa",
          100: "#dae6f0",
          200: "#b5cde1",
          300: "#79baef",
          400: "#378bc8",
          500: "#213459",
          600: "#0a3558",
          700: "#04223a",
          800: "#031a2d",
          900: "#021220",
        },
        gold: {
          DEFAULT: "#f9a11f",
          50: "#fef8ec",
          100: "#fdeece",
          200: "#fbd99a",
          300: "#f9c466",
          400: "#f9a11f",
          500: "#e8910f",
          600: "#cc730a",
          700: "#a9560c",
          800: "#8a4310",
          900: "#723812",
        },
        cream: {
          DEFAULT: "#faf8f4",
          50: "#fdfcfa",
          100: "#faf8f4",
          200: "#f3ede3",
          300: "#e8e0d0",
          400: "#d8d0be",
          500: "#c5b9a4",
        },
      },
      fontFamily: {
        heading: ["EB Garamond", "serif"],
        body: ["Crimson Text", "serif"],
        sans: ["Outfit", "system-ui", "sans-serif"],
      },
      animation: {
        "marquee-left": "marquee-left 40s linear infinite",
        "marquee-right": "marquee-right 40s linear infinite",
        "blob-morph": "blob-morph 10s ease-in-out infinite",
        "card-float": "card-float 5s ease-in-out infinite",
        "orbit-spin": "orbit-spin 25s linear infinite",
        "orbit-spin-reverse": "orbit-spin 35s linear infinite reverse",
        "tab-progress": "tab-progress 5s linear forwards",
        "scroll-pulse": "scroll-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "blob-morph": {
          "0%, 100%": { borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%" },
          "33%": { borderRadius: "40% 60% 55% 45% / 55% 40% 60% 45%" },
          "66%": { borderRadius: "50% 50% 40% 60% / 45% 55% 50% 50%" },
        },
        "card-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "orbit-spin": {
          to: { transform: "rotate(360deg)" },
        },
        "tab-progress": {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        "scroll-pulse": {
          "0%, 100%": { opacity: "0.3", transform: "scaleY(1)" },
          "50%": { opacity: "1", transform: "scaleY(1.2)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
