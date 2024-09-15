"use client"

import { useSearchParams } from "@/utils/useSearchParams"
import { useMemo } from "react"
import Link from "next/link"

export function HomeLinkClient() {
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
        pathname: "/",
        query: search,
      }}
    >
      <span className="ml-2 font-bold">Color</span>
      <span>finder</span>
    </Link>
  )
}
