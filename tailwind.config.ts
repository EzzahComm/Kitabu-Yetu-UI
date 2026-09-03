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
        // Overrides Tailwind's default indigo scale in place, so every
        // existing bg-indigo-*/text-indigo-*/ring-indigo-*/dark:*-indigo-*
        // class across the app (buttons, links, highlights, focus rings)
        // repaints as the brand green with zero component edits.
        //
        // Same logo-green hue throughout (sampled from
        // public/brand/kitabu-yetu-logo.png), now at 100% saturation — the
        // ceiling for this hue; it cannot get more vibrant without either
        // shifting hue or giving up the contrast floor below. 500 and 600
        // — the shades carrying white-on-color buttons and colored-text-
        // on-white links/highlights across the site — are darkened enough
        // to hold that floor at full saturation: matching or beating what
        // the indigo scale they replace achieved (old indigo-500 vs white:
        // 4.61:1, new 500: 5.14:1. old indigo-600: 6.29:1, new 600: 6.33:1).
        indigo: {
          50: "#f0fff0",
          100: "#ccffce",
          200: "#80ff84",
          300: "#00ff08",
          400: "#00c206",
          500: "#008004",
          600: "#007004",
          700: "#005703",
          800: "#004202",
          900: "#002e02",
        },
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
