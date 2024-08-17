import { cn } from "@/utils/cn"

interface CardProps {
  children: React.ReactNode
  rounded?: string
  fill?: boolean
  horizontalPadding?: boolean
  verticalPadding?: boolean
  backgroundColor?: string
}

export function Card({
  children,
  rounded,
  fill = false,
  horizontalPadding = false,
  verticalPadding = false,
  backgroundColor,
}: CardProps) {
  return (
    <div
      className={cn(
        "shadow-md shadow-shadow-light dark:shadow-shadow-dark",
        "border border-border-light dark:border-border-dark",
        "bg-background-highlight-light dark:bg-background-highlight-dark",
        {
          "h-full": fill,
          "px-4": horizontalPadding,
          "py-4": verticalPadding,
        },
        rounded,
        backgroundColor
      )}
    >
      {children}
    </div>
  )
}
