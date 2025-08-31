import { cn } from "@/utils/cn"
import React from "react"

type SectionWidth = "full" | "wide" | "content" | "narrow" | "document"
type SectionPadding = "sm" | "md"
type SectionElement = "section" | "div" | "span" | "header" | "footer"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  width?: SectionWidth
  horizontalPadding?: SectionPadding
  className?: string
  containerClass?: string
  as?: SectionElement
}

const widthClasses: Record<SectionWidth, string> = {
  full: "w-full",
  wide: "max-w-[1920px]",
  content: "max-w-[1440px]",
  narrow: "max-w-[1280px]",
  document: "max-w-[1024px]",
}

const paddingClasses: Record<SectionPadding, string> = {
  sm: "px-4",
  md: "px-8",
}

export function Section({
  children,
  width = "wide",
  horizontalPadding,
  className,
  containerClass,
  as: Element = "section",
  ...props
}: SectionProps) {
  return (
    <Element className={cn(["w-full"], className)} {...props}>
      <div
        className={cn(
          [
            "mx-auto",
            horizontalPadding ? paddingClasses[horizontalPadding] : "px-6",
            widthClasses[width],
          ],
          containerClass
        )}
      >
        {children}
      </div>
    </Element>
  )
}
