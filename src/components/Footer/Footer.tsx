import Link from "next/link"
import { LayoutContainer } from "../Layout/LayoutContainer"
import { ContentContainer } from "../Layout/ContentContainer"

export function Footer() {
  return (
    <LayoutContainer>
      <div className="flex flex-col sm:flex-row w-full font-semibold">
        <ContentContainer className="w-full sm:w-1/2 mb-[3px] sm:mb-0 sm:mr-[3px]">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contrast-check">Contrast&nbsp;Check</Link>
            </li>
          </ul>
        </ContentContainer>
        <ContentContainer className="w-full sm:w-1/2">
          <ul>
            <li>
              <Link href="/legal-notice">Legal&nbsp;Notice</Link>
            </li>
          </ul>
          <p>&copy; 2024 Philipp Trentmann | Color Finder</p>
        </ContentContainer>
      </div>
    </LayoutContainer>
  )
}
