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
    <IconButton
      iconName={isDarkMode ? IconName.icSun : IconName.icMoon}
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      backgroundColor="bg-slate-900 dark:bg-slate-800 hover:bg-slate-700 hover:dark:bg-slate-700"
      className="text-text-inverse-light"
    />
  )
}
