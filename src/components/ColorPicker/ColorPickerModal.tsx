"use client"

import { Alpha, Hue, Saturation, useColor } from "react-color-palette"
import { Button } from "../Buttons/Button"
import { cn } from "@/utils/cn"
import { DEFAULT_COLOR, DEFAULT_LIGHTNESS_THRESHOLD } from "../constants"
import chroma from "chroma-js"

interface ColorPickerModalProps {
  close: () => void
  applyColor: (value: string) => void
  initialColorValue: string | null
  enableAlphaValue?: boolean
  className?: string
}

export default function ColorPickerModal({
  close,
  applyColor,
  initialColorValue,
  enableAlphaValue,
  className,
}: ColorPickerModalProps) {
  const [color, setColor] = useColor(initialColorValue || DEFAULT_COLOR)

  const lightness = chroma(color.hex).get("hsl.l")
  const needsLightText = DEFAULT_LIGHTNESS_THRESHOLD > lightness

  return (
    <div
      className={cn(
        "bg-background-light dark:bg-background-dark",
        "rounded-2xl px-8 py-4 sm:px-12 sm:py-8",
        "w-full max-w-[500px]",
        className
      )}
      onClick={(event) => event.stopPropagation()}
    >
      <p className="text-2xl font-bold mb-4">Pick a Color</p>
      <div className="rounded-lg overflow-hidden mb-4">
        <Saturation height={200} color={color} onChange={setColor} />
      </div>
      <div className="mb-4">
        <Hue color={color} onChange={setColor} />
      </div>
      {enableAlphaValue ? (
        <div className="mb-4">
          <Alpha color={color} onChange={setColor} />
        </div>
      ) : null}
      <div className="rounded-lg p-2" style={{ backgroundColor: color.hex }}>
        <p
          className={cn(
            "w-full text-center font-semibold",
            needsLightText
              ? "text-text-inverse-light"
              : "text-text-inverse-dark"
          )}
        >
          {color.hex}
        </p>
      </div>
      <div className="flex mt-12">
        <Button type="outlined" title="Cancel" onClick={close} />
        <div className="w-4" />
        <Button
          type="contained"
          title="OK"
          onClick={() => applyColor(color.hex)}
        />
      </div>
    </div>
  )
}
