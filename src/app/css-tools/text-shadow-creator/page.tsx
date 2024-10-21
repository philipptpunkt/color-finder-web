import { ContentContainer } from "@/components/Layout/ContentContainer"
import { LayoutContainer } from "@/components/Layout/LayoutContainer"
import { Suspense } from "react"
import { Metadata } from "next"
import "./grid.css"
import { ShadowSection } from "./_components/ShadowSection"
import { WriteCssVariables } from "@/components/WriteCssVariables/WriteCssVariables"

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
  return (
    <>
      <WriteCssVariables searchParams={searchParams} />
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
