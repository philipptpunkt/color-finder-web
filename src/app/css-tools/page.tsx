import chroma from "chroma-js"
import { generateColorValues } from "@/components/Colors/generateColorValues"
import { DEFAULT_COLOR } from "@/components/constants"
import { LayoutContainer } from "@/components/Layout/LayoutContainer"
import { Link } from "@/components/Link/Link"
import { Card } from "@/components/ExampleSection/Examples/Card/Card"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "CSS Tools | A collection of helpful tools for CSS styling",
  description: `Explore our comprehensive collection of CSS tools designed to simplify and enhance your styling workflow. From gradient generators to color contrast checkers, find the right tools to streamline your CSS development and create visually stunning, accessible designs with ease.`,
  alternates: {
    canonical: "/css-tools",
  },
}

function LinkCard({
  headline,
  href,
  children,
}: {
  headline: string
  href: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="block max-w-[400px]">
      <Card horizontalPadding verticalPadding rounded="rounded-2xl">
        <h3 className="mb-4">{headline}</h3>
        {children}
      </Card>
    </Link>
  )
}

interface Props {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Home({ searchParams }: Props) {
  const hex = searchParams.hex

  let cssVariables = ""

  const hexValue =
    typeof hex === "string" && chroma.valid(hex) ? hex : DEFAULT_COLOR

  const colorValues = generateColorValues(hexValue)

  colorValues.forEach((color) => {
    const rgbColorValue = chroma(color.color).rgb().join(", ")
    cssVariables += `--custom-color-${color.position}: ${rgbColorValue}; `
  })

  return (
    <>
      <style>{`:root { ${cssVariables} }`}</style>
      <div className="header-space p-4">
        <LayoutContainer>
          <h1 className="py-4">CSS Tools</h1>

          <h2 className="py-4">Overview</h2>

          <div className="pt-4 pb-16">
            <LinkCard
              href="/css-tools/gradient-creator"
              headline="Gradient Creator"
            >
              <div className="rainbow-linear h-32 rounded-xl mb-4" />
              <p>
                The <strong>Gradient Creator</strong> is an interactive tool to
                generate gradients in various forms and colors. It automatically
                returns the required CSS code.
              </p>
            </LinkCard>
          </div>
        </LayoutContainer>
      </div>
    </>
  )
}
