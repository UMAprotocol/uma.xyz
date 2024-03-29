import type { Config } from "tailwindcss";
import {
  lgFluidFontSize,
  lgFluidLineHeight,
  mdFluidFontSize,
  mdFluidLineHeight,
  smFluidFontSize,
  smFluidLineHeight,
} from "./src/constant/style/fonts";
import tailwindcssAnimate from "tailwindcss-animate";

import { truncate } from "./src/styles/plugins/utilities";

module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./public/**/*.{css,svg}"],
  theme: {
    fontFamily: {
      sans: ["Halyard Display", "sans-serif"],
    },
    colors: {
      text: "hsl(var(--text-base) / <alpha-value>)",
      border: "hsl(var(--border-base) / <alpha-value>)",
      background: "hsl(var(--background-base) / <alpha-value>)",
      foreground: "hsl(var(--foreground-base) / <alpha-value>)",
      black: "hsl(var(--color-black) / <alpha-value>)",
      white: "hsl(var(--color-white) / <alpha-value>)",
      transparent: "transparent",
      "grey-25": "hsl(var(--color-grey-25) / <alpha-value>)",
      "grey-50": "hsl(var(--color-grey-50) / <alpha-value>)",
      "grey-100": "hsl(var(--color-grey-100) / <alpha-value>)",
      "grey-200": "hsl(var(--color-grey-200) / <alpha-value>)",
      "grey-300": "hsl(var(--color-grey-300) / <alpha-value>)",
      "grey-400": "hsl(var(--color-grey-400) / <alpha-value>)",
      "grey-500": "hsl(var(--color-grey-500) / <alpha-value>)",
      "grey-600": "hsl(var(--color-grey-600) / <alpha-value>)",
      "grey-700": "hsl(var(--color-grey-700) / <alpha-value>)",
      "grey-800": "hsl(var(--color-grey-800) / <alpha-value>)",
      "grey-900": "hsl(var(--color-grey-900) / <alpha-value>)",
      "grey-950": "hsl(var(--color-grey-950) / <alpha-value>)",
      "primary-25": "hsl(var(--color-primary-25) / <alpha-value>)",
      "primary-50": "hsl(var(--color-primary-50) / <alpha-value>)",
      "primary-100": "hsl(var(--color-primary-100) / <alpha-value>)",
      "primary-200": "hsl(var(--color-primary-200) / <alpha-value>)",
      "primary-300": "hsl(var(--color-primary-300) / <alpha-value>)",
      "primary-400": "hsl(var(--color-primary-400) / <alpha-value>)",
      "primary-500": "hsl(var(--color-primary-500) / <alpha-value>)",
      "primary-600": "hsl(var(--color-primary-600) / <alpha-value>)",
      "primary-700": "hsl(var(--color-primary-700) / <alpha-value>)",
      "primary-800": "hsl(var(--color-primary-800) / <alpha-value>)",
      "primary-900": "hsl(var(--color-primary-900) / <alpha-value>)",
      "primary-950": "hsl(var(--color-primary-950) / <alpha-value>)",
      "error-25": "hsl(var(--color-error-25) / <alpha-value>)",
      "error-50": "hsl(var(--color-error-50) / <alpha-value>)",
      "error-100": "hsl(var(--color-error-100) / <alpha-value>)",
      "error-200": "hsl(var(--color-error-200) / <alpha-value>)",
      "error-300": "hsl(var(--color-error-300) / <alpha-value>)",
      "error-400": "hsl(var(--color-error-400) / <alpha-value>)",
      "error-500": "hsl(var(--color-error-500) / <alpha-value>)",
      "error-600": "hsl(var(--color-error-600) / <alpha-value>)",
      "error-700": "hsl(var(--color-error-700) / <alpha-value>)",
      "error-800": "hsl(var(--color-error-800) / <alpha-value>)",
      "error-900": "hsl(var(--color-error-900) / <alpha-value>)",
      "error-950": "hsl(var(--color-error-950) / <alpha-value>)",
      "warning-25": "hsl(var(--color-warning-25) / <alpha-value>)",
      "warning-50": "hsl(var(--color-warning-50) / <alpha-value>)",
      "warning-100": "hsl(var(--color-warning-100) / <alpha-value>)",
      "warning-200": "hsl(var(--color-warning-200) / <alpha-value>)",
      "warning-300": "hsl(var(--color-warning-300) / <alpha-value>)",
      "warning-400": "hsl(var(--color-warning-400) / <alpha-value>)",
      "warning-500": "hsl(var(--color-warning-500) / <alpha-value>)",
      "warning-600": "hsl(var(--color-warning-600) / <alpha-value>)",
      "warning-700": "hsl(var(--color-warning-700) / <alpha-value>)",
      "warning-800": "hsl(var(--color-warning-800) / <alpha-value>)",
      "warning-900": "hsl(var(--color-warning-900) / <alpha-value>)",
      "success-25": "hsl(var(--color-success-25) / <alpha-value>)",
      "success-50": "hsl(var(--color-success-50) / <alpha-value>)",
      "success-100": "hsl(var(--color-success-100) / <alpha-value>)",
      "success-200": "hsl(var(--color-success-200) / <alpha-value>)",
      "success-300": "hsl(var(--color-success-300) / <alpha-value>)",
      "success-400": "hsl(var(--color-success-400) / <alpha-value>)",
      "success-500": "hsl(var(--color-success-500) / <alpha-value>)",
      "success-600": "hsl(var(--color-success-600) / <alpha-value>)",
      "success-700": "hsl(var(--color-success-700) / <alpha-value>)",
      "success-800": "hsl(var(--color-success-800) / <alpha-value>)",
      "success-900": "hsl(var(--color-success-900) / <alpha-value>)",
      // legacy 'red' color -- replaced by 'primary'
      red: "hsl(var(--color-primary-500) / <alpha-value>)",
    },
    extend: {
      spacing: {
        "page-padding": "var(--page-padding)",
        "page-padding-2": "calc(2 * var(--page-padding))",
        "page-width": "var(--page-width)",
        "header-height": "var(--header-height)",
        "header-blur-height": "var(--header-blur-height)",
        "vote-ticker-height": "var(--vote-ticker-height)",
        "header-and-vote-ticker-height": "calc(var(--header-height)+var(--vote-ticker-height))",
      },
      maxWidth: {
        "page-width": "var(--page-width)",
      },
      minHeight: {
        "page-height": "min(100svh,1080px)",
      },
      fontSize: {
        "sm-fluid-size": smFluidFontSize,
        "sm-fluid-line-height": smFluidLineHeight,
        "md-fluid-size": mdFluidFontSize,
        "md-fluid-line-height": mdFluidLineHeight,
        "lg-fluid-size": lgFluidFontSize,
        "lg-fluid-line-height": lgFluidLineHeight,
        "sm-fluid": [smFluidFontSize, smFluidLineHeight],
        "md-fluid": [mdFluidFontSize, mdFluidLineHeight],
        "lg-fluid": [lgFluidFontSize, lgFluidLineHeight],
      },
      animation: {
        arrow: "arrow-enter 2s infinite ease-in-out 3s",
        "fade-in": "fade-in 300ms",
        "fade-out": "fade-out 300ms",
        "accordion-slide-down": "accordion-slide-down 300ms",
        "accordion-slide-up": "accordion-slide-up 300ms",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      keyframes: {
        "arrow-enter": {
          "0%, 80%, 100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "20%": {
            opacity: "0",
            transform: "translateY(100%)",
          },
          "60%": {
            opacity: "0",
            transform: "translateY(-100%)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
        },
        "accordion-slide-down": {
          from: {
            height: "0px",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-slide-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0px",
          },
        },
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(50, 50, 50, 0.05)",
        sm: "0px 12px 28px 0px rgba(0, 0, 0, 0.05)",
        xl: "0px 8px 8px -4px rgba(50, 50, 50, 0.03), 0px 20px 24px -4px rgba(50, 50, 50, 0.08)",
      },
    },
  },
  plugins: [tailwindcssAnimate, truncate],
} satisfies Config;
