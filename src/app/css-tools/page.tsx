import { LayoutContainer } from "@/components/Layout/LayoutContainer"
import { Metadata } from "next"
import {
  NavigationCardBoxShadow,
  NavigationCardGradient,
} from "@/components/NavigationItems"
import { NavigationCardTextShadow } from "@/components/NavigationItems/NavigationCardTextShadow"
import { WriteCssVariables } from "@/components/WriteCssVariables/WriteCssVariables"

export const metadata: Metadata = {
  title: "CSS Tools | A collection of helpful tools for CSS styling",
  description: `Explore our comprehensive collection of CSS tools designed to simplify and enhance your styling workflow. From gradient generators to color contrast checkers, find the right tools to streamline your CSS development and create visually stunning, accessible designs with ease.`,
  alternates: {
    canonical: "/css-tools",
  },
}

interface Props {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function CssToolsPage({ searchParams }: Props) {
  return (
    <>
      <WriteCssVariables searchParams={searchParams} />
      <div className="header-space p-4">
        <LayoutContainer>
          <h1 className="py-4">CSS Tools</h1>

          <h2 className="py-4">Overview</h2>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 pt-4 pb-16">
            <NavigationCardGradient />
            <NavigationCardBoxShadow />
            <NavigationCardTextShadow />
          </div>
        </LayoutContainer>
      </div>
    </>
  )
}
