"use client"

import { useState } from "react"
import { ShadowSettings } from "./ShadowSettings"
import { CodeSection } from "@/components/CodeEditorUI/CodeSection"
import chroma from "chroma-js"

export function ShadowSection() {
  const [xOffset, setXOffset] = useState(12)
  const [yOffset, setYOffset] = useState(12)
  const [blurRadius, setBlurRadius] = useState(10)
  const [spreadRadius, setSpreadRadius] = useState(3)
  const [color, setColor] = useState("#787878")

  const rgba = chroma(color).rgba()

  const cssShadow = `${xOffset}px ${yOffset}px ${blurRadius}px ${spreadRadius}px rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`

  return (
    <>
      <ShadowSettings
        xOffset={xOffset}
        setXOffset={setXOffset}
        yOffset={yOffset}
        setYOffset={setYOffset}
        blurRadius={blurRadius}
        setBlurRadius={setBlurRadius}
        spreadRadius={spreadRadius}
        setSpreadRadius={setSpreadRadius}
        color={color}
        setColor={setColor}
      />
      <div
        className="flex justify-center items-center min-h-[300px]"
        style={{ gridArea: "shadowDisplay" }}
      >
        <div
          className="w-44 h-32 bg-slate-600"
          style={{ boxShadow: cssShadow }}
        />
      </div>
      <div style={{ gridArea: "codeSection" }}>
        <CodeSection code={cssShadow} propertyName="box-shadow" />
      </div>
    </>
  )
}
