import { ContentContainer } from "@/components/Layout/ContentContainer"
import { LayoutContainer } from "@/components/Layout/LayoutContainer"
import { GradientSection } from "./_components/GradientSection"
import chroma from "chroma-js"
import { DEFAULT_COLOR } from "@/components/constants"
import { generateColorValues } from "@/components/Colors/generateColorValues"
import { Suspense } from "react"
import { Metadata } from "next"
import "./grid.css"

export const metadata: Metadata = {
  title: "Gradient Generator | Create Custom CSS & Tailwind Gradients",
  description: `Design and customize stunning gradients with our Gradient Generator. Easily adjust colors, set angles, and add midpoints to create dynamic CSS and Tailwind gradients for your web projects. Get instant code and Tailwind class generation to enhance your designs seamlessly.`,
  alternates: {
    canonical: "/css-tools",
  },
}

interface Props {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function CssToolsPage({ searchParams }: Props) {
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
          <div className="css-tools-grid">
            <div style={{ gridArea: "headerTitle" }}>
              <ContentContainer className="w-full h-full">
                <h1 className="max-w-[300px]">
                  <span className="font-black">Create</span> your styles{" "}
                  <span className="font-black">Easily</span>
                </h1>
              </ContentContainer>
            </div>

            <div style={{ gridArea: "headerText" }}>
              <ContentContainer className="flex w-full h-full">
                <div className="self-end">
                  <p className="font-semibold">
                    Use our <strong>Gradient Generator</strong> to create
                    beautiful custom gradients for your projects.{" "}
                    <strong>Adjust colors, angles, and add midpoints</strong> to
                    see <strong>real-time previews</strong> and instantly
                    generate the CSS code you need. Perfect for developers and
                    designers who want{" "}
                    <strong>fast, flexible gradient creation</strong>.
                  </p>
                </div>
              </ContentContainer>
            </div>

            <Suspense fallback={null}>
              <GradientSection />
            </Suspense>
          </div>
          <div className="h-40"></div>
        </LayoutContainer>
      </div>
    </>
  )
}
