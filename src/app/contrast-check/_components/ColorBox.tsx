import { Button } from "@/components/Buttons/Button"
import { DEFAULT_LIGHTNESS_THRESHOLD } from "@/components/constants"
import { ContentContainer } from "@/components/Layout/ContentContainer"
import { cn } from "@/utils/cn"
import chroma from "chroma-js"

export function ColorBox({
  title,
  color,
  setIsOpen,
  className,
}: {
  title: string
  color: string | null
  setIsOpen: () => void
  className?: string
}) {
  const originalLightness = color ? chroma(color).get("hsl.l") : null

  return (
    <ContentContainer className={className} reducedPadding>
      <div>
        <p className="font-semibold mb-2">{title}</p>
        <div
          className={cn(
            "h-16 w-full flex items-center justify-center rounded-md mb-4 cursor-pointer",
            {
              "border border-slate-500": !Boolean(color),
              "text-text-inverse-light dark:text-text-inverse-light":
                originalLightness !== null &&
                originalLightness < DEFAULT_LIGHTNESS_THRESHOLD,
              "text-text-inverse-dark dark:text-text-inverse-dark":
                originalLightness !== null &&
                originalLightness >= DEFAULT_LIGHTNESS_THRESHOLD,
            }
          )}
          style={{ backgroundColor: color || "" }}
          onClick={() => setIsOpen()}
        >
          {!color ? "not set" : color}
        </div>
      </div>
      <Button
        type="contained"
        title="Choose Color"
        onClick={() => setIsOpen()}
      />
    </ContentContainer>
  )
}
