"use client"

import { useSearchParams } from "@/utils/useSearchParams"
import { useMemo } from "react"
import Link from "next/link"

export function ContastCheckClient() {
  const { searchParams } = useSearchParams()

  const search = useMemo(() => {
    const search: { [key: string]: string } = {}
    searchParams.forEach((value, key) => {
      search[key] = value
    })
    return search
  }, [searchParams])

  return (
    <Link
      href={{
        pathname: "/contrast-check",
        query: search,
      }}
    >
      Contrast Check
    </Link>
  )
}
