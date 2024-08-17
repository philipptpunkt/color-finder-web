"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { IconButton, IconName } from "../Icon"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDarkMode = theme === "dark"

  return (
    <div className="fixed top-3 right-6 z-20">
      <IconButton
        iconName={isDarkMode ? IconName.icSun : IconName.icMoon}
        onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      />
    </div>
  )
}
