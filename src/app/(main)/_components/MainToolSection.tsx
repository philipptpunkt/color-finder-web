"use client"

import { cn } from "@/utils/cn"
import { DefaultCard as Card } from "@/design-system"
import { Section } from "@/layout"

export function MainToolSection() {
  return (
    <Section className="bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 py-24 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-surface rounded-full px-4 py-2 mb-6 border border-border shadow-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-text-muted">Featured Tool</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-text mb-6 leading-tight">
            Advanced Color Palette
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Generator
            </span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Create scientifically-balanced color systems using OKLCH color space for superior perceptual uniformity and accessibility.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Left Column - Tool Preview */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Interface Preview */}
            <Card horizontalPadding="sm" verticalPadding="sm" className="overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[16/10] bg-gradient-to-br from-surface to-background border border-border relative">
                {/* Mock Interface */}
                <div className="absolute inset-4 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      <div className="w-20 h-2 bg-text/20 rounded" />
                    </div>
                    <div className="w-16 h-6 bg-primary/20 rounded" />
                  </div>
                  
                  {/* Color Palette Preview */}
                  <div className="grid grid-cols-11 gap-1 mt-6">
                    {Array.from({ length: 11 }, (_, i) => (
                      <div 
                        key={i} 
                        className="aspect-square rounded transition-transform group-hover:scale-105"
                        style={{
                          backgroundColor: `hsl(${220 + i * 2}, ${70 - i * 3}%, ${10 + i * 8}%)`,
                          transitionDelay: `${i * 50}ms`
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Controls */}
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-24 h-8 bg-surface border border-border rounded" />
                    <div className="w-16 h-8 bg-surface border border-border rounded" />
                    <div className="w-20 h-8 bg-primary/20 rounded" />
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-sm font-medium text-text bg-surface px-3 py-1 rounded-full border border-border shadow-lg">
                    Interactive Preview
                  </span>
                </div>
              </div>
            </Card>
            
            {/* Secondary Preview */}
            <div className="grid grid-cols-2 gap-4">
              <Card horizontalPadding="sm" verticalPadding="sm" className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded border border-border flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-8 h-8 bg-primary/30 rounded mx-auto flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                    </div>
                    <p className="text-xs text-text-muted font-medium">Export Options</p>
                  </div>
                </div>
              </Card>
              
              <Card horizontalPadding="sm" verticalPadding="sm" className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-secondary/10 to-secondary/5 rounded border border-border flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-8 h-8 bg-secondary/30 rounded mx-auto flex items-center justify-center">
                      <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xs text-text-muted font-medium">Accessibility</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column - Features & CTA */}
          <div className="lg:col-span-5 space-y-6">
            {/* Key Features */}
            <Card horizontalPadding="lg" verticalPadding="lg" className="h-fit">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <h3 className="text-xl font-bold text-text">Key Features</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: "🎨", text: "OKLCH-first color space for perceptual uniformity" },
                    { icon: "📊", text: "11-shade scales with perfect contrast ratios" },
                    { icon: "⚡", text: "Tailwind CSS ready export formats" },
                    { icon: "♿", text: "Real-time accessibility validation" },
                    { icon: "🎯", text: "Brand color harmonization" },
                    { icon: "🌙", text: "Dark mode automatic generation" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <span className="text-sm mt-0.5 group-hover:scale-110 transition-transform">{feature.icon}</span>
                      <span className="text-text-muted text-sm leading-relaxed">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* CTA Card */}
            <Card horizontalPadding="lg" verticalPadding="lg" className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-text mb-2">Ready to get started?</h4>
                  <p className="text-sm text-text-muted mb-4">Generate your first palette in seconds</p>
                </div>
                <a 
                  href="/generate-palettes"
                  className={cn([
                    "inline-flex",
                    "items-center",
                    "gap-2",
                    "px-6",
                    "py-3",
                    "bg-primary",
                    "text-white",
                    "rounded-lg",
                    "font-medium",
                    "hover:bg-primary/90",
                    "hover:shadow-lg",
                    "hover:-translate-y-0.5",
                    "transition-all",
                    "duration-200",
                    "w-full",
                    "justify-center"
                  ])}
                >
                  Try Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </Card>


          </div>
        </div>


      </div>
    </Section>
  )
}
