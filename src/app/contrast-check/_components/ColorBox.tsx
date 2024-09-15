import { Button } from "@/components/Buttons/Button"
import { ContentContainer } from "@/components/Layout/ContentContainer"
import { cn } from "@/utils/cn"

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
  return (
    <ContentContainer className={className} reducedPadding>
      <div>
        <p className="font-semibold mb-2">{title}</p>
        <div
          className={cn(
            "h-16 w-full flex items-center justify-center rounded-md mb-4",
            {
              "border border-slate-500": !Boolean(color),
            }
          )}
          style={{ backgroundColor: color || "" }}
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
