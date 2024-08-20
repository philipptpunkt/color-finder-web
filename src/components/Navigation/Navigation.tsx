import { ThemeToggle } from "@/components/ThemeChanger/ThemeToogle"
import { ColorWheel } from "@/components/ColorWheel/ColorWheel"
import Link from "next/link"

export function Navigation() {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center bg-slate-900 dark:bg-slate-900">
      <div className="flex justify-between w-full max-w-[1920px] px-4 py-2 z-20">
        <div className="flex items-center text-4xl text-text-inverse-light dark:text-text-inverse-light">
          <ColorWheel />
          <Link href="/">
            <span className="ml-2 font-bold">Color</span>
            <span>finder</span>
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </div>
  )
}
