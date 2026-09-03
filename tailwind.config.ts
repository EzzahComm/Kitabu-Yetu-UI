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
        // Same logo-green hue as the first pass (sampled from
        // public/brand/kitabu-yetu-logo.png), pushed more saturated for a
        // punchier, more vibrant feel — 75% saturation throughout instead
        // of 46%. Raising saturation at a fixed lightness still lowers
        // contrast against white (the green channel carries ~3.4x the
        // luminance weight of blue in the WCAG formula, so a more
        // saturated green reads brighter, not just richer), so 500 and 600
        // — the shades actually carrying white-on-color buttons and
        // colored-text-on-white links/highlights across the site — are
        // darkened again to hold the same contrast floor as before:
        // matching or beating what the indigo scale they replace achieved
        // (old indigo-500 vs white: 4.61:1, new 500: 5.03:1. old
        // indigo-600: 6.29:1, new 600: 6.35:1).
        indigo: {
          50: "#f2fdf2",
          100: "#d7f9d8",
          200: "#9df1a0",
          300: "#36e23c",
          400: "#1dc922",
          500: "#128116",
          600: "#106f13",
          700: "#0c550f",
          800: "#093e0b",
          900: "#062a07",
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
