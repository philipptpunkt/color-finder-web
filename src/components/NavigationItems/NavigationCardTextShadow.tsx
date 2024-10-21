import { cn } from "@/utils/cn"
import { NavigationCard } from "./NavigationCard"

export function NavigationCardTextShadow({
  reducedSize = false,
}: {
  reducedSize?: boolean
}) {
  return (
    <NavigationCard
      href="/css-tools/text-shadow-creator"
      headline="Text Shadow Creator"
      reducedSize={reducedSize}
    >
      <div className="flex justify-center items-center h-32 rounded-xl bg-slate-100 my-2">
        <p
          className={cn("text-5xl font-bold text-slate-700", {
            "text-4xl": reducedSize,
          })}
          style={{
            textShadow: "6px 7px 5px rgba(120, 120, 120, 1)",
          }}
        >
          Text
        </p>
      </div>
      <p
        className={cn("text-md", {
          "text-sm": reducedSize,
        })}
      >
        Create text shadows easily with the <strong>Text Shadow Creator</strong>
        . Adjust offsets, blur and color and copy the CSS code directly into
        your styles.
      </p>
    </NavigationCard>
  )
}
