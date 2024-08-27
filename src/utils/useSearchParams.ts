"use client"

import { useSearchParams as useSearchParamsNext } from "next/navigation"
import { useCallback } from "react"

export function useSearchParams() {
  const searchParams = useSearchParamsNext()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  return {
    searchParams,
    createQueryString,
  }
}
