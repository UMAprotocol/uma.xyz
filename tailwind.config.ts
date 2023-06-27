import type { Config } from "tailwindcss";
import {
  black,
  grey100,
  grey100Opacity20,
  grey200,
  grey300,
  grey400,
  grey400Opacity20,
  grey500,
  grey600,
  grey700,
  grey800,
  red,
  red510Opacity15,
  red550,
  white,
  white200,
  whiteOpacity10,
} from "./src/constant/style/colors";
import {
  lgFluidFontSize,
  lgFluidLineHeight,
  mdFluidFontSize,
  mdFluidLineHeight,
  smFluidFontSize,
  smFluidLineHeight,
} from "./src/constant/style/fonts";
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./public/**/*.{css,svg}"],
  theme: {
    fontFamily: {
      sans: ["Halyard Display", "sans-serif"],
    },
    colors: {
      black: black,
      "grey-100": grey100,
      "grey-100-opacity-20": grey100Opacity20,
      "grey-200": grey200,
      "grey-300": grey300,
      "grey-400": grey400,
      "grey-400-opacity-20": grey400Opacity20,
      "grey-500": grey500,
      "grey-600": grey600,
      "grey-700": grey700,
      "grey-800": grey800,
      red: red,
      "red-510-opacity-15": red510Opacity15,
      "red-550": red550,
      white: white,
      "white-200": white200,
      "white-opacity-10": whiteOpacity10,
    },
    extend: {
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
      },
    },
  },
  plugins: [],
} satisfies Config;