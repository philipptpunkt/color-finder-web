import { ReactNode } from "react"
import { cn } from "../../utils/cn"

interface CardProps {
  children: ReactNode
  horizontalPadding?: "sm" | "md" | "lg" | "xl"
  verticalPadding?: "sm" | "md" | "lg" | "xl"
  className?: string
}

const horizontalPaddingMap = {
  sm: "px-2",
  md: "px-4",
  lg: "px-6",
  xl: "px-8",
}

const verticalPaddingMap = {
  sm: "py-2",
  md: "py-4",
  lg: "py-6",
  xl: "py-8",
}

export function DefaultCard({
  children,
  horizontalPadding = "md",
  verticalPadding = "lg",
  className,
}: CardProps) {
  const horizontalPaddingClass = horizontalPaddingMap[horizontalPadding]
  const verticalPaddingClass = verticalPaddingMap[verticalPadding]

  return (
    <div
      className={cn(
        [
          "p-[1px]",
          "bg-gradient-to-br",
          "from-neutral-100",
          "to-neutral-200",
          "dark:from-neutral-700",
          "dark:to-neutral-800",
          "rounded-lg",
          "h-[content-fit]",
        ],
        className
      )}
    >
      <div
        className={cn([
          "bg-background",
          "rounded-lg",
          horizontalPaddingClass,
          verticalPaddingClass,
        ])}
      >
        {children}
      </div>
    </div>
  )
}
