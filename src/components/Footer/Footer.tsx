import { LayoutContainer } from "../Layout/LayoutContainer"
import { ContentContainer } from "../Layout/ContentContainer"
import { Socials } from "./Socials"
import { Link } from "../Link/Link"
import { cn } from "@/utils/cn"

// \u00A0

const contentPageLinks = [
  {
    href: "/",
    label: "Home",
    subpage: false,
  },
  {
    href: "/contrast-check",
    label: "Contrast\u00A0Check",
    subpage: false,
  },
  {
    href: "/css-tools",
    label: "CSS\u00A0Tools",
    subpage: false,
  },
  {
    href: "/css-tools/gradient-creator",
    label: "Gradient\u00A0Creator",
    subpage: true,
  },
  {
    href: "/css-tools/box-shadow-creator",
    label: "Box\u00A0Shadow\u00A0Creator",
    subpage: true,
  },
]

const otherPageLinks = [
  {
    href: "/legal-notice",
    label: "Legal\u00A0Notice",
    subpage: false,
  },
]

export function Footer() {
  return (
    <LayoutContainer>
      <div className="flex flex-col sm:flex-row w-full font-semibold">
        <ContentContainer className="w-full sm:w-1/2 mb-[3px] sm:mb-0 sm:mr-[3px]">
          <ul>
            {contentPageLinks.map((link) => (
              <li key={link.href} className={cn({ "pl-4": link.subpage })}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </ContentContainer>
        <ContentContainer className="w-full sm:w-1/2">
          <ul>
            {otherPageLinks.map((link) => {
              return (
                <li key={link.href} className={cn({ "pl-4": link.subpage })}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              )
            })}
          </ul>

          <Socials className="my-8" />
          <p>&copy; 2024 Philipp&nbsp;Trentmann | Color&nbsp;Finder</p>
        </ContentContainer>
      </div>
    </LayoutContainer>
  )
}
