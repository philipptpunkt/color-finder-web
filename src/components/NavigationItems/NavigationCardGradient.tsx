import { cn } from "@/utils/cn"
import { NavigationCard } from "./NavigationCard"

export function NavigationCardGradient({
  reducedSize = false,
}: {
  reducedSize?: boolean
}) {
  return (
    <NavigationCard
      href="/css-tools/gradient-creator"
      headline="Gradient Creator"
      reducedSize={reducedSize}
    >
      <div className="rainbow-linear h-32 rounded-xl my-2" />
      <p
        className={cn("text-md", {
          "text-sm": reducedSize,
        })}
      >
        The <strong>Gradient Creator</strong> is an interactive tool to generate
        gradients in various forms and colors. It automatically returns the
        required CSS code.
      </p>
    </NavigationCard>
  )
}
