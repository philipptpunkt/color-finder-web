"use client"

import { useState, useEffect, useMemo } from "react"
import { indigo, fuchsia, amber, lime, cyan, rose, sky } from "./colors"
import { FlippingCard } from "./FlippingCard"

const intitalCardColor =
  "linear-gradient(343deg, rgba(68,61,55,1) 10%,rgba(33,26,26,1) 75%)"

const createColorPalettes = (numberOfCards: number) => {
  const colors = Array.from({ length: numberOfCards }, (_, i) => {
    return {
      frontColors: [indigo[i], fuchsia[i], amber[i]],
      backColors: [lime[i], cyan[i], rose[i], sky[i]],
    }
  })

  return colors
}

export function AnimatedPalette() {
  const [flipDirection, setFlipDirection] = useState<"left" | "right">("right")

  const colors = useMemo(() => createColorPalettes(11), [])

  useEffect(() => {
    const animationSequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1900))

      let direction: "left" | "right" = "right"

      while (true) {
        setFlipDirection(direction)

        await new Promise((resolve) => setTimeout(resolve, 2000))

        direction = direction === "right" ? "left" : "right"
      }
    }

    animationSequence()
  }, [])

  const totalCards = 5

  return (
    <div className="flex space-x-2 w-full max-w-[1920px]">
      {colors.map((colorItem, index) => {
        return (
          <FlippingCard
            key={index}
            frontColors={colorItem.frontColors}
            backColors={colorItem.backColors}
            initialColor={"transparent"}
            delay={
              flipDirection === "right"
                ? index * 0.1
                : (totalCards - 1 - index) * 0.1
            }
          />
        )
      })}
    </div>
  )
}
