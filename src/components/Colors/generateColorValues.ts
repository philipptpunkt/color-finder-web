import chroma from "chroma-js"

const NUMBER_OF_SHADES = 11

const LIGHTNESS_MIN = 0.15
const LIGHTNESS_MAX = 0.98

function generateLightnessValues(originalLightness: number) {
  const range = LIGHTNESS_MAX - LIGHTNESS_MIN
  const stepSize = range / (NUMBER_OF_SHADES - 1)

  let lightnessValues = []

  for (let i = 0; i < NUMBER_OF_SHADES; i++) {
    let lightness = LIGHTNESS_MIN + i * stepSize
    lightnessValues.push(lightness)
  }

  const closestIndex = lightnessValues.reduce(
    (prev, curr, index) =>
      Math.abs(curr - originalLightness) <
      Math.abs(lightnessValues[prev] - originalLightness)
        ? index
        : prev,
    0
  )

  lightnessValues[closestIndex] = originalLightness

  return lightnessValues.reverse()
}

export type ColorValues = Array<{
  color: string
  position: number
  lightness: number
}>

export function generateColorValues(hex: string): ColorValues {
  if (chroma.valid(hex)) {
    const originalLightness = chroma(hex).get("hsl.l")
    const hue = chroma(hex).get("hsl.h")

    const lightnessValues = generateLightnessValues(originalLightness)

    const originalIndex = lightnessValues.indexOf(originalLightness)

    const colorValues = lightnessValues.map((value, index) => {
      let position = index * 100

      if (index === 0) {
        position = 50
      }

      if (index === 10) {
        position = 950
      }

      const color = chroma(hex)
        .set("hsl.l", value)
        .set(
          "hsl.h",
          index < originalIndex ? hue - (NUMBER_OF_SHADES - index) * 1.7 : hue
        )
        .hex()

      return { color, position, lightness: value }
    })

    return colorValues
  }
  return []
}
