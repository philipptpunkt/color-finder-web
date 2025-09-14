import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Logo } from "@/design-system"
import Link from "next/link"
import { ToolbarMenuItem } from "./ToolbarMenuItem"
import { cssToolItems, footerItems, paletteToolItems } from "./toolbarItems"

function Divider() {
  return <div className="h-[1px] bg-sidebar-border my-1 w-full" />
}

export function Toolbar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuButton asChild className="h-12">
            <Link href={"/"}>
              <Logo size="sm" />
              <span>ColorFinder</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarHeader>
      <Divider />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Palettes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {paletteToolItems.map((item) => (
                <ToolbarMenuItem key={item.title} {...item} isActive={false} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Divider />
        <SidebarGroup>
          <SidebarGroupLabel>CSS Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {cssToolItems.map((item) => (
                <ToolbarMenuItem key={item.title} {...item} isActive={false} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Divider />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarGroupContent>
            <SidebarMenu>
              {footerItems.map((item) => (
                <ToolbarMenuItem key={item.title} {...item} isActive={false} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
