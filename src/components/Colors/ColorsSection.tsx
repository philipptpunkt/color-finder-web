import { Color } from "./types"
import { ColorPad } from "./ColorPad"
import "./styles.css"
import { DEFAULT_LIGHTNESS_THRESHOLD } from "../constants"

interface ColorsSectionProps {
  colors: Array<Color>
  hexColor: string
}

function ColorContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:flex lg:flex-col lg:items-center">
      <div className="w-full lg:max-w-[1200px]">
        <h2 className="px-4 my-4">Generated Colors</h2>
        <div className="flex flex-col sm:flex-row">{children}</div>
      </div>
    </div>
  )
}

export function ColorsSection({ colors, hexColor }: ColorsSectionProps) {
  return (
    <ColorContainer>
      {colors.map((color) => {
        const backgroundColor = color.color
        const textColor =
          color.lightness > DEFAULT_LIGHTNESS_THRESHOLD
            ? colors[10].color
            : colors[0].color

        const updatedHexColor = hexColor.startsWith("#")
          ? hexColor
          : `#${hexColor}`
        const isUserPick = updatedHexColor === color.color

        return (
          <ColorPad
            key={color.color}
            hexValue={color.color}
            backgroundColor={backgroundColor}
            textColor={textColor}
            position={color.position}
            isUserPick={isUserPick}
          />
        )
      })}
    </ColorContainer>
  )
}
