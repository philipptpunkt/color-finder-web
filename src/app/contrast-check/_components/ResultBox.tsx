import { cn } from "@/utils/cn"

export function ResultBox({
  wcagaaPass,
  wcagaaaPass,
  children,
}: {
  wcagaaPass: boolean | "notSet"
  wcagaaaPass: boolean | "notSet"
  children: React.ReactNode
}) {
  const wcagaaColor = wcagaaPass
    ? "bg-success-light dark:bg-success-dark"
    : "bg-error-light dark:bg-error-dark"
  const wcagaaaColor = wcagaaaPass
    ? "bg-success-light dark:bg-success-dark"
    : "bg-error-light dark:bg-error-dark"

  return (
    <div className="flex">
      <div className="mr-2">
        <p
          className={cn(
            "font-semibold p-2 rounded-t-md",
            wcagaaPass === "notSet"
              ? "bg-slate-300 dark:bg-slate-700"
              : wcagaaColor
          )}
        >
          WCAG&nbsp;AA
        </p>
        <p
          className={cn(
            "font-semibold p-2 rounded-b-md",
            wcagaaaPass === "notSet"
              ? "bg-slate-300 dark:bg-slate-700"
              : wcagaaaColor
          )}
        >
          WCAG&nbsp;AAA
        </p>
      </div>
      {children}
    </div>
  )
}
