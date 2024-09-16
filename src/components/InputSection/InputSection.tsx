"use client"

import chroma from "chroma-js"
import { usePathname, useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { ColorPicker } from "../ColorPicker/ColorPicker"
import { useSearchParams } from "@/utils/useSearchParams"
import { Input } from "@/design-system/Input/Input"

export function ColorInputSection() {
  const router = useRouter()
  const pathname = usePathname()
  const { searchParams, createQueryString } = useSearchParams()

  const hexValueFromQuery = searchParams.get("hex")

  const [input, setInput] = useState(
    typeof hexValueFromQuery === "string" && chroma.valid(hexValueFromQuery)
      ? hexValueFromQuery
      : ""
  )

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    const test = value.startsWith("#")
      ? value
      : value.length > 0
      ? `#${value}`
      : value

    setInput(test)
  }

  useEffect(() => {
    if (
      input !== hexValueFromQuery &&
      hexValueFromQuery &&
      chroma.valid(hexValueFromQuery)
    ) {
      setInput(hexValueFromQuery)
    }
  }, [hexValueFromQuery])

  useEffect(() => {
    if (chroma.valid(input)) {
      router.push(pathname + "?" + createQueryString("hex", input), {
        scroll: false,
      })
    }
  }, [createQueryString, pathname, router, input])

  const applyColor = useCallback(
    (value: string) => {
      router.push(pathname + "?" + createQueryString("hex", value), {
        scroll: false,
      })
    },
    [createQueryString, pathname, router]
  )

  return (
    <div className="flex justify-center w-full mb-8">
      <div className="flex justify-center w-full max-w-[1200px] p-4 rounded-md bg-slate-200 dark:bg-slate-900 mt-[3px]">
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a hex color"
          rounded
        />
        <div className="w-2" />
        <ColorPicker
          applyColor={applyColor}
          initialColorValue={hexValueFromQuery}
        />
      </div>
    </div>
  )
}
