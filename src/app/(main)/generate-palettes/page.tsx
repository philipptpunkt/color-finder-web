"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/utils/cn"
import {
  OklchColor,
  createLinearLightnessPaletteFromOklch,
} from "@/utils/paletteCreation"
import { oklchToCss } from "@/utils/oklchToCss"
import { OklchColorPicker } from "@/components/OklchColorPicker"
import { copyTextToClipboard } from "@/utils/copyTextToClipboard"
import { Section } from "@/layout/Section"

export default function GeneratePalettesPage() {
  // Primary color settings
  const [primaryColor, setPrimaryColor] = useState<OklchColor>({
    l: 0.6,
    c: 0.15,
    h: 230,
  })

  // Secondary color settings (optional)
  const [hasSecondaryColor, setHasSecondaryColor] = useState(false)
  const [secondaryColor, setSecondaryColor] = useState<OklchColor>({
    l: 0.6,
    c: 0.15,
    h: 30,
  })

  // Advanced palette settings
  const [paletteSize, setPaletteSize] = useState(11)
  const [minLightness, setMinLightness] = useState(0.1)
  const [maxLightness, setMaxLightness] = useState(0.95)
  const [chromaReduction, setChromaReduction] = useState(0.8)
  const [hueShift, setHueShift] = useState(-0.1)

  // UI state
  const [copiedColor, setCopiedColor] = useState<string | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const primaryPalette = useMemo(() => {
    return createLinearLightnessPaletteFromOklch(
      primaryColor,
      paletteSize,
      chromaReduction,
      hueShift
    )
  }, [primaryColor, paletteSize, chromaReduction, hueShift])

  const secondaryPalette = useMemo(() => {
    if (!hasSecondaryColor) return []
    return createLinearLightnessPaletteFromOklch(
      secondaryColor,
      paletteSize,
      chromaReduction,
      hueShift
    )
  }, [
    hasSecondaryColor,
    secondaryColor,
    paletteSize,
    chromaReduction,
    hueShift,
  ])

  const handleColorCopy = async (color: OklchColor) => {
    const oklchString = `oklch(${color.l.toFixed(3)} ${color.c.toFixed(
      3
    )} ${color.h.toFixed(1)})`
    await copyTextToClipboard(oklchString)
    setCopiedColor(oklchString)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  const exportAsCSS = () => {
    let css = ":root {\n"
    primaryPalette.forEach((color, index) => {
      const step = index === 0 ? 50 : (index - 1) * 100 + 100
      css += `  --color-primary-${step}: ${oklchToCss(color)};\n`
    })
    if (hasSecondaryColor && secondaryPalette.length > 0) {
      secondaryPalette.forEach((color, index) => {
        const step = index === 0 ? 50 : (index - 1) * 100 + 100
        css += `  --color-secondary-${step}: ${oklchToCss(color)};\n`
      })
    }
    css += "}"
    copyTextToClipboard(css)
  }

  return (
    <div className="min-h-screen bg-neutral-200 dark:bg-neutral-900">
      <Section width="wide" horizontalPadding="md" className="py-8 pt-24">
        <div className="flex gap-4">
          {/* Expandable Controls Panel */}
          <motion.div
            className={cn([
              "relative",
              "border",
              "border-neutral-50",
              "transition-all",
              "duration-300",
              "ease-in-out",
              "overflow-hidden",
              "rounded-lg",
              "h-96", // Fixed height that accommodates the color picker
              isExpanded ? "w-80" : "w-16",
            ])}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Collapsed State - Vertical Text */}
            {!isExpanded && (
              <div className="h-full flex flex-col items-center justify-center relative">
                <div
                  className="transform -rotate-90 text-text font-medium text-lg whitespace-nowrap cursor-pointer select-none"
                  onClick={() => setIsExpanded(true)}
                >
                  PRIMARY
                </div>
                <button
                  onClick={() => setIsExpanded(true)}
                  className={cn([
                    "absolute",
                    "right-2",
                    "top-1/2",
                    "transform",
                    "-translate-y-1/2",
                    "w-6",
                    "h-6",
                    "bg-border",
                    "rounded-full",
                    "flex",
                    "items-center",
                    "justify-center",
                    "text-text",
                    "hover:bg-border/80",
                    "transition-colors",
                  ])}
                >
                  →
                </button>
              </div>
            )}

            {/* Expanded State - Color Picker */}
            {isExpanded && (
              <div className="p-6 h-full overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-text">
                    Primary Color
                  </h3>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className={cn([
                      "w-6",
                      "h-6",
                      "bg-border",
                      "rounded-full",
                      "flex",
                      "items-center",
                      "justify-center",
                      "text-text",
                      "hover:bg-border/80",
                      "transition-colors",
                    ])}
                  >
                    ←
                  </button>
                </div>
                <OklchColorPicker
                  value={primaryColor}
                  onChange={setPrimaryColor}
                />
              </div>
            )}
          </motion.div>

          {/* Palette Display */}
          <motion.div
            className="flex-1 flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Primary Color Display */}
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-xl border-2 border-border shadow-lg"
                  style={{ backgroundColor: oklchToCss(primaryColor) }}
                />
                <div>
                  <h2 className="text-2xl font-bold text-text">Primary</h2>
                  <div className="text-sm text-text-label font-mono">
                    {oklchToCss(primaryColor)}
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Palette */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-text mb-4">Palette</h3>
              <div className="flex gap-2 h-32">
                {primaryPalette.map((color, index) => {
                  const step = index === 0 ? 50 : (index - 1) * 100 + 100
                  const oklchString = `oklch(${color.l.toFixed(
                    3
                  )} ${color.c.toFixed(3)} ${color.h.toFixed(1)})`

                  return (
                    <motion.div
                      key={`primary-${index}`}
                      className={cn([
                        "relative",
                        "flex-1",
                        "rounded-xl",
                        "cursor-pointer",
                        "border-2",
                        "border-border/20",
                        "shadow-lg",
                        "overflow-hidden",
                        "group",
                        "min-h-0",
                      ])}
                      style={{ backgroundColor: oklchToCss(color) }}
                      onClick={() => handleColorCopy(color)}
                      whileHover={{ scale: 1.02, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className={cn([
                          "absolute",
                          "inset-0",
                          "bg-black/60",
                          "opacity-0",
                          "group-hover:opacity-100",
                          "transition-opacity",
                          "duration-200",
                          "flex",
                          "flex-col",
                          "items-center",
                          "justify-center",
                          "text-white",
                          "text-sm",
                          "font-medium",
                          "p-2",
                          "text-center",
                        ])}
                      >
                        <div className="mb-2 text-lg">{step}</div>
                        <div className="text-xs opacity-80 mb-2">
                          {oklchString}
                        </div>
                        <div className="text-xs">Click to copy</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Copied Notification */}
      <AnimatePresence>
        {copiedColor && (
          <motion.div
            className={cn([
              "fixed",
              "bottom-4",
              "right-4",
              "bg-primary",
              "text-background",
              "px-4",
              "py-2",
              "rounded-lg",
              "shadow-lg",
              "z-50",
            ])}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            Copied: {copiedColor}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
