"use client"

import { IColor, useColor } from "react-color-palette"
import { useMemo, useState } from "react"
import { BLUE, GREEN, TRIANGLE_HEIGHT, TRIANGLE_WIDTH } from "../constants"

export interface ColorStop {
  id: string
  percentage: number
  color: IColor
  width: number // fixed value
  height: number // fixed value
}

const initialColorStops = new Map<string, ColorStop>([
  [
    "stop1",
    {
      id: "stop1",
      percentage: 20,
      color: BLUE,
      width: TRIANGLE_WIDTH,
      height: TRIANGLE_HEIGHT,
    },
  ],
  [
    "stop2",
    {
      id: "stop2",
      percentage: 80,
      color: GREEN,
      width: TRIANGLE_WIDTH,
      height: TRIANGLE_HEIGHT,
    },
  ],
])

export const useColorStop = () => {
  const [currentColor, setCurrentColor] = useColor(
    initialColorStops.get("stop1")!.color.hex
  )

  const [colorStops, setColorStops] =
    useState<Map<string, ColorStop>>(initialColorStops)

  function addColorStop({
    id,
    color,
    left,
    percentage,
  }: {
    id: string
    color: IColor
    left: number
    percentage: number
  }) {
    const newColorStop = {
      id,
      left,
      percentage,
      color,
      width: TRIANGLE_WIDTH,
      height: TRIANGLE_HEIGHT,
    }

    const updatedColorStops = new Map(colorStops)

    updatedColorStops.set(id, newColorStop)
    setColorStops(updatedColorStops)
  }

  function removeColorStop(id: string) {
    const updatedColorStops = new Map(colorStops)

    updatedColorStops.delete(id)
    setColorStops(updatedColorStops)
  }

  function updatePosition(id: string, left: number, percentage: number) {
    const currentColorStop = colorStops.get(id)

    if (currentColorStop) {
      const updatedColorStep = {
        ...currentColorStop,
        left,
        percentage,
      }

      const updatedColorStops = new Map(colorStops)

      updatedColorStops.set(id, updatedColorStep)

      setColorStops(updatedColorStops)
    }
    return
  }

  function updateColor(id: string, color: IColor) {
    setCurrentColor(color)

    const currentColorStop = colorStops.get(id)

    if (currentColorStop) {
      const updatedColorStep = {
        ...currentColorStop,
        color,
      }

      const updatedColorStops = new Map(colorStops)

      updatedColorStops.set(id, updatedColorStep)

      setColorStops(updatedColorStops)
    }
    return
  }

  const colorStopsList = useMemo(() => {
    const list = Array.from(colorStops.values())

    return list.sort((a, b) => a.percentage - b.percentage)
  }, [colorStops])

  return {
    currentColor,
    setCurrentColor,
    colorStops,
    colorStopsList,
    addColorStop,
    removeColorStop,
    updatePosition,
    updateColor,
  }
}
