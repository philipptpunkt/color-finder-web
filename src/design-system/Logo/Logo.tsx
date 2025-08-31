import { cn } from "@/utils/cn"
import React from "react"

type LogoSize = "xxs" | "xs" | "sm" | "md" | "lg" | "xl"

interface LogoProps {
  size?: LogoSize
}

export function Logo({ size = "md" }: LogoProps) {
  const sizeClasses = {
    xxs: { container: "w-6 h-6", icon: "w-3 h-3" },
    xs: { container: "w-8 h-8", icon: "w-4 h-4" },
    sm: { container: "w-10 h-10", icon: "w-5 h-5" },
    md: { container: "w-12 h-12", icon: "w-6 h-6" },
    lg: { container: "w-16 h-16", icon: "w-8 h-8" },
    xl: { container: "w-20 h-20", icon: "w-10 h-10" },
  }

  const sizes = sizeClasses[size]

  return (
    <div
      className={cn([
        "flex",
        "items-center",
        "justify-center",
        "bg-neutral-900",
        "dark:bg-neutral-200",
        "rounded-lg",
        sizes.container,
      ])}
    >
      <img
        src="/rainbow-logo.svg"
        alt="ColorFinder Logo"
        className={sizes.icon}
      />
    </div>
  )
}
