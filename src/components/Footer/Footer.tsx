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
    href: "https://forms.gle/Y15qL7wZgdyTHs9P7",
    label: "Feedback",
    subpage: false,
  },
  {
    href: "/legal-notice",
    label: "Legal\u00A0Notice",
    subpage: false,
  },
]

function LinkItem({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith("http")
  if (isExternal) {
    return (
      <a href={href} target="_blank">
        {label}
      </a>
    )
  }
  return <Link href={href}>{label}</Link>
}

export function Footer() {
  return (
    <LayoutContainer>
      <div className="flex flex-col sm:flex-row w-full font-semibold">
        <ContentContainer className="w-full sm:w-1/2 mb-[3px] sm:mb-0 sm:mr-[3px]">
          <ul>
            {contentPageLinks.map((link) => (
              <li
                key={link.href}
                className={cn(
                  "py-1 px-4 rounded-sm",
                  "hover:bg-slate-300 dark:hover:bg-slate-800",
                  {
                    "pl-8": link.subpage,
                  }
                )}
              >
                <LinkItem href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </ContentContainer>
        <ContentContainer className="w-full sm:w-1/2">
          <ul>
            {otherPageLinks.map((link) => {
              return (
                <li
                  key={link.href}
                  className={cn(
                    "py-1 px-4 rounded-sm",
                    "hover:bg-slate-300 dark:hover:bg-slate-800",
                    {
                      "pl-8": link.subpage,
                    }
                  )}
                >
                  <LinkItem href={link.href} label={link.label} />
                </li>
              )
            })}
          </ul>

          <Socials className="my-8 px-4" />
          <p className="px-4">
            &copy; 2024 Philipp&nbsp;Trentmann | Color&nbsp;Finder
          </p>
        </ContentContainer>
      </div>
    </LayoutContainer>
  )
}
