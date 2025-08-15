"use client"

import { cn } from "@/utils/cn"

export function ToolsSection() {
  const tools = [
    {
      title: "Palette Generator",
      description: "Create harmonious color palettes from a single base color",
      icon: "🎨",
      features: ["11-color scales", "Tailwind compatible", "HSL precision"],
      gradient: "from-blue-500 to-purple-600",
      delay: "0ms",
    },
    {
      title: "Contrast Checker",
      description: "Ensure your colors meet WCAG accessibility standards",
      icon: "♿",
      features: ["WCAG compliance", "Real-time testing", "AA/AAA ratings"],
      gradient: "from-green-500 to-teal-600",
      delay: "100ms",
    },
    {
      title: "Color Picker",
      description: "Extract colors from images and existing designs",
      icon: "🔍",
      features: ["Image analysis", "Hex/RGB/HSL", "Instant extraction"],
      gradient: "from-orange-500 to-red-600",
      delay: "200ms",
    },
    {
      title: "Gradient Creator",
      description: "Design beautiful gradients for modern interfaces",
      icon: "🌈",
      features: ["Multi-stop gradients", "CSS export", "Live preview"],
      gradient: "from-pink-500 to-violet-600",
      delay: "300ms",
    },
    {
      title: "Color Harmonies",
      description: "Discover complementary and triadic color relationships",
      icon: "⚖️",
      features: ["Color theory", "Harmony rules", "Professional schemes"],
      gradient: "from-indigo-500 to-blue-600",
      delay: "400ms",
    },
    {
      title: "Export Tools",
      description: "Export your palettes in multiple formats",
      icon: "📤",
      features: ["CSS variables", "JSON/XML", "Design tokens"],
      gradient: "from-emerald-500 to-green-600",
      delay: "500ms",
    },
  ]

  return (
    <section
      className={cn([
        "bg-gradient-to-b from-leaf-100 to-leaf-300",
        "relative",
        "py-24",
        "px-4",
        "overflow-hidden",
      ])}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, var(--color-primary-500) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, var(--color-secondary-500) 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className={cn(["relative", "max-w-7xl", "mx-auto"])}>
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="relative inline-block">
            <h2
              className={cn([
                "text-4xl",
                "md:text-5xl",
                "lg:text-6xl",
                "font-bold",
                "text-text",
                "tracking-tight",
              ])}
            >
              Powerful
              <span
                className={cn([
                  "bg-gradient-to-r",
                  "from-primary-500",
                  "via-secondary-500",
                  "to-primary-600",
                  "bg-clip-text",
                  "text-transparent",
                  "ml-4",
                ])}
              >
                Tools
              </span>
            </h2>

            {/* Decorative elements */}
            <div
              className={cn([
                "absolute",
                "-top-4",
                "-right-8",
                "w-8",
                "h-8",
                "bg-secondary-500/20",
                "rounded-full",
                "animate-pulse",
              ])}
            />
            <div
              className={cn([
                "absolute",
                "-bottom-2",
                "-left-6",
                "w-6",
                "h-6",
                "bg-primary-500/20",
                "rounded-full",
                "animate-pulse",
              ])}
              style={{ animationDelay: "1s" }}
            />
          </div>

          <p
            className={cn([
              "text-xl",
              "text-text-secondary",
              "max-w-3xl",
              "mx-auto",
              "leading-relaxed",
            ])}
          >
            Everything you need to create, analyze, and perfect your color
            schemes. Professional-grade tools designed for designers and
            developers.
          </p>
        </div>

        {/* Tools Grid */}
        <div
          className={cn([
            "grid",
            "grid-cols-1",
            "md:grid-cols-2",
            "lg:grid-cols-3",
            "gap-8",
          ])}
        >
          {tools.map((tool, index) => (
            <div
              key={index}
              className={cn([
                "group",
                "relative",
                "bg-surface/80",
                "backdrop-blur-sm",
                "rounded-2xl",
                "p-8",
                "border",
                "border-border/50",
                "hover:border-primary-500/30",
                "transition-all",
                "duration-500",
                "hover:scale-105",
                "hover:shadow-2xl",
                "overflow-hidden",
              ])}
              style={{
                animationDelay: tool.delay,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Gradient background on hover */}
              <div
                className={cn([
                  "absolute",
                  "inset-0",
                  "bg-gradient-to-br",
                  tool.gradient,
                  "opacity-0",
                  "group-hover:opacity-5",
                  "transition-opacity",
                  "duration-500",
                  "rounded-2xl",
                ])}
              />

              {/* Floating icon background */}
              <div
                className={cn([
                  "absolute",
                  "top-4",
                  "right-4",
                  "w-16",
                  "h-16",
                  "bg-gradient-to-br",
                  tool.gradient,
                  "rounded-full",
                  "opacity-10",
                  "group-hover:opacity-20",
                  "group-hover:scale-110",
                  "transition-all",
                  "duration-500",
                ])}
              />

              <div className="relative z-10 space-y-6">
                {/* Icon and Title */}
                <div className="space-y-4">
                  <div
                    className={cn([
                      "text-4xl",
                      "group-hover:scale-110",
                      "transition-transform",
                      "duration-300",
                    ])}
                  >
                    {tool.icon}
                  </div>

                  <h3
                    className={cn([
                      "text-2xl",
                      "font-bold",
                      "text-text",
                      "group-hover:text-primary-500",
                      "transition-colors",
                      "duration-300",
                    ])}
                  >
                    {tool.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className={cn([
                    "text-text-secondary",
                    "leading-relaxed",
                    "text-lg",
                  ])}
                >
                  {tool.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {tool.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={cn([
                        "flex",
                        "items-center",
                        "gap-3",
                        "text-sm",
                        "text-text-secondary",
                      ])}
                    >
                      <div
                        className={cn([
                          "w-2",
                          "h-2",
                          "bg-gradient-to-r",
                          tool.gradient,
                          "rounded-full",
                          "group-hover:scale-125",
                          "transition-transform",
                          "duration-300",
                        ])}
                      />
                      <span className="group-hover:text-text transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  className={cn([
                    "w-full",
                    "mt-6",
                    "px-6",
                    "py-3",
                    "bg-surface-elevated",
                    "text-text",
                    "rounded-xl",
                    "font-medium",
                    "border",
                    "border-border",
                    "hover:bg-gradient-to-r",
                    `hover:${tool.gradient}`,
                    "hover:text-white",
                    "hover:border-transparent",
                    "transition-all",
                    "duration-300",
                    "group-hover:shadow-lg",
                  ])}
                >
                  Try {tool.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
