import React from "react"
import { cn } from "@/utils/cn"

export default function PalettePage() {
  return (
    <div className={cn(["p-8", "max-w-4xl", "mx-auto"])}>
      <div className={cn(["mb-8"])}>
        <h1 className={cn(["text-3xl", "font-bold", "text-text", "mb-4"])}>
          Palette Tools
        </h1>
        <p
          className={cn(["text-text-secondary", "text-lg", "leading-relaxed"])}
        >
          Create, customize, and manage color palettes for your design projects.
        </p>
      </div>

      <div
        className={cn([
          "grid",
          "grid-cols-1",
          "md:grid-cols-2",
          "lg:grid-cols-3",
          "gap-6",
          "mb-8",
        ])}
      >
        {/* Color Palette Preview */}
        <div
          className={cn([
            "bg-background-highlight",
            "rounded-lg",
            "p-6",
            "border",
            "border-border",
          ])}
        >
          <h3 className={cn(["text-lg", "font-semibold", "text-text", "mb-4"])}>
            Current Palette
          </h3>
          <div className={cn(["grid", "grid-cols-5", "gap-2", "mb-4"])}>
            {["#3B82F6", "#1D4ED8", "#1E40AF", "#1E3A8A", "#172554"].map(
              (color, index) => (
                <div
                  key={index}
                  className={cn([
                    "aspect-square",
                    "rounded",
                    "border",
                    "border-border",
                  ])}
                  style={{ backgroundColor: color }}
                  title={color}
                />
              )
            )}
          </div>
          <p className={cn(["text-sm", "text-text-secondary"])}>
            Blue color palette with 5 shades
          </p>
        </div>

        {/* Palette Generator */}
        <div
          className={cn([
            "bg-background-highlight",
            "rounded-lg",
            "p-6",
            "border",
            "border-border",
          ])}
        >
          <h3 className={cn(["text-lg", "font-semibold", "text-text", "mb-4"])}>
            Generate New Palette
          </h3>
          <div className={cn(["space-y-4"])}>
            <div>
              <label
                className={cn([
                  "block",
                  "text-sm",
                  "font-medium",
                  "text-text",
                  "mb-2",
                ])}
              >
                Base Color
              </label>
              <input
                type="color"
                defaultValue="#3B82F6"
                className={cn([
                  "w-full",
                  "h-10",
                  "rounded",
                  "border",
                  "border-border",
                  "cursor-pointer",
                ])}
              />
            </div>
            <button
              className={cn([
                "w-full",
                "bg-background-primary",
                "text-text-primary",
                "py-2",
                "px-4",
                "rounded",
                "hover:opacity-90",
                "transition-opacity",
              ])}
            >
              Generate Palette
            </button>
          </div>
        </div>

        {/* Palette Library */}
        <div
          className={cn([
            "bg-background-highlight",
            "rounded-lg",
            "p-6",
            "border",
            "border-border",
          ])}
        >
          <h3 className={cn(["text-lg", "font-semibold", "text-text", "mb-4"])}>
            Saved Palettes
          </h3>
          <div className={cn(["space-y-3"])}>
            {[
              {
                name: "Ocean Blues",
                colors: ["#0EA5E9", "#0284C7", "#0369A1"],
              },
              {
                name: "Forest Greens",
                colors: ["#10B981", "#059669", "#047857"],
              },
              {
                name: "Sunset Orange",
                colors: ["#F97316", "#EA580C", "#C2410C"],
              },
            ].map((palette, index) => (
              <div
                key={index}
                className={cn([
                  "flex",
                  "items-center",
                  "justify-between",
                  "p-2",
                  "rounded",
                  "hover:bg-background",
                  "transition-colors",
                ])}
              >
                <div className={cn(["flex", "items-center", "gap-2"])}>
                  <div className={cn(["flex", "gap-1"])}>
                    {palette.colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className={cn([
                          "w-4",
                          "h-4",
                          "rounded-full",
                          "border",
                          "border-border",
                        ])}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className={cn(["text-sm", "text-text"])}>
                    {palette.name}
                  </span>
                </div>
                <button
                  className={cn([
                    "text-xs",
                    "text-text-secondary",
                    "hover:text-text",
                    "transition-colors",
                  ])}
                >
                  Load
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div
        className={cn([
          "bg-background-highlight",
          "rounded-lg",
          "p-6",
          "border",
          "border-border",
        ])}
      >
        <h2 className={cn(["text-xl", "font-semibold", "text-text", "mb-4"])}>
          Palette Tools
        </h2>
        <div
          className={cn([
            "grid",
            "grid-cols-1",
            "md:grid-cols-2",
            "lg:grid-cols-4",
            "gap-4",
          ])}
        >
          {[
            {
              name: "Color Harmony",
              description: "Generate harmonious color combinations",
            },
            {
              name: "Accessibility Check",
              description: "Verify color contrast ratios",
            },
            {
              name: "Export Options",
              description: "Export palettes in various formats",
            },
            {
              name: "Import Palette",
              description: "Import existing color palettes",
            },
          ].map((tool, index) => (
            <div
              key={index}
              className={cn([
                "p-4",
                "rounded",
                "border",
                "border-border",
                "hover:bg-background",
                "transition-colors",
                "cursor-pointer",
              ])}
            >
              <h3 className={cn(["font-medium", "text-text", "mb-2"])}>
                {tool.name}
              </h3>
              <p className={cn(["text-sm", "text-text-secondary"])}>
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
