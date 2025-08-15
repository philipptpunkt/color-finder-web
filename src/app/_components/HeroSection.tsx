import { AnimatedPalette } from "@/components/AnimatedPalette/AnimatedPalette"
import { cn } from "@/utils/cn"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      className={cn([
        "min-h-screen flex flex-col items-center justify-center p-8",
        "bg-radial from-white to-neutral-400 dark:from-neutral-700 dark:to-neutral-950",
      ])}
    >
      <div className="flex flex-col items-center">
        <h1 className=" text-5xl mb-4 font-medium">Master your color story</h1>
        <p className={" text-md text-center mb-4"}>
          Generate beautiful Tailwind-style color palettes from any hex color.
          <br />
          Create gradients, shadows, and check contrast ratios with our powerful
          CSS tools.
        </p>
        <Link
          href="/generate-palettes"
          className={cn([
            "bg-neutral-800 dark:bg-neutral-50",
            "px-16 py-2",
            "rounded-full",
            "text-neutral-50 dark:text-neutral-800 font-bold",
            "mb-8",
          ])}
        >
          Start generating
        </Link>
      </div>
      <AnimatedPalette />
      <Link className="text-gray-50" href="/colors">
        more
      </Link>
    </section>
  )
}
