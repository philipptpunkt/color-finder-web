import chroma from "chroma-js"

export function getContrastRatio(hex1: string, hex2: string): number {
  const luminance1 = chroma(hex1).luminance()
  const luminance2 = chroma(hex2).luminance()

  const contrastRatio =
    (Math.max(luminance1, luminance2) + 0.05) /
    (Math.min(luminance1, luminance2) + 0.05)
  return contrastRatio
}
