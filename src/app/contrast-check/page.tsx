import { ContentContainer } from "@/components/Layout/ContentContainer"
import { LayoutContainer } from "@/components/Layout/LayoutContainer"
import { ColorSelection } from "./_components/ColorSelection"
import chroma from "chroma-js"
import { generateColorValues } from "@/components/Colors/generateColorValues"
import { DEFAULT_COLOR } from "@/components/constants"
import "./grid.css"
import { Article } from "./_components/Article"
import { CustomColorMatrix } from "./_components/ColorMatrix/CustomColorMatrix"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Color Contrast Checker | WCAG Accessibility Standards",
  description: `Easily check the color contrast between text and background using our WCAG 2.1 compliant contrast checker. Ensure your website meets W3C accessibility standards for color contrast ratio, ensuring readability for users with visual impairments. Evaluate your designs against the required contrast ratios for WCAG AA and WCAG AAA compliance to improve accessibility and create inclusive user interfaces. Perfect for developers and designers focusing on web accessibility.`,
  alternates: {
    canonical: "/contrast-check",
  },
}

interface Props {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function ContrastCheckPage({ searchParams }: Props) {
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
      <div className="header-space">
        <LayoutContainer>
          <div className="contrast-check-grid">
            <div style={{ gridArea: "headerTitle" }}>
              <ContentContainer className="w-full h-full">
                <h1 className="max-w-[300px]">
                  <span className="font-black">Check</span> your{" "}
                  <span className="font-black">Contrast</span>
                </h1>
              </ContentContainer>
            </div>
            <div style={{ gridArea: "headerText" }}>
              <ContentContainer className="flex w-full h-full">
                <div className="self-end">
                  <p className="font-semibold">
                    Ensure your website is{" "}
                    <strong>accessible and readable</strong> with our color
                    contrast checker. This tool helps you verify if your{" "}
                    <strong>
                      colors meet the WCAG 2.1 standards for contrast
                    </strong>
                    , ensuring compliance for normal text, large text, and user
                    interfaces. Enter your colors and instantly see if they pass{" "}
                    <strong>
                      accessibility guidelines for better, more inclusive
                      design.
                    </strong>
                  </p>
                </div>
              </ContentContainer>
            </div>
            <ColorSelection initialColorValue={hexValue} />
          </div>
          <CustomColorMatrix colorValues={colorValues} />
          <Article />
        </LayoutContainer>
      </div>
    </>
  )
}
