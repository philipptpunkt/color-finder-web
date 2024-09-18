import { ThemeToggle } from "@/components/ThemeChanger/ThemeToogle"
import { ColorWheel } from "@/components/ColorWheel/ColorWheel"
import Link from "next/link"
import { cn } from "@/utils/cn"
import { Suspense } from "react"
import { HomeLinkClient } from "./HomeLinkClient"
import { ContastCheckClient } from "./ContastCheckClient"
import { CssToolsClient } from "./CssToolsClient"

export function Navigation() {
  return (
    <div className="fixed top-0 left-0 w-full bg-slate-900 dark:bg-slate-900">
      <div>
        <div className="flex justify-between w-full max-w-[1920px] px-4 py-2 z-20">
          <div className="flex items-center text-4xl text-text-inverse-light dark:text-text-inverse-light py-1">
            <ColorWheel />
            <Suspense
              fallback={
                <Link href="/">
                  <span className="ml-2 font-bold">Color</span>
                  <span>finder</span>
                </Link>
              }
            >
              <HomeLinkClient />
            </Suspense>
          </div>
          <ThemeToggle />
        </div>
        <div
          className={cn(
            "flex gap-16 justify-center p-1",
            "text-text-inverse-light dark:text-text-inverse-light font-semibold",
            "border-t-2 border-slate-700"
          )}
        >
          <Suspense
            fallback={<Link href="/contrast-check">Contrast Check</Link>}
          >
            <ContastCheckClient />
          </Suspense>
          <Suspense fallback={<Link href="/css-tools">CSS Tools</Link>}>
            <CssToolsClient />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
