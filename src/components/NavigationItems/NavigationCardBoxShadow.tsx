import { cn } from "@/utils/cn"
import { NavigationCard } from "./NavigationCard"

export function NavigationCardBoxShadow({
  reducedSize = false,
}: {
  reducedSize?: boolean
}) {
  return (
    <NavigationCard
      href="/css-tools/box-shadow-creator"
      headline="Box Shadow Creator"
      reducedSize={reducedSize}
    >
      <div className="flex justify-center items-center h-32 rounded-xl bg-slate-100 my-2">
        <div
          className={cn("h-16 w-32 bg-slate-700", {
            "h-12 w-24": reducedSize,
          })}
          style={{
            boxShadow: "12px 12px 10px 3px rgba(120, 120, 120, 1)",
          }}
        />
      </div>
      <p
        className={cn("text-md", {
          "text-sm": reducedSize,
        })}
      >
        The <strong>Box Shadow Creator</strong> lets you adjust offsets, blur,
        shadow size and color in real-time. You can copy the CSS code directly
        into your styles
      </p>
    </NavigationCard>
  )
}
