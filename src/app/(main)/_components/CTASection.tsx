'use client'

import { cn } from "@/utils/cn"
import { Section } from "@/layout"
import { DefaultCard as Card } from "@/design-system"

export function CTASection() {
  const stats = [
    { number: '50K+', label: 'Active Users', description: 'Designers and developers worldwide' },
    { number: '1M+', label: 'Color Palettes', description: 'Generated and exported' },
    { number: '99.9%', label: 'Uptime', description: 'Reliable service guarantee' }
  ]

  const features = [
    'OKLCH color space support',
    'Real-time accessibility validation',
    'Multi-format export (CSS, JSON, Figma)',
    'Team collaboration tools'
  ]

  return (
    <Section className="bg-background">
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Main Content Card */}
        <Card horizontalPadding="xl" verticalPadding="xl" className="text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm font-medium text-primary">Ready to Get Started</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text">
                Build Better Color Systems
                <span className="block text-primary mt-2">
                  Starting Today
                </span>
              </h2>
              
              <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
                Join thousands of professionals who rely on our advanced color tools to create accessible, 
                beautiful, and consistent design systems.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-text">
                    {stat.label}
                  </div>
                  <div className="text-sm text-text-muted">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="bg-background-muted rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-text mb-6">What you get:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-text-muted">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button className={cn([
                "px-8",
                "py-4",
                "bg-primary",
                "text-white",
                "rounded-xl",
                "font-semibold",
                "hover:bg-primary/90",
                "transition-all",
                "duration-300",
                "hover:shadow-lg",
                "flex",
                "items-center",
                "gap-2"
              ])}>
                Start Building Free
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <button className={cn([
                "px-8",
                "py-4",
                "border-2",
                "border-border",
                "text-text",
                "rounded-xl",
                "font-semibold",
                "hover:border-primary",
                "hover:text-primary",
                "transition-all",
                "duration-300",
                "flex",
                "items-center",
                "gap-2"
              ])}>
                View Documentation
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-text-muted mb-4">Trusted by teams at</p>
              <div className="flex flex-wrap justify-center items-center gap-8 text-text-muted">
                {['Google', 'Microsoft', 'Adobe', 'Figma', 'Spotify'].map((company, index) => (
                  <span key={index} className="font-medium hover:text-text transition-colors cursor-pointer">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  )
}