import { Icon, IconName } from "@/design-system"
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import Link from "next/link"
import { ToolbarId } from "./toolbarItems"

interface ToolbarMenuItemProps {
  id: ToolbarId
  iconName: IconName
  href: string
  title: string
  isActive: boolean
}

export function ToolbarMenuItem({
  id,
  iconName,
  href,
  title,
  isActive,
}: ToolbarMenuItemProps) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild tooltip={title} isActive={isActive}>
        <Link href={href}>
          <Icon
            iconName={iconName}
            strokeWidth="regular"
            className="text-inherit hover:text-inherit pr-1"
            size="md"
          />
          <span className="font-medium pl-2">{title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
