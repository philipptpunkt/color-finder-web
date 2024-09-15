import { cn } from "@/utils/cn"

export function ContentContainer({
  children,
  reducedPadding = false,
  className,
}: {
  children: React.ReactNode
  reducedPadding?: boolean
  className?: string
}) {
  const padding = reducedPadding ? "p-4 sm:p-8" : "p-8 sm:p-12"

  return (
    <div
      className={cn(
        "rounded-md bg-slate-200 dark:bg-slate-900 sm:p-12",
        padding,
        className
      )}
    >
      {children}
    </div>
  )
}
