import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
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
          "dark-hover": colors.slate[600],
        },
        shadow: {
          light: colors.slate[200],
          dark: colors.slate[800],
        },
      },
    },
  },
  plugins: [],
}
export default config
