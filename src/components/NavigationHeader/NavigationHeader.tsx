"use client"

import { cn } from "@/utils/cn"
import { ThemeToggle } from "../ThemeChanger/ThemeToogle"
import { Section } from "@/layout"
import { Logo } from "@/design-system"
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

        {/* Navigation Links */}
        <nav className={cn(["hidden", "md:flex", "items-center", "space-x-8"])}>
          <a
            href="#tools"
            className={cn([
              "text-text-secondary",
              "hover:text-text",
              "transition-colors",
              "font-medium",
            ])}
          >
            Tools
          </a>
          <a
            href="#features"
            className={cn([
              "text-text-secondary",
              "hover:text-text",
              "transition-colors",
              "font-medium",
            ])}
          >
            Features
          </a>
          <a
            href="#about"
            className={cn([
              "text-text-secondary",
              "hover:text-text",
              "transition-colors",
              "font-medium",
            ])}
          >
            About
          </a>

          {/* Theme Toggle for Desktop */}
          <ThemeToggle />
        </nav>

        {/* Mobile Theme Toggle */}
        <div className={cn(["md:hidden"])}>
          <ThemeToggle />
        </div>
      </div>
    </Section>
  )
}
