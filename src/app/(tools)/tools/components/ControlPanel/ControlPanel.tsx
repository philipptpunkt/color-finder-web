"use client"

import { cn } from "@/utils/cn"
import { useUrlState } from "@/utils/useUrlState"
import { motion, AnimatePresence } from "framer-motion"
import { IconButton, IconName } from "@/design-system"
import { PanelId } from "../types"
import { ColorPanel } from "./Color"
import { SettingsPanel } from "./Settings"

export function ControlPanel() {
  const [panelId, setPanelId] = useUrlState<PanelId>("panel")
  const open = Boolean(
    panelId && Object.values(PanelId).includes(panelId as PanelId)
  )

  const handleClose = () => {
    setPanelId(undefined)
  }

  const renderPanelContent = () => {
    switch (panelId) {
      case PanelId.Color:
        return <ColorPanel />
      case PanelId.Settings:
        return <SettingsPanel />
      default:
        return (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Tool Menu</h3>
            <p className="text-sm text-text-secondary">
              Select a tool from the sidebar to get started.
            </p>
          </div>
        )
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 350, opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{
            width: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className={cn([
            "flex",
            "flex-col",
            "h-screen",
            "bg-neutral-200",
            "border-r",
            "border-border",
            "overflow-hidden",
            "relative",
          ])}
          style={{ width: 350 }}
        >
          {/* Close button */}
          <div className="absolute top-4 right-4 z-10">
            <IconButton
              iconName={IconName.icX}
              onClick={handleClose}
              size="sm"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="h-full overflow-y-auto p-4 pt-16"
          >
            {renderPanelContent()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
