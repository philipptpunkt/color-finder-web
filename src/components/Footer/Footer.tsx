import { Socials } from "./Socials"
import { Link } from "../Link/Link"
import { cn } from "@/utils/cn"
import { Section } from "@/layout"

const footerLinks = {
  Product: [
    { name: "Color Generator", href: "/generate-palettes" },
    { name: "Contrast Checker", href: "/contrast-check" },
    { name: "CSS Tools", href: "/css-tools" },
    { name: "API Documentation", href: "#" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Examples", href: "#" },
    { name: "Community", href: "#" },
  ],
  Support: [
    { name: "Feedback", href: "https://forms.gle/Y15qL7wZgdyTHs9P7" },
    { name: "Contact", href: "#" },
    { name: "Legal Notice", href: "/legal-notice" },
    { name: "Privacy Policy", href: "#" },
  ],
}

function LinkItem({ href, name }: { href: string; name: string }) {
  const isExternal = href.startsWith("http")
  const linkClasses = cn([
    "group",
    "flex",
    "items-center",
    "gap-2",
    "text-leaf-600",
    "dark:text-leaf-300",
    "hover:text-leaf-800",
    "dark:hover:text-leaf-100",
    "transition-all",
    "duration-300",
    "font-medium",
    "text-base",
    "py-2",
    "px-3",
    "rounded-lg",
    "hover:bg-leaf-100/50",
    "dark:hover:bg-leaf-700/30",
    "hover:scale-105",
    "hover:translate-x-1",
  ])
  
  const dotElement = (
    <div className={cn([
      "w-1.5",
      "h-1.5",
      "bg-leaf-400",
      "dark:bg-leaf-500",
      "rounded-full",
      "group-hover:bg-leaf-600",
      "dark:group-hover:bg-leaf-300",
      "group-hover:scale-150",
      "transition-all",
      "duration-300",
    ])} />
  )
  
  if (isExternal) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={linkClasses}
      >
        {dotElement}
        {name}
      </a>
    )
  }
  return (
    <Link 
      href={href}
      className={linkClasses}
    >
      {dotElement}
      {name}
    </Link>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Section 
      as="footer" 
      className={cn([
        "relative",
        "overflow-hidden",
        "bg-gradient-to-br",
        "from-leaf-100",
        "via-leaf-200",
        "to-leaf-300",
        "dark:from-leaf-900",
        "dark:via-leaf-800",
        "dark:to-leaf-700",
        "border-t-4",
        "border-leaf-400",
        "dark:border-leaf-600",
      ])}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={cn([
          "absolute",
          "top-0",
          "left-1/4",
          "w-96",
          "h-96",
          "bg-gradient-radial",
          "from-leaf-300/30",
          "to-transparent",
          "dark:from-leaf-600/20",
          "rounded-full",
          "blur-3xl",
          "-translate-y-1/2",
        ])} />
        <div className={cn([
          "absolute",
          "bottom-0",
          "right-1/4",
          "w-80",
          "h-80",
          "bg-gradient-radial",
          "from-leaf-400/25",
          "to-transparent",
          "dark:from-leaf-500/15",
          "rounded-full",
          "blur-2xl",
          "translate-y-1/2",
        ])} />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-6">
        {/* Main Footer Content */}
        <div className={cn([
          "mb-16",
          "p-12",
          "rounded-3xl",
          "bg-gradient-to-br",
          "from-leaf-50/80",
          "via-leaf-100/60",
          "to-leaf-200/40",
          "dark:from-leaf-800/60",
          "dark:via-leaf-700/40",
          "dark:to-leaf-600/20",
          "backdrop-blur-sm",
          "border",
          "border-leaf-300/50",
          "dark:border-leaf-600/30",
          "shadow-2xl",
          "shadow-leaf-500/10",
          "dark:shadow-leaf-900/20",
        ])}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-8">
              <div className="flex items-center space-x-4">
                <div
                  className={cn([
                    "w-16",
                    "h-16",
                    "rounded-2xl",
                    "bg-gradient-to-br",
                    "from-leaf-500",
                    "via-leaf-600",
                    "to-leaf-700",
                    "dark:from-leaf-400",
                    "dark:via-leaf-500",
                    "dark:to-leaf-600",
                    "flex",
                    "items-center",
                    "justify-center",
                    "shadow-xl",
                    "shadow-leaf-500/30",
                    "dark:shadow-leaf-400/20",
                    "transform",
                    "rotate-3",
                    "hover:rotate-6",
                    "transition-transform",
                    "duration-300",
                  ])}
                >
                  <svg
                    className="w-9 h-9 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className={cn(["text-4xl", "font-bold", "text-leaf-800", "dark:text-leaf-100"])}>
                  ColorFinder
                </h3>
              </div>

              <p
                className={cn([
                  "text-leaf-700",
                  "dark:text-leaf-200",
                  "leading-relaxed",
                  "text-lg",
                  "font-medium",
                ])}
              >
                Professional color tools for designers and developers. Create accessible, beautiful color systems with scientific precision.
              </p>

              {/* Social Links */}
              <div className={cn([
                "p-6",
                "rounded-2xl",
                "bg-gradient-to-r",
                "from-leaf-200/60",
                "to-leaf-300/40",
                "dark:from-leaf-700/40",
                "dark:to-leaf-600/20",
                "border",
                "border-leaf-300/60",
                "dark:border-leaf-600/40",
              ])}>
                <p className={cn(["text-sm", "font-bold", "text-leaf-600", "dark:text-leaf-300", "mb-4", "uppercase", "tracking-wider"])}>
                  Connect with us
                </p>
                <Socials className="space-x-3" />
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {Object.entries(footerLinks).map(([category, links], index) => {
                  const colors = [
                    { bg: "from-leaf-300/30 to-leaf-400/20 dark:from-leaf-600/20 dark:to-leaf-500/10", border: "border-leaf-400/40 dark:border-leaf-500/30", text: "text-leaf-800 dark:text-leaf-100" },
                    { bg: "from-leaf-400/30 to-leaf-500/20 dark:from-leaf-500/20 dark:to-leaf-400/10", border: "border-leaf-500/40 dark:border-leaf-400/30", text: "text-leaf-900 dark:text-leaf-50" },
                    { bg: "from-leaf-500/30 to-leaf-600/20 dark:from-leaf-400/20 dark:to-leaf-300/10", border: "border-leaf-600/40 dark:border-leaf-300/30", text: "text-leaf-900 dark:text-white" }
                  ][index] || { bg: "from-leaf-300/30 to-leaf-400/20", border: "border-leaf-400/40", text: "text-leaf-800" }
                  
                  return (
                    <div key={category} className={cn([
                      "p-8",
                      "rounded-2xl",
                      "bg-gradient-to-br",
                      colors.bg,
                      "border",
                      colors.border,
                      "backdrop-blur-sm",
                      "hover:scale-105",
                      "transition-all",
                      "duration-300",
                      "shadow-lg",
                      "hover:shadow-xl",
                    ])}>
                      <h4 className={cn(["font-bold", colors.text, "mb-6", "text-xl", "flex", "items-center", "gap-3"])}>
                        <div className={cn(["w-2", "h-8", "bg-gradient-to-b", "from-leaf-500", "to-leaf-700", "dark:from-leaf-400", "dark:to-leaf-600", "rounded-full"])} />
                        {category}
                      </h4>
                      <ul className="space-y-4">
                        {links.map((link) => (
                          <li key={link.name}>
                            <LinkItem href={link.href} name={link.name} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stats Section */}
          <div className={cn([
            "p-8",
            "rounded-2xl",
            "bg-gradient-to-r",
            "from-leaf-600",
            "via-leaf-500",
            "to-leaf-400",
            "dark:from-leaf-700",
            "dark:via-leaf-600",
            "dark:to-leaf-500",
            "text-white",
            "shadow-2xl",
            "shadow-leaf-500/30",
            "dark:shadow-leaf-700/40",
            "transform",
            "hover:scale-105",
            "transition-all",
            "duration-300",
          ])}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-4 h-4 bg-white rounded-full animate-ping opacity-30" />
                </div>
                <span className="text-lg font-bold">Trusted by professionals worldwide</span>
              </div>
              <div className="text-right">
                <div className="text-4xl font-black">50K+</div>
                <div className="text-sm opacity-90 uppercase tracking-widest font-medium">Active Users</div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className={cn([
            "p-8",
            "rounded-2xl",
            "bg-gradient-to-r",
            "from-leaf-200/80",
            "via-leaf-300/60",
            "to-leaf-400/40",
            "dark:from-leaf-800/60",
            "dark:via-leaf-700/40",
            "dark:to-leaf-600/20",
            "border-2",
            "border-leaf-400/50",
            "dark:border-leaf-600/30",
            "backdrop-blur-sm",
            "shadow-xl",
          ])}>
            <div className="flex items-center justify-between">
              <p className={cn(["text-leaf-800", "dark:text-leaf-100", "font-bold", "text-lg"])}>
                © {currentYear} ColorFinder. All rights reserved.
              </p>
              <div className="flex items-center gap-3">
                <div className={cn(["w-3", "h-3", "bg-gradient-to-r", "from-leaf-500", "to-leaf-600", "dark:from-leaf-400", "dark:to-leaf-500", "rounded-full", "animate-bounce"])} />
                <span className={cn(["text-sm", "text-leaf-600", "dark:text-leaf-300", "font-medium", "italic"])}>Made with 💚</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
