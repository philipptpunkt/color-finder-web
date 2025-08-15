import { OklchColor } from './paletteCreation'

/**
 * Gets information about where the key color will be positioned in the palette from OKLCH
 *
 * @param keyColor The user's selected key color in OKLCH format
 * @param paletteSize Total number of colors in the palette
 * @returns Object with position information (in light-to-dark order)
 */
export function getKeyColorPositionFromOklch(
  keyColor: OklchColor,
  paletteSize: number
): {
  position: number
  lightness: number
  leftColors: number
  rightColors: number
} {
  const position = Math.round((1 - keyColor.l) * (paletteSize - 1))

  return {
    position,
    lightness: keyColor.l,
    leftColors: position,
    rightColors: paletteSize - 1 - position,
  }
}