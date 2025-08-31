import { AnimatedPalette } from "@/components/AnimatedPalette/AnimatedPalette"
import { cn } from "@/utils/cn"
import { Button } from "@/design-system"

export default function HeroSection() {
  return (
    <section
      className={cn([
        "relative min-h-screen flex flex-col items-center justify-center p-8",
        "bg-radial from-white to-neutral-300 dark:from-neutral-700 dark:to-neutral-950",
      ])}
    >
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-7xl mb-4 font-medium">Master your color story</h1>
        <p className={"text-lg text-center mb-4"}>
          Generate beautiful Tailwind-style color palettes from any hex color.
          <br />
          Create gradients, shadows, and check contrast ratios with our powerful
          CSS tools.
        </p>
        <Button
          label="Start generating"
          color="neutral"
          href="/generate-palettes"
        />
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
