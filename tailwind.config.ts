import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    // Overrides only the `container` utility's own max-width ladder and
    // padding — theme.screens (used by every lg:/xl:/2xl: class in the
    // app) is untouched, so this can't desync from existing breakpoints.
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem", // unchanged from the flat p-8 every block used before
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        // Caps at 1280px instead of growing to the 1536px default —
        // matching max-w-screen-xl, the ceiling Footer's grid already uses.
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        trueGray: colors.neutral,
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
