import { cn } from "@/utils/cn"
import { IconName } from "./IconName"
import { iconUrls } from "./IconUrls"

interface IconProps {
  iconName: IconName
  className?: string
  style?: React.CSSProperties
}

export function Icon({ iconName, className, style }: IconProps) {
  const icon = iconUrls[iconName]

  return (
    <svg
      className={cn(
        "text-text-light dark:text-text-dark",
        "h-8 w-8",
        className
      )}
      style={style}
    >
      <use href={`${icon.src}#icon`} />
    </svg>
  )
}

export function IconHighlight({
  iconName,
  backgroundColor,
  border = false,
  className,
}: IconProps & { backgroundColor?: string; border?: boolean }) {
  const icon = iconUrls[iconName]

  return (
    <div
      className={cn(
        "flex justify-center items-center p-2 rounded-full",
        backgroundColor,
        { "border border-border-light dark:border-border-dark": border }
      )}
    >
      <svg
        className={cn(
          "text-text-light dark:text-text-dark",
          "h-8 w-8",
          className
        )}
      >
        <use href={`${icon.src}#icon`} />
      </svg>
    </div>
  )
}

export function IconButton({
  iconName,
  className,
  backgroundColor,
  onClick,
}: IconProps & {
  backgroundColor?: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}) {
  const icon = iconUrls[iconName]

  return (
    <button
      className={cn(
        "p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 hover:dark:bg-slate-700",
        backgroundColor
      )}
      onClick={onClick}
    >
      <svg
        className={cn(
          "text-text-light dark:text-text-dark",
          "h-8 w-8",
          className
        )}
      >
        <use href={`${icon.src}#icon`} />
      </svg>
    </button>
  )
}
