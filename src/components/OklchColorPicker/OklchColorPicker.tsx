"use client"

import { useState, useCallback, useEffect } from "react"
import { cn } from "@/utils/cn"
import { OklchColor } from "@/utils/paletteCreation"
import { oklchToCss } from "@/utils/oklchToCss"

interface OklchColorPickerProps {
  value: OklchColor
  onChange: (color: OklchColor) => void
  className?: string
}

export function OklchColorPicker({
  value,
  onChange,
  className,
}: OklchColorPickerProps) {
  const [localValue, setLocalValue] = useState(value)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const handleChange = useCallback(
    (newValue: Partial<OklchColor>) => {
      const updatedColor = { ...localValue, ...newValue }
      setLocalValue(updatedColor)
      onChange(updatedColor)
    },
    [localValue, onChange]
  )

  const cssPreview = oklchToCss(localValue)

  return (
    <div className={cn(["space-y-4", className])}>
      {/* Color Preview */}
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-lg border border-border shadow-sm"
          style={{ backgroundColor: cssPreview }}
        />
        <div className="flex-1">
          <div className="text-sm font-medium text-text">OKLCH Color</div>
          <div className="text-xs text-text-label font-mono">{cssPreview}</div>
        </div>
      </div>

      {/* Lightness Control */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-text-label">
            Lightness
          </label>
          <span className="text-xs text-text-label font-mono">
            {(localValue.l * 100).toFixed(1)}%
          </span>
        </div>
        <div className="relative">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={localValue.l}
            onChange={(e) => handleChange({ l: parseFloat(e.target.value) })}
            className={cn([
              "w-full",
              "h-2",
              "bg-gradient-to-r",
              "from-black",
              "to-white",
              "rounded-lg",
              "appearance-none",
              "cursor-pointer",
              "[&::-webkit-slider-thumb]:appearance-none",
              "[&::-webkit-slider-thumb]:w-4",
              "[&::-webkit-slider-thumb]:h-4",
              "[&::-webkit-slider-thumb]:rounded-full",
              "[&::-webkit-slider-thumb]:bg-white",
              "[&::-webkit-slider-thumb]:border-2",
              "[&::-webkit-slider-thumb]:border-border",
              "[&::-webkit-slider-thumb]:shadow-md",
              "[&::-webkit-slider-thumb]:cursor-pointer",
            ])}
          />
        </div>
      </div>

      {/* Chroma Control */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-text-label">
            Chroma (Saturation)
          </label>
          <span className="text-xs text-text-label font-mono">
            {localValue.c.toFixed(3)}
          </span>
        </div>
        <div className="relative">
          <input
            type="range"
            min="0"
            max="0.4"
            step="0.001"
            value={localValue.c}
            onChange={(e) => handleChange({ c: parseFloat(e.target.value) })}
            style={{
              background: `linear-gradient(to right, 
                oklch(${localValue.l} 0 ${localValue.h}), 
                oklch(${localValue.l} 0.4 ${localValue.h}))`
            }}
            className={cn([
              "w-full",
              "h-2",
              "rounded-lg",
              "appearance-none",
              "cursor-pointer",
              "[&::-webkit-slider-thumb]:appearance-none",
              "[&::-webkit-slider-thumb]:w-4",
              "[&::-webkit-slider-thumb]:h-4",
              "[&::-webkit-slider-thumb]:rounded-full",
              "[&::-webkit-slider-thumb]:bg-white",
              "[&::-webkit-slider-thumb]:border-2",
              "[&::-webkit-slider-thumb]:border-border",
              "[&::-webkit-slider-thumb]:shadow-md",
              "[&::-webkit-slider-thumb]:cursor-pointer",
            ])}
          />
        </div>
      </div>

      {/* Hue Control */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-text-label">Hue</label>
          <span className="text-xs text-text-label font-mono">
            {localValue.h.toFixed(0)}°
          </span>
        </div>
        <div className="relative">
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            value={localValue.h}
            onChange={(e) => handleChange({ h: parseFloat(e.target.value) })}
            style={{
              background: `linear-gradient(to right, 
                oklch(0.7 0.15 0), 
                oklch(0.7 0.15 60), 
                oklch(0.7 0.15 120), 
                oklch(0.7 0.15 180), 
                oklch(0.7 0.15 240), 
                oklch(0.7 0.15 300), 
                oklch(0.7 0.15 360))`
            }}
            className={cn([
              "w-full",
              "h-2",
              "rounded-lg",
              "appearance-none",
              "cursor-pointer",
              "[&::-webkit-slider-thumb]:appearance-none",
              "[&::-webkit-slider-thumb]:w-4",
              "[&::-webkit-slider-thumb]:h-4",
              "[&::-webkit-slider-thumb]:rounded-full",
              "[&::-webkit-slider-thumb]:bg-white",
              "[&::-webkit-slider-thumb]:border-2",
              "[&::-webkit-slider-thumb]:border-border",
              "[&::-webkit-slider-thumb]:shadow-md",
              "[&::-webkit-slider-thumb]:cursor-pointer",
            ])}
          />
        </div>
      </div>

      {/* Manual Input */}
      <div className="grid grid-cols-3 gap-2">
        <div className="space-y-1">
          <label className="text-xs text-text-label">L</label>
          <input
            type="number"
            min="0"
            max="1"
            step="0.01"
            value={localValue.l.toFixed(2)}
            onChange={(e) =>
              handleChange({ l: parseFloat(e.target.value) || 0 })
            }
            className={cn([
              "w-full",
              "px-2",
              "py-1",
              "text-xs",
              "bg-background",
              "border",
              "border-border",
              "rounded",
              "text-text",
              "font-mono",
            ])}
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-text-label">C</label>
          <input
            type="number"
            min="0"
            max="0.4"
            step="0.001"
            value={localValue.c.toFixed(3)}
            onChange={(e) =>
              handleChange({ c: parseFloat(e.target.value) || 0 })
            }
            className={cn([
              "w-full",
              "px-2",
              "py-1",
              "text-xs",
              "bg-background",
              "border",
              "border-border",
              "rounded",
              "text-text",
              "font-mono",
            ])}
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-text-label">H</label>
          <input
            type="number"
            min="0"
            max="360"
            step="1"
            value={localValue.h.toFixed(0)}
            onChange={(e) =>
              handleChange({ h: parseFloat(e.target.value) || 0 })
            }
            className={cn([
              "w-full",
              "px-2",
              "py-1",
              "text-xs",
              "bg-background",
              "border",
              "border-border",
              "rounded",
              "text-text",
              "font-mono",
            ])}
          />
        </div>
      </div>
    </div>
  )
}
