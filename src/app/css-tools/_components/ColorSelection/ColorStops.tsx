"use client"

import { useState, useRef, useEffect } from "react"
import { ColorStop } from "./useColorStop"
import { IColor } from "react-color-palette"
import { cn } from "@/utils/cn"
import "./styles.css"
import { TRIANGLE_LABEL_MARING } from "../constants"

interface ColorStopsProps {
  colorStops: Map<string, ColorStop>
  colorStopsList: ColorStop[]
  updatePosition: (id: string, left: number, percentage: number) => void
  gradientCSS: string
  gradientCSSnoRotation: string
  enableSplitGradient: boolean
  addNewColorStop: ({
    id,
    color,
    left,
    percentage,
  }: {
    id: string
    color: IColor
    left: number
    percentage: number
  }) => void
  onSelectStop: (id: string, color: IColor) => void
}

export function ColorStops({
  colorStops,
  colorStopsList,
  updatePosition,
  gradientCSS,
  gradientCSSnoRotation,
  enableSplitGradient,
  addNewColorStop,
  onSelectStop,
}: ColorStopsProps) {
  const parentRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef<{
    id: string
    startX: number
    initialLeft: number
  } | null>(null)

  const [windowWidth, setWindowWidth] = useState<number>(0)
  const [parentWidth, setParentWidth] = useState<number>(0)

  // Calculate percentage position
  const getPercentage = (left: number) => {
    if (parentWidth === 0) return 0
    const percentage = (left / parentWidth) * 100
    return Math.round(percentage)
  }

  const getPixelValueFromPercentage = (percentag: number) => {
    if (parentWidth === 0) return 0
    const pixelValue = parentWidth * (percentag / 100)
    return pixelValue
  }

  // Ref for unique ID generation
  const nextId = useRef<number>(colorStops.size + 1)

  // Refs to track dragging and click suppression
  const hasDraggedRef = useRef<boolean>(false)
  const ignoreClickRef = useRef<boolean>(false)
  const dragThreshold = 5 // pixels

  // Update parent width on mount and resize
  useEffect(() => {
    const updateParentWidth = () => {
      if (parentRef.current) {
        setParentWidth(parentRef.current.clientWidth)
      }
    }

    updateParentWidth()

    window.addEventListener("resize", updateParentWidth)
    return () => {
      window.removeEventListener("resize", updateParentWidth)
    }
  }, [])

  // Update window width on mount and resize
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window?.innerWidth) {
        setWindowWidth(window.innerWidth)
      }
    }

    updateWindowWidth()

    window.addEventListener("resize", updateWindowWidth)
    return () => {
      window.removeEventListener("resize", updateWindowWidth)
    }
  }, [])

  // Handler for movement (mouse or touch)
  const handleMove = (clientX: number) => {
    if (!draggingRef.current || !parentRef.current) return

    const { id, startX, initialLeft } = draggingRef.current
    const deltaX = clientX - startX
    let newLeft = initialLeft + deltaX

    // Check if movement exceeds threshold to consider it a drag
    if (Math.abs(deltaX) > dragThreshold) {
      hasDraggedRef.current = true
    }

    // Get parent width
    const currentParentWidth = parentRef.current.clientWidth
    setParentWidth(currentParentWidth) // Update state

    // Constrain 'left' between 0 and parentWidth
    newLeft = Math.max(0, Math.min(newLeft, currentParentWidth))

    // Allow smooth movement
    newLeft = Math.round(newLeft)

    updatePosition(id, newLeft, getPercentage(newLeft))
  }

  // Handler for mouse move
  const handleMouseMove = (e: MouseEvent) => {
    handleMove(e.clientX)
  }

  // Handler for touch move
  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault() // Prevent scrolling during drag
    handleMove(e.touches[0].clientX)
  }

  // Handler for mouse up / touch end
  const handleEnd = () => {
    draggingRef.current = null
    if (hasDraggedRef.current) {
      ignoreClickRef.current = true
      // Reset the ignore flag after the current event loop
      setTimeout(() => {
        ignoreClickRef.current = false
      }, 0)
    }
    hasDraggedRef.current = false
    document.removeEventListener("mousemove", handleMouseMove)
    document.removeEventListener("mouseup", handleEnd)
    document.removeEventListener("touchmove", handleTouchMove)
    document.removeEventListener("touchend", handleEnd)
  }

  // Handler for mouse down / touch start on a draggable triangle
  const handleStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    id: string
  ) => {
    e.preventDefault()
    // Select Stop ID when starting to drag
    const color = colorStops.get(id)
    onSelectStop(id, color!.color)
    // Removed e.stopPropagation() to allow parent onClick to handle only direct clicks
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX

    const percentage = colorStops.get(id)?.percentage || 0
    const initialLeft = getPixelValueFromPercentage(percentage)

    draggingRef.current = {
      id,
      startX: clientX,
      initialLeft,
    }
    hasDraggedRef.current = false // Reset drag flag
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleEnd)
    document.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    })
    document.addEventListener("touchend", handleEnd)
  }

  // Handler for keyboard events
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    id: string
  ) => {
    const step = 1 // pixels to move per key press

    const percentage = colorStops.get(id)?.percentage || 0
    let newLeft = getPixelValueFromPercentage(percentage)

    // let newLeft = colorStops.get(id)?.left || 0

    if (e.key === "ArrowLeft") {
      newLeft = Math.max(0, newLeft - step)

      updatePosition(id, newLeft, getPercentage(newLeft))
      e.preventDefault()
    } else if (e.key === "ArrowRight") {
      const parentWidthCurrent = parentRef.current?.clientWidth || 0
      newLeft = Math.min(parentWidthCurrent, newLeft + step)

      updatePosition(id, newLeft, getPercentage(newLeft))
      e.preventDefault()
    }
  }

  // Handler for parent div click to add new triangle
  const handleParentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only proceed if the click is directly on the parent div
    if (e.currentTarget !== e.target) return

    // Check if a drag has occurred and suppress the click
    if (ignoreClickRef.current) {
      return
    }

    if (!parentRef.current) return

    const rect = parentRef.current.getBoundingClientRect()
    const clickX = e.clientX - rect.left

    // Constrain clickX within 0 and parentWidth
    const clampedX = Math.max(0, Math.min(clickX, parentWidth))

    const percentage = getPercentage(clampedX)

    let index = colorStopsList.findIndex(
      (stop) => stop.percentage >= percentage
    )

    if (index < 0) {
      index = 0
    }

    if (index > 0) {
      index--
    }

    const color = colorStopsList[index].color

    const newColorStop = {
      id: `stop${nextId.current}`,
      left: clampedX,
      percentage,
      color: color,
    }
    nextId.current += 1

    addNewColorStop(newColorStop)
  }

  return (
    <div className="w-full mb-8">
      <div
        ref={parentRef}
        onClick={enableSplitGradient ? undefined : handleParentClick}
        className={cn("w-full h-32 min-[600px]:h-64 mt-2 rounded-t-md", {
          "cursor-copy": !enableSplitGradient,
          "rounded-b-md": enableSplitGradient,
        })}
        style={{ background: gradientCSS }}
      />
      <div
        ref={parentRef}
        onClick={enableSplitGradient ? undefined : handleParentClick}
        className={cn("w-full h-4", {
          "cursor-copy": !enableSplitGradient,
        })}
        style={{
          background: enableSplitGradient ? "transparent" : gradientCSS,
        }}
      />
      <div
        className={cn(
          "relative w-full h-16 cursor-copy overflow-hidden mb-2 rounded-b-md",
          {
            "rounded-t-md": enableSplitGradient,
          }
        )}
        ref={parentRef}
        onClick={handleParentClick}
        style={{ background: gradientCSSnoRotation }}
      >
        {colorStopsList.map((stop) => {
          const left = getPixelValueFromPercentage(stop.percentage)
          return (
            <div
              key={stop.id}
              className="draggable-triangle cursor-pointer bg-slate-100 dark:bg-slate-950 active:bg-slate-300 active:dark:bg-slate-700"
              style={{
                left: `${left - stop.width / 2}px`,
                width: `${stop.width}px`,
                height: `${stop.height}px`,
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
              onMouseDown={(e) => handleStart(e, stop.id)}
              onTouchStart={(e) => handleStart(e, stop.id)}
              onKeyDown={(e) => handleKeyDown(e, stop.id)}
              role="button"
              aria-label={`Drag me ${stop.color.hex}`}
              tabIndex={0}
              title={`Drag me ${stop.color.hex}`}
            >
              <span className="sr-only">{`Drag me ${stop.color.hex}`}</span>
            </div>
          )
        })}
      </div>
      <div className="labels-container">
        {colorStopsList.map((stop) => {
          let left = getPixelValueFromPercentage(stop.percentage)

          if (left < TRIANGLE_LABEL_MARING && windowWidth < 1280) {
            const div = windowWidth - parentWidth
            left = TRIANGLE_LABEL_MARING - div / 2
          }
          if (
            left > parentWidth - TRIANGLE_LABEL_MARING &&
            windowWidth < 1280
          ) {
            const div = windowWidth - parentWidth
            left = parentWidth - (TRIANGLE_LABEL_MARING - div / 2) - 8
          }
          return (
            <div
              key={`label-${stop.id}`}
              className={cn(
                "label absolute top-0 rounded-md py-1 px-3",
                "bg-slate-100 dark:bg-slate-950 font-semibold"
              )}
              style={{
                left: `${left}px`,
                transform: "translateX(-50%)",
                border: `4px solid ${stop.color.hex}`,
              }}
            >
              {`${stop.percentage}%`}
            </div>
          )
        })}
      </div>
    </div>
  )
}
