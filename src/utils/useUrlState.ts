"use client"

import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useCallback } from "react"

/**
 * A hook that provides a useState-like API for URL parameters
 * @param key - The URL parameter key
 * @param defaultValue - Default value if parameter doesn't exist
 * @returns [value, setValue] tuple similar to useState
 */
export function useUrlState<T extends string>(
  key: string,
  defaultValue?: T
): [T | undefined, (value: T | undefined) => void] {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  // Get current value from URL
  const value = (searchParams.get(key) as T) || defaultValue

  // Set value function that preserves other URL params
  const setValue = useCallback(
    (newValue: T | undefined) => {
      const params = new URLSearchParams(searchParams.toString())

      if (newValue === undefined || newValue === null || newValue === "") {
        // Remove parameter if value is undefined/null/empty
        params.delete(key)
      } else {
        // Set the new value
        params.set(key, newValue)
      }

      // Navigate to new URL with updated params
      const newUrl = params.toString()
        ? `${pathname}?${params.toString()}`
        : pathname
      router.replace(newUrl)
    },
    [key, searchParams, router, pathname]
  )

  return [value, setValue]
}
