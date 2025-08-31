"use client"

import { cn } from "@/utils/cn"
import { DefaultCard as Card } from "@/design-system"
import { Section } from "@/layout"

export function ToolsSection() {
  const tools = [
    {
      title: "Advanced Palette Generator",
      description: "Generate scientifically-balanced color systems using OKLCH color space for superior perceptual uniformity and accessibility.",
      features: ["OKLCH-first approach", "11-shade scales", "Tailwind CSS export", "Accessibility validation"],
      category: "Generation",
      href: "/generate-palettes"
    },
    {
      title: "Contrast Validation Suite",
      description: "Real-time WCAG compliance testing with detailed accessibility reports and remediation suggestions.",
      features: ["WCAG 2.1 AA/AAA", "Real-time feedback", "Batch testing", "Remediation hints"],
      category: "Accessibility",
      href: "/contrast-check"
    },
    {
      title: "Professional CSS Tools",
      description: "Advanced shadow and gradient generators with precise control over every parameter and instant CSS output.",
      features: ["Multi-layer shadows", "Complex gradients", "CSS custom properties", "Live preview"],
      category: "Development",
      href: "/css-tools"
    },
    {
      title: "Secondary Color Harmonization",
      description: "Create balanced secondary palettes that complement your primary colors using color theory principles.",
      features: ["Color theory algorithms", "Harmony validation", "Brand consistency", "Multi-palette export"],
      category: "Design System",
      href: "/generate-palettes"
    }
  ]

  return (
    <Section className="bg-background">
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-surface rounded-full px-4 py-2 mb-6 border border-border">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-medium text-text-muted">Professional Tools</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Professional Color Systems
            <span className="block text-primary">
              Made Simple
            </span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Advanced color tools built for designers and developers who need precision, accessibility, and seamless workflow integration.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <Card
              key={tool.title}
              horizontalPadding="lg"
              verticalPadding="lg"
              className={cn([
                "group",
                "cursor-pointer",
                "hover:shadow-lg",
                "transition-all",
                "duration-300",
                "hover:-translate-y-1",
              ])}
            >
              <div className="space-y-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {tool.category}
                  </span>
                  <svg className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Tool Content */}
                <div>
                  <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed mb-6">
                    {tool.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {tool.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-text-muted">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-border">
                  <span className="text-sm font-medium text-primary group-hover:underline">
                    Explore Tool →
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <Card horizontalPadding="lg" verticalPadding="md" className="inline-block">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-primary border-2 border-background"
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-text">Trusted by professionals</p>
                <p className="text-xs text-text-muted">Design systems, agencies, and teams</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  )
}
