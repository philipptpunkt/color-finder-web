"use client"

import { Alpha, Hue, Saturation, IColor } from "react-color-palette"

interface ColorPickerProps {
  activeColorStop: string
  currentColor: IColor
  updateColor: (id: string, color: IColor) => void
}

export function ColorPicker({
  activeColorStop,
  currentColor,
  updateColor,
}: ColorPickerProps) {
  return (
    <div className="p-4">
      <p className="font-semibold mb-4">Color</p>
      <div className="rounded-md overflow-hidden mb-4">
        <Saturation
          height={200}
          color={currentColor}
          onChange={(color) => updateColor(activeColorStop, color)}
        />
      </div>
      <div className="mb-4">
        <Hue
          color={currentColor}
          onChange={(color) => updateColor(activeColorStop, color)}
        />
      </div>
      <div className="mb-4">
        <Alpha
          color={currentColor}
          onChange={(color) => updateColor(activeColorStop, color)}
        />
      </div>
    </div>
  )
}
