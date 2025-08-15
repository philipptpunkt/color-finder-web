import { OklchColor } from './paletteCreation'

/**
 * Converts an OklchColor object to CSS oklch() format with optimized decimal precision
 * - Lightness: 2 decimal places
 * - Chroma: 3 decimal places  
 * - Hue: 0 decimal places (whole degrees)
 */
export function oklchToCss(color: OklchColor): string {
  const l = Number(color.l.toFixed(2))
  const c = Number(color.c.toFixed(3))
  const h = Number(color.h.toFixed(0))
  return `oklch(${l} ${c} ${h})`
}