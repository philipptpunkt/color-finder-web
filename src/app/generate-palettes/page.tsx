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
  }, [hasSecondaryColor, secondaryColor, paletteSize, chromaReduction, hueShift])

  const handleColorCopy = async (color: OklchColor) => {
    const oklchString = `oklch(${color.l.toFixed(3)} ${color.c.toFixed(3)} ${color.h.toFixed(1)})`
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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-4">
            Expert Palette Generator
          </h1>
          <p className="text-xl text-text-label max-w-2xl mx-auto">
            Advanced tools for creating professional color palettes with precise OKLCH control
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Controls Panel */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Primary Color */}
            <div className={cn([
              "p-6",
              "bg-background-highlight",
              "rounded-2xl",
              "border",
              "border-border",
            ])}>
              <h3 className="text-lg font-semibold text-text mb-4">Primary Color</h3>
              <OklchColorPicker
                value={primaryColor}
                onChange={setPrimaryColor}
              />
            </div>

            {/* Secondary Color */}
            <div className={cn([
              "p-6",
              "bg-background-highlight",
              "rounded-2xl",
              "border",
              "border-border",
            ])}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-text">Secondary Color</h3>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={hasSecondaryColor}
                    onChange={(e) => setHasSecondaryColor(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm text-text-label">Enable</span>
                </label>
              </div>
              {hasSecondaryColor && (
                <OklchColorPicker
                  value={secondaryColor}
                  onChange={setSecondaryColor}
                />
              )}
            </div>

            {/* Advanced Settings */}
            <div className={cn([
              "p-6",
              "bg-background-highlight",
              "rounded-2xl",
              "border",
              "border-border",
            ])}>
              <h3 className="text-lg font-semibold text-text mb-4">Advanced Settings</h3>
              
              <div className="space-y-4">
                {/* Palette Size */}
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Palette Size: {paletteSize}
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="15"
                    value={paletteSize}
                    onChange={(e) => setPaletteSize(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Min Lightness */}
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Min Lightness: {(minLightness * 100).toFixed(0)}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="0.5"
                    step="0.01"
                    value={minLightness}
                    onChange={(e) => setMinLightness(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Max Lightness */}
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Max Lightness: {(maxLightness * 100).toFixed(0)}%
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="1"
                    step="0.01"
                    value={maxLightness}
                    onChange={(e) => setMaxLightness(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Chroma Reduction */}
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Wash Out Effect: {(chromaReduction * 100).toFixed(0)}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={chromaReduction}
                    onChange={(e) => setChromaReduction(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Hue Shift */}
                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Hue Shift: {(hueShift * 100).toFixed(1)}%
                  </label>
                  <input
                    type="range"
                    min="-0.5"
                    max="0.5"
                    step="0.01"
                    value={hueShift}
                    onChange={(e) => setHueShift(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Export Options */}
            <div className={cn([
              "p-6",
              "bg-background-highlight",
              "rounded-2xl",
              "border",
              "border-border",
            ])}>
              <h3 className="text-lg font-semibold text-text mb-4">Export</h3>
              <button
                onClick={exportAsCSS}
                className={cn([
                  "w-full",
                  "px-4",
                  "py-2",
                  "bg-primary",
                  "text-background",
                  "rounded-lg",
                  "font-medium",
                  "hover:opacity-90",
                  "transition-opacity",
                ])}
              >
                Export as CSS Variables
              </button>
            </div>
          </motion.div>

          {/* Palette Display */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Primary Palette */}
            <div>
              <h3 className="text-xl font-semibold text-text mb-4">Primary Palette</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {primaryPalette.map((color, index) => {
                  const step = index === 0 ? 50 : (index - 1) * 100 + 100
                  const oklchString = `oklch(${color.l.toFixed(3)} ${color.c.toFixed(3)} ${color.h.toFixed(1)})`
                  
                  return (
                    <motion.div
                      key={`primary-${index}`}
                      className={cn([
                        "relative",
                        "aspect-square",
                        "rounded-xl",
                        "cursor-pointer",
                        "border-2",
                        "border-border/20",
                        "shadow-lg",
                        "overflow-hidden",
                        "group",
                      ])}
                      style={{ backgroundColor: oklchToCss(color) }}
                      onClick={() => handleColorCopy(color)}
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={cn([
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
                        "text-xs",
                        "font-medium",
                        "p-2",
                        "text-center",
                      ])}>
                        <div className="mb-1">{step}</div>
                        <div className="text-[10px] opacity-80">{oklchString}</div>
                        <div className="text-[10px] mt-1">Click to copy</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Secondary Palette */}
            {hasSecondaryColor && secondaryPalette.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-text mb-4">Secondary Palette</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                  {secondaryPalette.map((color, index) => {
                    const step = index === 0 ? 50 : (index - 1) * 100 + 100
                    const oklchString = `oklch(${color.l.toFixed(3)} ${color.c.toFixed(3)} ${color.h.toFixed(1)})`
                    
                    return (
                      <motion.div
                        key={`secondary-${index}`}
                        className={cn([
                          "relative",
                          "aspect-square",
                          "rounded-xl",
                          "cursor-pointer",
                          "border-2",
                          "border-border/20",
                          "shadow-lg",
                          "overflow-hidden",
                          "group",
                        ])}
                        style={{ backgroundColor: oklchToCss(color) }}
                        onClick={() => handleColorCopy(color)}
                        whileHover={{ scale: 1.05, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className={cn([
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
                          "text-xs",
                          "font-medium",
                          "p-2",
                          "text-center",
                        ])}>
                          <div className="mb-1">{step}</div>
                          <div className="text-[10px] opacity-80">{oklchString}</div>
                          <div className="text-[10px] mt-1">Click to copy</div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </div>

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
    </div>
  )
}