import chroma from "chroma-js"
import { PageProps } from "../types"
import { DEFAULT_COLOR } from "../constants"
import { generateColorValues } from "../Colors/generateColorValues"

export function WriteCssVariables({ searchParams }: PageProps) {
  const hex = searchParams.hex

  let cssVariables = ""

  const hexValue =
    typeof hex === "string" && chroma.valid(hex) ? hex : DEFAULT_COLOR

  const colorValues = generateColorValues(hexValue)

  colorValues.forEach((color) => {
    const rgbColorValue = chroma(color.color).rgb().join(", ")
    cssVariables += `--custom-color-${color.position}: ${rgbColorValue}; `
  })

  return <style>{`:root { ${cssVariables} }`}</style>
}
