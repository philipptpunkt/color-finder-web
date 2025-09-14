import { AnimatedPalette } from "@/components/AnimatedPalette/AnimatedPalette"
import { cn } from "@/utils/cn"
import { Button } from "@/design-system"

export function HeroSection() {
  return (
    <section
      className={cn([
        "relative min-h-screen flex flex-col items-center justify-center p-8",
        "bg-radial from-white to-neutral-300 dark:from-neutral-700 dark:to-neutral-950",
      ])}
    >
      <div className="flex flex-col items-center mb-8">
        <h1 className="mb-4">Master your color story</h1>
        <p className={"text-lg text-center mb-4"}>
          Generate custom Tailwind-style color palettes in seconds.
          <br />
          Use contrast checks for accessibility. Create gradients and shadows
          with ease.
        </p>
        <Button label="Start generating" color="neutral" href="/tools" />
      </div>
      <AnimatedPalette />
      <Button
        label="more"
        variant="text"
        size="s"
        href="/colors"
        className="absolute bottom-8"
      />
    </section>
  )
}
