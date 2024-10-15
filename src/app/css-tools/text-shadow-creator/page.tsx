import { ContentContainer } from "@/components/Layout/ContentContainer"
import { LayoutContainer } from "@/components/Layout/LayoutContainer"
import chroma from "chroma-js"
import { DEFAULT_COLOR } from "@/components/constants"
import { generateColorValues } from "@/components/Colors/generateColorValues"
import { Suspense } from "react"
import { Metadata } from "next"
import "./grid.css"
import { ShadowSection } from "./_components/ShadowSection"

export const metadata: Metadata = {
  title: "Text Shadow Creator | Create Custom CSS & Tailwind Text Shadows",
  description: `Quickly generate custom text-shadow effects with our Text-Shadow Creator. Adjust offsets, blur, and color to generate CSS and Tailwind text-shadow styles in real-time. Perfect for enhancing UI components with depth and visual appeal.`,
  alternates: {
    canonical: "/css-tools/text-shadow-creator",
  },
}

interface Props {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function TextShadowCreatorPage({ searchParams }: Props) {
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
          <div className="text-shadow-grid">
            <div style={{ gridArea: "headerTitle" }}>
              <ContentContainer className="w-full h-full">
                <h1 className="max-w-[300px]">
                  <span className="font-black">Text Shadow?</span> Easy!
                </h1>
              </ContentContainer>
            </div>

            <div style={{ gridArea: "headerText" }}>
              <ContentContainer className="flex w-full h-full">
                <div className="self-end">
                  <p className="font-semibold">
                    Use our <strong>Text-Shadow Creator</strong> to add depth
                    and flair to your typography. Whether you are aiming for{" "}
                    <strong>subtle elegance or bold, glowing effects</strong>,
                    this tool lets you experiment with{" "}
                    <strong>shadow offsets, blur radius, and color</strong> to
                    make your text pop.
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
