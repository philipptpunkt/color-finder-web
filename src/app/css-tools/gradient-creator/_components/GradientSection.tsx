"use client"

import { IColor } from "react-color-palette"
import "react-color-palette/css"
import { useEffect, useState } from "react"
import { SelectionContainer } from "./SelectionContainer"
import { ColorStops } from "./ColorSelection/ColorStops"
import { DegreeSelection } from "./DegreeSelection/DegreeSelection"
import { useDegreeWheel } from "./DegreeSelection/useDegreeWheel"
import { ColorPicker } from "./ColorSelection/ColorPicker"
import { ColorValues } from "./ColorSelection/ColorValues"
import { useColorStop } from "./ColorSelection/useColorStop"
import { CodeSection } from "@/components/CodeEditorUI/CodeSection"

export type GradientType = "linear" | "radial" | "conic"

function generateCSS({
  gradientType,
  currentDegree,
  colorListCSS,
}: {
  gradientType: GradientType
  currentDegree: number
  colorListCSS: string[]
}) {
  switch (gradientType) {
    case "conic":
      return {
        gradientCSSnoRotation: `linear-gradient(90deg, ${colorListCSS.toString()})`,
        gradientCSS: `${gradientType}-gradient(from ${currentDegree}deg, ${colorListCSS.toString()})`,
      }
    case "radial":
      return {
        gradientCSSnoRotation: `linear-gradient(90deg, ${colorListCSS.toString()})`,
        gradientCSS: `${gradientType}-gradient(circle, ${colorListCSS.toString()})`,
      }
    default:
      return {
        gradientCSSnoRotation: `linear-gradient(90deg, ${colorListCSS.toString()})`,
        gradientCSS: `${gradientType}-gradient(${currentDegree}deg, ${colorListCSS.toString()})`,
      }
  }
}

export function GradientSection() {
  const {
    currentColor,
    setCurrentColor,
    colorStops,
    colorStopsList,
    addColorStop,
    removeColorStop,
    updatePosition,
    updateColor,
  } = useColorStop()

  const {
    value: degreeValue,
    onChange: onDegreeInputChange,
    currentDegree,
    onRotation,
  } = useDegreeWheel()

  const [selectedColorStop, setSelectedColorStop] = useState("stop1")

  const [gradientType, setGradientType] = useState<GradientType>("linear")

  function selectColorStop(id: string, color: IColor) {
    setSelectedColorStop(id)
    setCurrentColor(color)
  }

  useEffect(() => {
    if (!colorStops.has(selectedColorStop)) {
      const firstColorStop = colorStopsList[0]
      selectColorStop(firstColorStop.id, firstColorStop.color)
    }
  })

  const colorListCSS = colorStopsList.map(({ color, percentage }) => {
    const { r, g, b, a } = color.rgb
    return `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${
      Math.round(a * 100) / 100
    }) ${percentage}%`
  })

  const { gradientCSSnoRotation, gradientCSS } = generateCSS({
    colorListCSS,
    currentDegree,
    gradientType,
  })

  return (
    <>
      <div style={{ gridArea: "colorStops" }}>
        <h2 className="mt-12 mb-4 max-[1200px]:px-4">Gradient Creator</h2>
        <ColorStops
          colorStops={colorStops}
          colorStopsList={colorStopsList}
          updatePosition={updatePosition}
          gradientCSS={gradientCSS}
          gradientCSSnoRotation={gradientCSSnoRotation}
          enableSplitGradient={
            currentDegree !== 90 || gradientType !== "linear"
          }
          addNewColorStop={addColorStop}
          onSelectStop={selectColorStop}
        />
      </div>

      <div style={{ gridArea: "colorPicker" }}>
        <ColorPicker
          activeColorStop={selectedColorStop}
          currentColor={currentColor}
          updateColor={updateColor}
        />
      </div>

      <div style={{ gridArea: "colorValues" }}>
        <ColorValues hex={currentColor.hex} hsva={currentColor.hsv} />
      </div>

      <div className="p-4" style={{ gridArea: "selectionContainer" }}>
        <p className="font-semibold mb-4">Gradient Steps</p>
        <ul className="flex flex-col gap-2 overflow-y-scroll min-[600px]:max-h-[250px] min-[920px]:max-h-[550px]">
          {colorStopsList.map((colorStop) => {
            return (
              <SelectionContainer
                key={colorStop.id}
                percentage={colorStop.percentage}
                hex={colorStop.color.hex}
                selected={selectedColorStop === colorStop.id}
                onSelect={() => selectColorStop(colorStop.id, colorStop.color)}
                disableRemove={colorStops.size === 1}
                onRemove={() => removeColorStop(colorStop.id)}
              />
            )
          })}
        </ul>
      </div>

      <div style={{ gridArea: "degreeSelection" }}>
        <DegreeSelection
          value={degreeValue}
          onChange={onDegreeInputChange}
          currentDegree={currentDegree}
          onRotation={onRotation}
          gradientType={gradientType}
          setGradientType={setGradientType}
        />
      </div>

      <div style={{ gridArea: "codeSection" }}>
        <CodeSection code={gradientCSS} propertyName="background" />
      </div>
    </>
  )
}
