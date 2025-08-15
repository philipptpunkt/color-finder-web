export interface OklchColor {
  l: number // Lightness (0-1)
  c: number // Chroma (0-0.4 typically)
  h: number // Hue (0-360 degrees)
}

// Constants for palette generation
const PALETTE_CONSTANTS = {
  // Lightness bounds
  MIN_LIGHTNESS: 0.1,
  MAX_LIGHTNESS: 0.95,

  // Chroma bounds and settings
  MAX_CHROMA: 0.4,
  MIN_CHROMA_DEFAULT: 0.05,
  MIN_CHROMA_HIGH_WASHOUT: 0.02,
  HIGH_WASHOUT_THRESHOLD: 0.8,

  // Lightness effect curve
  LIGHTNESS_CURVE_EXPONENT: 1.5,

  // Hue shift settings
  MAX_HUE_SHIFT_DEGREES: 50, // Maximum shift in either direction
  HUE_SHIFT_COLOR_COUNT: 5, // Number of colors affected by hue shift

  // Hue angle bounds
  HUE_CIRCLE_DEGREES: 360,
} as const

/**
 * Creates a color palette using linear lightness distribution from OKLCH color
 * The reference color is used as a base but doesn't necessarily appear in the final palette.
 * All colors in the palette are subject to the wash out effect based on their lightness.
 *
 * @param referenceColor The user's selected reference color in OKLCH format
 * @param paletteSize Total number of colors in the palette (e.g., 11)
 * @param chromaReduction Factor for reducing chroma in lighter colors (0-1, where 0 = no reduction, 1 = maximum reduction)
 * @param hueShift Factor for shifting hue in lighter colors (-1 to 1, where -1 = -50 degrees, 0 = no shift, 1 = +50 degrees)
 * @returns Array of OKLCH colors representing the palette (from MAX_LIGHTNESS to MIN_LIGHTNESS)
 */
export function createLinearLightnessPaletteFromOklch(
  referenceColor: OklchColor,
  paletteSize: number,
  chromaReduction: number = 0.5,
  hueShift: number = 0
): OklchColor[] {
  const { c: referenceChroma, h: referenceHue } = referenceColor

  // Create the palette array
  const palette: OklchColor[] = []

  for (let i = 0; i < paletteSize; i++) {
    // Calculate lightness for each position
    // Distribute evenly from MAX_LIGHTNESS to MIN_LIGHTNESS across all positions (light to dark)
    const lightnessRange = PALETTE_CONSTANTS.MAX_LIGHTNESS - PALETTE_CONSTANTS.MIN_LIGHTNESS
    const positionRatio = i / (paletteSize - 1) // 0 to 1
    const lightness = PALETTE_CONSTANTS.MAX_LIGHTNESS - (positionRatio * lightnessRange)

    // Calculate chroma reduction based on lightness
    // Higher lightness = more chroma reduction (washed out effect)
    // chromaReduction controls the intensity of this effect
    const lightnessEffect = Math.pow(
      lightness,
      PALETTE_CONSTANTS.LIGHTNESS_CURVE_EXPONENT
    )
    const chromaMultiplier = 1 - lightnessEffect * chromaReduction

    // More aggressive minimum chroma based on chromaReduction level
    const minChroma =
      chromaReduction > PALETTE_CONSTANTS.HIGH_WASHOUT_THRESHOLD
        ? PALETTE_CONSTANTS.MIN_CHROMA_HIGH_WASHOUT
        : PALETTE_CONSTANTS.MIN_CHROMA_DEFAULT
    let chroma = referenceChroma * Math.max(minChroma, chromaMultiplier)

    // Lightness is already calculated within MIN_LIGHTNESS to MAX_LIGHTNESS bounds

    // Ensure chroma is within valid bounds
    chroma = Math.max(0, Math.min(PALETTE_CONSTANTS.MAX_CHROMA, chroma))

    // Calculate hue shift for lighter colors
    // Apply hue shift to the lightest colors (first HUE_SHIFT_COLOR_COUNT in the array)
    let hue = referenceHue
    if (i < PALETTE_CONSTANTS.HUE_SHIFT_COLOR_COUNT && hueShift !== 0) {
      // Use logarithmic progression based on position (i)
      // First color (i=0) gets full shift, last affected color gets minimal shift
      // Using natural logarithm for smooth progression
      const positionFactor =
        (PALETTE_CONSTANTS.HUE_SHIFT_COLOR_COUNT - i) /
        PALETTE_CONSTANTS.HUE_SHIFT_COLOR_COUNT
      const logarithmicIntensity =
        Math.log(1 + positionFactor * (Math.E - 1)) / Math.log(Math.E) // Logarithmic curve from 0 to 1

      const shiftAmount =
        logarithmicIntensity *
        hueShift *
        PALETTE_CONSTANTS.MAX_HUE_SHIFT_DEGREES

      // Apply the shift to the hue (can be positive or negative)
      hue = referenceHue + shiftAmount

      // Normalize hue to 0-360 range
      while (hue < 0) hue += PALETTE_CONSTANTS.HUE_CIRCLE_DEGREES
      while (hue >= PALETTE_CONSTANTS.HUE_CIRCLE_DEGREES)
        hue -= PALETTE_CONSTANTS.HUE_CIRCLE_DEGREES
    }

    // Create OKLCH color with adjusted chroma and hue based on lightness
    const oklchColor: OklchColor = {
      l: lightness,
      c: chroma,
      h: hue,
    }
    palette.push(oklchColor)
  }

  return palette
}
