import { cn } from "@/utils/cn"
import { Link } from "../Link/Link"

interface LinkItemProps {
  title: string
  description?: string
  href: string
  className?: string
}

export function LinkItem({
  title,
  href,
  description,
  className,
}: LinkItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "hover:bg-slate-200 dark:hover:bg-slate-800 focus:shadow-custom-500 focus:shadow-[0_0_0_2px]",
        "select-none rounded-md p-2 no-underline outline-none transition-colors",
        "hover:scale-[102%]",
        className
      )}
    >
      <p className="font-semibold text-text-light dark:text-text-dark mb-1">
        {title}
      </p>
      <p className="font-normal text-sm text-slate-500 dark:text-text-dark">
        {description}
      </p>
    </Link>
  )
}
