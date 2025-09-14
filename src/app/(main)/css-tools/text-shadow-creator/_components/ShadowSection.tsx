"use client"

import { useEffect, useState } from "react"
import { ShadowSettings } from "./ShadowSettings"
import { CodeSection } from "@/components/CodeEditorUI/CodeSection"
import chroma from "chroma-js"

const randomWords = ["Happy", "Rainbow", "Love", "Unicorn", "Sunshine"]

function getWord() {
  const randomIndex = Math.floor(Math.random() * randomWords.length)
  return randomWords[randomIndex]
}

export function ShadowSection() {
  const [word, setWord] = useState<false | string>(false)

  const [xOffset, setXOffset] = useState(6)
  const [yOffset, setYOffset] = useState(6)
  const [blurRadius, setBlurRadius] = useState(7)
  const [color, setColor] = useState("#787878")
  const [textColor, setTextColor] = useState("#313131")

  const rgba = chroma(color).rgba()

  const cssShadow = `${xOffset}px ${yOffset}px ${blurRadius}px rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`

  useEffect(() => {
    if (!word) {
      setWord(getWord())
    }
  }, [word])

  return (
    <>
      <ShadowSettings
        xOffset={xOffset}
        setXOffset={setXOffset}
        yOffset={yOffset}
        setYOffset={setYOffset}
        blurRadius={blurRadius}
        setBlurRadius={setBlurRadius}
        color={color}
        setColor={setColor}
        textColor={textColor}
        setTextColor={setTextColor}
      />
      <div
        className="flex justify-center items-center min-h-[300px]"
        style={{ gridArea: "shadowDisplay" }}
      >
        <p
          className="text-6xl font-semibold"
          style={{ textShadow: cssShadow, color: textColor }}
        >
          {word}
        </p>
      </div>
      <div style={{ gridArea: "codeSection" }}>
        <CodeSection code={cssShadow} propertyName="text-shadow" />
      </div>
    </>
  )
}
