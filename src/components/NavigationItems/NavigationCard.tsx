import { Link } from "@/components/Link/Link"
import { Card } from "@/components/ExampleSection/Examples/Card/Card"
import { cn } from "@/utils/cn"

export function NavigationCard({
  headline,
  href,
  children,
  reducedSize = false,
  fillWidth = false,
}: {
  headline: string
  href: string
  children: React.ReactNode
  reducedSize?: boolean
  fillWidth?: boolean
}) {
  return (
    <Link
      href={href}
      className={cn("block w-full", "hover:scale-[102%]", {
        "max-w-[400px]": !fillWidth,
        "max-w-[250px]": reducedSize && !fillWidth,
      })}
    >
      <Card fill horizontalPadding verticalPadding rounded="rounded-2xl">
        <h3
          className={cn("mb-4", {
            "text-lg mb-2": reducedSize,
          })}
        >
          {headline}
        </h3>
        {children}
      </Card>
    </Link>
  )
}
