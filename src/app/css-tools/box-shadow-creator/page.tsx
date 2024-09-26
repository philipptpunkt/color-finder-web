import { ContentContainer } from "@/components/Layout/ContentContainer"
import { LayoutContainer } from "@/components/Layout/LayoutContainer"
import chroma from "chroma-js"
import { DEFAULT_COLOR } from "@/components/constants"
import { generateColorValues } from "@/components/Colors/generateColorValues"
import { Suspense } from "react"
import { Metadata } from "next"
import { ShadowSection } from "./_components/ShadowSection"
import "./grid.css"

export const metadata: Metadata = {
  title: "Box Shadow Creator | Create Custom CSS & Tailwind Box Shadows",
  description: `Design custom box-shadow effects quickly with our Box-Shadow Creator. Adjust offsets, blur, spread, and color to generate CSS and Tailwind box-shadow styles in real-time. Perfect for enhancing UI components with depth and visual appeal.`,
  alternates: {
    canonical: "/css-tools/box-shadow-creator",
  },
}

interface Props {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function BoxShadowCreatorPage({ searchParams }: Props) {
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
          <div className="box-shadow-grid">
            <div style={{ gridArea: "headerTitle" }}>
              <ContentContainer className="w-full h-full">
                <h1 className="max-w-[300px]">
                  Need a <span className="font-black">Box Shadow?</span>
                </h1>
              </ContentContainer>
            </div>

            <div style={{ gridArea: "headerText" }}>
              <ContentContainer className="flex w-full h-full">
                <div className="self-end">
                  <p className="font-semibold">
                    <strong>Create custom box-shadow effects</strong>{" "}
                    effortlessly with our Box-Shadow Creator. Adjust{" "}
                    <strong>
                      offsets, blur, spread, and shadow color in real-time
                    </strong>
                    , and <strong>automatically generate the CSS</strong> for
                    your web elements. Ideal for developers and designers
                    looking to add depth and polish to their UI components.
                  </p>
                </div>
              </ContentContainer>
            </div>

            <Suspense fallback={null}>
              <ShadowSection />
            </Suspense>
          </div>
          <div className="h-40"></div>
        </LayoutContainer>
      </div>
    </>
  )
}
