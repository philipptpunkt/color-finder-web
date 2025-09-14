import { cn } from "@/utils/cn"
import { Icon, IconProps } from "./Icon"
import { IconBackground, interactiveIconVariants } from "./variants"
import Link from "next/link"

interface IconLinkProps extends IconProps {
  href: string
  background?: IconBackground
}

export function IconLink({
  iconName,
  size,
  color,
  background,
  strokeWidth,
  href,
}: IconLinkProps) {
  return (
    <Link className={cn(interactiveIconVariants({ background }))} href={href}>
      <Icon
        iconName={iconName}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
      />
    </Link>
  )
}
