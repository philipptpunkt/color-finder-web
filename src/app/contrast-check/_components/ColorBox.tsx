import chroma from "chroma-js"
import { Button } from "@/components/Buttons/Button"
import { DEFAULT_LIGHTNESS_THRESHOLD } from "@/components/constants"
import { ContentContainer } from "@/components/Layout/ContentContainer"
import { cn } from "@/utils/cn"
import { Input } from "@/design-system/Input"

export function ColorBox({
  title,
  color,
  setIsOpen,
  input,
  onChange,
  className,
}: {
  title: string
  color: string | null
  setIsOpen: () => void
  input: string | null
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
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
      <Input
        className="mb-4"
        value={input ?? undefined}
        onChange={onChange}
        placeholder="Enter a hex color"
        rounded
      />
      <Button
        type="contained"
        title="Choose Color"
        onClick={() => setIsOpen()}
      />
    </ContentContainer>
  )
}
