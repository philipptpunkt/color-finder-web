import { ContentContainer } from "@/components/Layout/ContentContainer"
import { LayoutContainer } from "@/components/Layout/LayoutContainer"
import { GradientSection } from "./_components/GradientSection"
import { Suspense } from "react"
import { Metadata } from "next"
import "./grid.css"
import { WriteCssVariables } from "@/components/WriteCssVariables/WriteCssVariables"

export const metadata: Metadata = {
  title: "Gradient Creator | Create Custom CSS & Tailwind Gradients",
  description: `Design and customize stunning gradients with our Gradient Generator. Easily adjust colors, set angles, and add midpoints to create dynamic CSS and Tailwind gradients for your web projects. Get instant code and Tailwind class generation to enhance your designs seamlessly.`,
  alternates: {
    canonical: "/css-tools/gradient-creator",
  },
}

interface Props {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function GradientCreatorPage({ searchParams }: Props) {
  return (
    <>
      <WriteCssVariables searchParams={searchParams} />
      <div className="header-space">
        <LayoutContainer>
          <div className="css-tools-grid">
            <div style={{ gridArea: "headerTitle" }}>
              <ContentContainer className="w-full h-full">
                <h1 className="max-w-[300px]">
                  <span className="font-black">Create</span> gradients{" "}
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
