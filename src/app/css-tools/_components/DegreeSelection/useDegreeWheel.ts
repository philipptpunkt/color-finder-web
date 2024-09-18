"use client"

import { useState } from "react"

export const useDegreeWheel = () => {
  const [inputDegree, setInputDegree] = useState<number>(90)
  const [currentDegree, setCurrentDegree] = useState<number>(90)

  const handleDegreeChange = (degree: number) => {
    setCurrentDegree(degree)
    setInputDegree(degree)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    if (isNaN(value)) {
      setInputDegree(0)
      setCurrentDegree(0)
    } else {
      setInputDegree(value)
      const normalizedDegree = value % 360
      setCurrentDegree(normalizedDegree)
    }
  }

  return {
    value: inputDegree,
    onChange: handleInputChange,
    currentDegree,
    onRotation: handleDegreeChange,
  }
}
