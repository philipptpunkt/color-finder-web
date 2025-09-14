import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Toolbar } from "./components/Toolbar/Toolbar"
import { ControlPanel } from "./components/ControlPanel/ControlPanel"

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider defaultOpen={true}>
      <Toolbar />
      <ControlPanel />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
