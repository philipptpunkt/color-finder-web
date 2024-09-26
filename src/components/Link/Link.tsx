import NextLink, { LinkProps as NextLinkProps } from "next/link"
import { Suspense } from "react"
import { ClientLink } from "./ClientLink"

export interface LinkProps extends NextLinkProps {
  children?: React.ReactNode
  className?: string
}

export function Link(props: LinkProps) {
  return (
    <Suspense fallback={<NextLink {...props} />}>
      <ClientLink {...props} />
    </Suspense>
  )
}
