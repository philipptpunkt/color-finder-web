"use client"

import { useSearchParams } from "@/utils/useSearchParams"
import { useMemo } from "react"
import Link from "next/link"

export function CssToolsClient() {
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
        pathname: "/css-tools",
        query: search,
      }}
    >
      CSS Tools
    </Link>
  )
}
