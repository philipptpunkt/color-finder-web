'use client'

import { cn } from "@/utils/cn"
import { DefaultCard as Card } from "@/design-system"
import { Section } from "@/layout"

export function FeaturesSection() {
  const features = [
    {
      title: "WCAG Compliance Engine",
      description: "Advanced accessibility validation with real-time contrast ratio analysis, color blindness simulation, and automated remediation suggestions for AA/AAA compliance.",
      metric: "99.9% Accuracy",
      category: "Accessibility",
      highlights: ["WCAG 2.1 AA/AAA", "Color blindness testing", "Automated fixes", "Compliance reports"]
    },
    {
      title: "OKLCH Color Science",
      description: "Perceptually uniform color space implementation ensuring consistent lightness and chroma across your entire palette for superior visual harmony.",
      metric: "Perceptual Uniformity",
      category: "Color Science",
      highlights: ["OKLCH color space", "Perceptual accuracy", "Consistent lightness", "Scientific precision"]
    },
    {
      title: "Developer-First Export",
      description: "Export to CSS custom properties, Sass variables, Tailwind config, design tokens, and popular design system formats with zero configuration.",
      metric: "12+ Formats",
      category: "Integration",
      highlights: ["CSS custom properties", "Tailwind CSS", "Design tokens", "Framework ready"]
    },
    {
      title: "Real-Time Validation",
      description: "Instant feedback on color relationships, accessibility compliance, and brand consistency as you build your palette.",
      metric: "Live Updates",
      category: "Workflow",
      highlights: ["Instant feedback", "Live preview", "Error detection", "Smart suggestions"]
    },
    {
      title: "Brand Consistency",
      description: "Maintain color consistency across projects with brand palette management, version control, and team synchronization.",
      metric: "Team Sync",
      category: "Collaboration",
      highlights: ["Brand management", "Version control", "Team sharing", "Consistency checks"]
    },
    {
      title: "Theme Generation",
      description: "Automatically generate light and dark theme variants with intelligent color mapping and accessibility preservation.",
      metric: "Auto-Generated",
      category: "Theming",
      highlights: ["Light/dark themes", "Smart mapping", "Accessibility preserved", "Custom variants"]
    }
  ]

  return (
    <Section className="bg-surface">
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-background rounded-full px-4 py-2 mb-6 border border-border">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-medium text-text-muted">Technical Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Built for
            <span className="block text-primary">
              Professional Workflows
            </span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Every feature is engineered for precision, accessibility, and seamless integration into professional design and development workflows.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              horizontalPadding="lg"
              verticalPadding="lg"
              className={cn([
                "group",
                "hover:shadow-lg",
                "transition-all",
                "duration-300",
                "hover:-translate-y-1",
              ])}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {feature.category}
                  </span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">
                      {feature.metric}
                    </div>
                    <div className="text-xs text-text-muted uppercase tracking-wide">
                      Performance
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  {feature.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-text-muted">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-text-muted">Reliability</span>
                    <span className="text-text font-medium">99.9%</span>
                  </div>
                  <div className="w-full bg-border/30 rounded-full h-2">
                    <div className="h-2 rounded-full bg-primary transition-all duration-1000 group-hover:w-full" style={{ width: '85%' }} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <Card horizontalPadding="lg" verticalPadding="md" className="inline-block">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm font-medium text-text">All systems operational</span>
              </div>
              <div className="w-px h-6 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-muted">Trusted by</span>
                <span className="text-sm font-bold text-text">10,000+</span>
                <span className="text-sm text-text-muted">professionals</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  )
}