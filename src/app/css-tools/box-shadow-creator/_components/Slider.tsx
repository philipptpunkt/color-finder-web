"use client"

import { cn } from "@/utils/cn"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Skeleton from "react-loading-skeleton"
import "./slider.css"
import "react-loading-skeleton/dist/skeleton.css"

interface SliderProps {
  label: string
  min: number
  max: number
  step?: number
  value: number
  onChange: (value: number) => void
}

export function Slider({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
}: SliderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value))
  }

  const getBackgroundSize = () => {
    const percentage = ((value - min) / (max - min)) * 100
    const zeroPercent = ((0 - min) / (max - min)) * 100

    if (value >= 0) {
      if (isDarkMode) {
        return `linear-gradient(to right, #1e293b ${zeroPercent}%, #475569 ${zeroPercent}%, #475569 ${percentage}%, #1e293b ${percentage}%)`
      }
      return `linear-gradient(to right, #f8fafc ${zeroPercent}%, #e2e8f0 ${zeroPercent}%, #e2e8f0 ${percentage}%, #f8fafc ${percentage}%)`
    }

    if (isDarkMode) {
      return `linear-gradient(to right, #1e293b ${percentage}%, #020617 ${percentage}%, #020617 ${zeroPercent}%, #1e293b ${zeroPercent}%)`
    }

    return `linear-gradient(to right, #f8fafc ${percentage}%, #64748b ${percentage}%, #64748b ${zeroPercent}%, #f8fafc ${zeroPercent}%)`
  }

  return (
    <div>
      <div className="flex justify-between font-semibold mb-1">
        <p>{label}</p>
        <p>{value}</p>
      </div>
      {!mounted ? (
        <Skeleton className="h-[24px] my-[5px]" borderRadius="8px" />
      ) : (
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className={cn(
            "slider w-full appearance-none",
            "border-2 border-slate-400 hover:border-border-light-hover dark:border-border-dark hover:dark:border-border-dark-hover",
            "focus:outline-none focus:border-custom-500 focus:dark:border-custom-500",
            "rounded-lg"
          )}
          style={{ background: getBackgroundSize() }}
        />
      )}
    </div>
  )
}
