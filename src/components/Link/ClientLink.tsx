"use client"

import NextLink from "next/link"
import { useSearchParams } from "@/utils/useSearchParams"
import { useMemo } from "react"
import { LinkProps } from "./Link"

export function ClientLink({ href, className, ...rest }: LinkProps) {
  const { searchParams } = useSearchParams()

  const search = useMemo(() => {
    const search: { [key: string]: string } = {}
    searchParams.forEach((value, key) => {
      search[key] = value
    })
    return search
  }, [searchParams])

  if (typeof href === "string") {
    return (
      <NextLink
        href={{
          pathname: href,
          query: search,
        }}
        className={className}
        {...rest}
      />
    )
  }

  return <NextLink href={href} className={className} {...rest} />
}
