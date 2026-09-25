import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

// Sampled from public/brand/kitabu-yetu-logo.png. Single source of truth for
// both the `indigo` override (kept so existing bg-indigo-*/text-indigo-*
// classes across the app keep working) and the `brand` alias the new fixed
// header's classes are written against — see the `colors` block below.
const BRAND_GREEN = {
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
};

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
      // Continuous horizontal scroll for the testimonial strip. The track holds
      // two copies of the list, so translating it -50% lands exactly on the
      // start of the second copy and the loop is seamless.
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
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
        indigo: BRAND_GREEN,
        // `brand-*` is the same scale under the name the new fixed header
        // (see Navbar) was designed against — kept as one alias rather than
        // a second palette so both class families always repaint together.
        brand: BRAND_GREEN,
        // Ink color for the fixed header's text — only the 900 shade is
        // used (always through Tailwind's opacity modifier, e.g.
        // text-brand-blue-900/70), so that's the only stop this needs.
        "brand-blue": {
          900: "#0b1220",
        },
        // Off-white header/panel background, a shade warmer than pure
        // white to read as "paper" rather than a stark white bar.
        paper: "#fdfcfa",

        // SEMANTIC COLOR PALETTE FOR KITABU YETU SaaS
        // Primary: Trustworthy blue for financial operations
        primary: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#3B82F6",
          500: "#2563EB", // Main brand color
          600: "#1D4ED8",
          700: "#1B5E9B",
          800: "#1E40AF",
          900: "#0F3F6D",
        },
        // Accent: Community green for positive actions
        accent: {
          50: "#DCFCE7",
          100: "#BBFBBC",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#132E25",
        },
        // Functional colors
        success: {
          50: "#F0FDF4",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
        },
        warning: {
          50: "#FFFBEB",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
        },
        error: {
          50: "#FEF2F2",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
        },
        // Semantic neutral/gray
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
        "4xl": "48px",
        "5xl": "64px",
      },
      fontSize: {
        xs: ["12px", { lineHeight: "18px", letterSpacing: "0px" }],
        sm: ["14px", { lineHeight: "22px", letterSpacing: "0.25px" }],
        base: ["16px", { lineHeight: "24px", letterSpacing: "0.5px" }],
        lg: ["18px", { lineHeight: "26px", letterSpacing: "0px" }],
        xl: ["20px", { lineHeight: "28px", letterSpacing: "0px" }],
        "2xl": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em" }],
        "3xl": ["28px", { lineHeight: "36px", letterSpacing: "-0.01em" }],
        "4xl": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      transitionDuration: {
        150: "150ms",
        200: "200ms",
        300: "300ms",
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
      // Wired to the --font-display variable set by next/font in layout.tsx.
      // Used only for the header wordmark for now (see Navbar).
      display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
