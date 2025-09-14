"use client"

import chroma from "chroma-js"
import { useCallback, useEffect, useState } from "react"

export function useColorInput({
  initialColorValue,
}: {
  initialColorValue: string | null
}) {
  const [inputValue, setInputValue] = useState(initialColorValue)

  const [colorValue, setColorValue] = useState<string | null>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    const cleanValue = value.startsWith("#")
      ? value
      : value.length > 0
      ? `#${value}`
      : value

    setInputValue(cleanValue)
  }

  const applyColor = useCallback((value: string) => {
    setColorValue(value)
    setInputValue(value)
  }, [])

  useEffect(() => {
    if (inputValue && chroma.valid(inputValue)) {
      setColorValue(inputValue)
    }
  }, [inputValue])

  return {
    input: inputValue,
    onChange: handleInputChange,
    colorValue,
    applyColor,
  }
}
