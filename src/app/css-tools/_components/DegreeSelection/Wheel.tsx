"use client"

import { Spinner } from "@/design-system/Loading/Spinner"
import { useTheme } from "next-themes"
import React, { useRef, useState, useEffect } from "react"

interface ColorGradientWheelProps {
  size?: number
  degree: number
  onDegreeChange?: (degree: number) => void
  disabled: boolean
}

export function Wheel({
  size = 200,
  degree,
  onDegreeChange,
  disabled,
}: ColorGradientWheelProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const wheelRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef<boolean>(false)
  const startAngle = useRef<number>(0)
  const initialDegree = useRef<number>(0)

  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  const boxShadowNeumorphismLight =
    "12px 12px 16px 0 rgba(0, 0, 0, 0.15), -8px -8px 12px 0 rgba(255, 255, 255, 0.9)"
  const boxShadowNeumorphismDark =
    "12px 12px 16px 0 rgba(0, 0, 0, 1), -8px -8px 12px 0 rgba(255, 255, 255, 0.3)"

  const boxShadow = isDarkMode
    ? boxShadowNeumorphismDark
    : boxShadowNeumorphismLight

  const strokeEmpty = isDarkMode ? "#334155" : "#cbd5e1"
  const strokeFilled = isDarkMode ? "#94a3b8" : "#64748b"

  useEffect(() => {
    const wheel = wheelRef.current
    if (!wheel) return

    const getAngle = (clientX: number, clientY: number) => {
      const rect = wheel.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const radians = Math.atan2(clientY - centerY, clientX - centerX)
      let deg = (radians * (180 / Math.PI) + 90) % 360
      if (deg < 0) deg += 360
      return deg
    }

    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault()
      isDragging.current = true
      initialDegree.current = degree
      startAngle.current = getAngle(e.clientX, e.clientY)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      const currentAngle = getAngle(e.clientX, e.clientY)
      let delta = currentAngle - startAngle.current
      if (delta < -180) delta += 360
      if (delta > 180) delta -= 360
      let newDegree = (initialDegree.current + delta) % 360
      if (newDegree < 0) newDegree += 360
      onDegreeChange && onDegreeChange(Math.round(newDegree))
    }

    const handleMouseUp = () => {
      isDragging.current = false
    }

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault()
      isDragging.current = true
      const touch = e.touches[0]
      initialDegree.current = degree
      startAngle.current = getAngle(touch.clientX, touch.clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return
      const touch = e.touches[0]
      const currentAngle = getAngle(touch.clientX, touch.clientY)
      let delta = currentAngle - startAngle.current
      if (delta < -180) delta += 360
      if (delta > 180) delta -= 360
      let newDegree = (initialDegree.current + delta) % 360
      if (newDegree < 0) newDegree += 360
      onDegreeChange && onDegreeChange(Math.round(newDegree))
    }

    const handleTouchEnd = () => {
      isDragging.current = false
    }

    if (!disabled) {
      wheel.addEventListener("mousedown", handleMouseDown)
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)

      wheel.addEventListener("touchstart", handleTouchStart, { passive: false })
      window.addEventListener("touchmove", handleTouchMove, { passive: false })
      window.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      wheel.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)

      wheel.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [degree, onDegreeChange])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center w-[200px] h-[200px] mr-1">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="flex items-center m-8 bg-custom-2000">
      <div
        ref={wheelRef}
        className="relative rounded-full cursor-pointer border border-slate-50 dark:border-slate-950"
        style={{
          width: `${size - 60}px`,
          height: `${size - 60}px`,
          boxShadow: disabled ? undefined : boxShadow,
        }}
      >
        {/* Degree Ring */}
        <svg
          className="absolute inset-0 rounded-full -top-[30px] -left-[30px]"
          width={size}
          height={size}
          style={{
            transform: "rotate(-90deg)",
          }}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2 - 5}
            stroke={strokeEmpty}
            strokeWidth="1"
            fill="none"
          />
          {!disabled ? (
            <circle
              cx={size / 2}
              cy={size / 2}
              r={size / 2 - 5}
              stroke={strokeFilled}
              strokeWidth="1"
              fill="none"
              strokeDasharray={`${
                Math.PI * 2 * (size / 2 - 5) * (degree / 360)
              } ${Math.PI * 2 * (size / 2 - 5) * (1 - degree / 360)}`}
              strokeLinecap="round"
            />
          ) : null}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-slate-700 dark:text-slate-400 font-extralight text-2xl">
            {degree}°
          </span>
        </div>
      </div>
    </div>
  )
}
