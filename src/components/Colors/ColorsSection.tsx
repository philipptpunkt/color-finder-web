import { cn } from "@/utils/cn"
import { Color } from "./types"

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
          color.lightness > 0.7 ? colors[10].color : colors[0].color

        const updatedHexColor = hexColor.startsWith("#")
          ? hexColor
          : `#${hexColor}`
        const isUserPick = updatedHexColor === color.color

        return (
          <div
            className="flex flex-row sm:flex-col w-full justify-center items-center lg:rounded-lg py-4 lg:mx-2"
            style={{
              backgroundColor: backgroundColor,
              color: textColor,
            }}
            key={color.color}
          >
            <div
              className={cn(
                "text-center text-sm sm:text-xs lg:text-sm pr-4 sm:p-0",
                {
                  "font-bold": isUserPick,
                }
              )}
            >
              {color.position}
            </div>
            <div
              className={cn(
                "text-center text-sm sm:text-xs lg:text-sm uppercase",
                {
                  "font-bold": isUserPick,
                }
              )}
            >
              {color.color}
            </div>
          </div>
        )
      })}
    </ColorContainer>
  )
}
