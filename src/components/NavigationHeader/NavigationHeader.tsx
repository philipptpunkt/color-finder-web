import { cn } from "@/utils/cn"
import { ThemeToggle } from "../ThemeChanger/ThemeToogle"
import { Section } from "@/layout"
import { Logo, Button } from "@/design-system"
import Link from "next/link"

export function NavigationHeader() {
  return (
    <Section
      as="header"
      className={cn([
        "fixed",
        "top-0",
        "left-0",
        "right-0",
        "z-50",
        "bg-background/30",
        "backdrop-blur-md",
        "border-b",
        "border-border",
      ])}
    >
      <div className={cn(["h-16", "flex", "items-center", "justify-between"])}>
        {/* Logo/Brand */}
        <Link href="/">
          <div className={cn(["flex", "items-center", "space-x-3"])}>
            <div className={cn(["flex", "items-center", "space-x-2"])}>
              <Logo size="xs" />
              <span className={cn(["text-text", "font-semibold", "text-lg"])}>
                ColorFinder
              </span>
            </div>
          </div>
        </Link>

        {/* Navigation Links - Centered */}
        <nav
          className={cn([
            "hidden",
            "md:flex",
            "items-center",
            "space-x-8",
            "absolute",
            "left-1/2",
            "transform",
            "-translate-x-1/2",
          ])}
        >
          {/* <Button
            variant="contained"
            label="Start generating"
            color="primary"
            href="/generate-palettes"
          /> */}
          <Button
            variant="text"
            label="Tools"
            color="neutral"
            href="/css-tools"
            width="snug"
          />
          <Button
            variant="text"
            label="Features"
            color="neutral"
            href="/features"
            width="snug"
          />
          <Button
            variant="text"
            label="About"
            color="neutral"
            href="/about"
            width="snug"
          />
        </nav>

        <div className={cn(["flex", "items-center", "space-x-2"])}>
          <Button
            variant="contained"
            label="Sign in"
            color="neutral"
            href="/"
          />
          <ThemeToggle />
        </div>
      </div>
    </Section>
  )
}
