import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "rgb(7, 7, 7)",
        border: "rgb(128, 128, 128)",
      },
      colors: {
        "not-active": "rgb(128, 128, 128)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        opacityIn: "opacityIn 0.5s ease-in-out forwards",
        backdropOpacityIn: "backdropOpacityIn 0.5s ease-in-out forwards",
      },
      keyframes: {
        opacityIn: {
          // @ts-ignore
          "0%": { opacity: 0 },
          // @ts-ignore
          "100%": { opacity: 1 },
        },
        backdropOpacityIn: {
          // @ts-ignore
          "0%": { opacity: 0 },
          // @ts-ignore
          "100%": { opacity: 0.7 },
        },
      },
    },
  },
  plugins: [],
};
export default config;
