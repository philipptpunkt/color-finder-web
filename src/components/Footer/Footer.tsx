import Link from "next/link"
import { LayoutContainer } from "../Layout/LayoutContainer"
import { cn } from "@/utils/cn"

function Container({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "text-center rounded-md bg-slate-200 dark:bg-slate-900 py-4 sm:py-8 px-16 mb-[3px] sm:mb-0 sm:mr-[3px]",
        className
      )}
    >
      {children}
    </div>
  )
}

export function Footer() {
  return (
    <LayoutContainer>
      <div className="flex flex-col sm:flex-row w-full font-semibold">
        <Container className="hidden sm:block w-full" />
        <Container>
          <Link href="/">Home</Link>
        </Container>
        <Container>
          <Link href="/legal-notice">Legal&nbsp;Notice</Link>
        </Container>
        <Container className="hidden sm:block w-full" />
      </div>
    </LayoutContainer>
  )
}
