"use client"

import React, { useState, useEffect, useLayoutEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/utils/cn"

interface FlippingCardProps {
  frontColors: string[]
  backColors: string[]
  initialColor: string
  delay: number
}

export const FlippingCard = ({
  frontColors,
  backColors,
  initialColor,
  delay,
}: FlippingCardProps) => {
  const [animationHasStarted, setAnimationHasStarted] = useState(false)
  const [hasFlippedOnce, setHasFlippedOnce] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const [colorIndexFront, setColorIndexFront] = useState(0)
  const [colorIndexBack, setColorIndexBack] = useState(0)

  useLayoutEffect(() => {
    if (!animationHasStarted) return
    if (isFlipped) {
      setColorIndexBack((prev) => (prev + 1) % backColors.length)
    } else {
      setHasFlippedOnce(true)
      setColorIndexFront((prev) => (prev + 1) % frontColors.length)
    }
  }, [isFlipped, animationHasStarted])

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationHasStarted(true)
      setIsFlipped((prev) => !prev)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="card-container"
      style={{
        width: "100%",
        height: "280px",
        perspective: "1000px",
        filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))",
      }}
    >
      <motion.div
        className={cn(["relative", "w-full", "h-full"])}
        animate={{ rotateY: isFlipped ? -180 : 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: delay }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className={cn([
            "absolute",
            "w-full",
            "h-full",
            "rounded-xl",
            "overflow-hidden",
          ])}
          style={{
            backfaceVisibility: "hidden",
            background:
              "linear-gradient(0deg, rgba(239,241,243,0.1) 0%,rgba(48,48,48,0.2) 100%)",
            // background:
            //   "linear-gradient(0deg, rgba(239,241,243,0.7) 3%,rgba(48,48,48,0.5) 60%)",
            // padding: "1px",
            // overflow: "hidden",
          }}
        >
          <div
            className={cn([
              "w-full",
              "h-full",
              "p-2",
              "flex justify-end items-end",
            ])}
            style={{
              width: "100%",
              height: "100%",
              background:
                hasFlippedOnce && animationHasStarted
                  ? frontColors[colorIndexFront]
                  : initialColor,
            }}
          >
            <AnimatePresence>
              {!animationHasStarted && (
                <motion.p
                  className={cn([
                    "bg-black",
                    "text-white text-xs font-mono text-right",
                    "px-2 py-1",
                  ])}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  #hex
                  <br />
                  #hsl
                  <br />
                  #oklch
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          className={cn([
            "absolute",
            "w-full",
            "h-full",
            "rounded-xl",
            "overflow-hidden",
          ])}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",

            // background:
            //   "linear-gradient(0deg, rgba(239,241,243,0.7) 3%,rgba(48,48,48,0.5) 60%)",
            // padding: "1px",
            // overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: backColors[colorIndexBack],
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
