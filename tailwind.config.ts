import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/design-system/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      rotate: {
        "270": "270deg",
      },
      colors: {
        success: {
          light: colors.green[400],
          lighter: colors.green[200],
          dark: colors.green[500],
          darker: colors.green[700],
        },
        warning: { light: colors.amber[300], dark: colors.amber[400] },
        error: { light: colors.red[400], dark: colors.red[600] },
        custom: {
          "50": "rgb(var(--custom-color-50))",
          "100": "rgb(var(--custom-color-100))",
          "200": "rgb(var(--custom-color-200))",
          "300": "rgb(var(--custom-color-300))",
          "400": "rgb(var(--custom-color-400))",
          "500": "rgb(var(--custom-color-500))",
          "600": "rgb(var(--custom-color-600))",
          "700": "rgb(var(--custom-color-700))",
          "800": "rgb(var(--custom-color-800))",
          "900": "rgb(var(--custom-color-900))",
          "950": "rgb(var(--custom-color-950))",
        },
        transparent: "transparent",
        background: {
          light: colors.slate[100],
          dark: colors.slate[950],
        },
        "background-highlight": {
          light: colors.slate[50],
          dark: colors.slate[900],
        },
        text: {
          light: colors.slate[800],
          dark: colors.slate[50],
        },
        "text-inverse": {
          light: colors.slate[50],
          dark: colors.slate[800],
        },
        "text-light": {
          light: colors.slate[400],
          dark: colors.slate[500],
        },
        border: {
          light: colors.slate[200],
          dark: colors.slate[700],
          "light-hover": colors.slate[300],
          "dark-hover": colors.slate[400],
        },
        shadow: {
          light: colors.slate[200],
          dark: colors.slate[800],
        },
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: "0", transform: "translateX(200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: "0", transform: "translateX(-200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
    },
    animation: {
      scaleIn: "scaleIn 200ms ease",
      scaleOut: "scaleOut 200ms ease",
      fadeIn: "fadeIn 200ms ease",
      fadeOut: "fadeOut 200ms ease",
      enterFromLeft: "enterFromLeft 250ms ease",
      enterFromRight: "enterFromRight 250ms ease",
      exitToLeft: "exitToLeft 250ms ease",
      exitToRight: "exitToRight 250ms ease",
    },
  },

  plugins: [require("tailwindcss-animate")],
}
export default config
