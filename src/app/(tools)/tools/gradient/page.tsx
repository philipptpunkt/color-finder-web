import React from "react"

export default function GradientPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text mb-4">
          Gradient Generator
        </h1>
        <p className="text-lg text-text-secondary">
          Create beautiful gradients for your designs. This is a test page to
          demonstrate the routing functionality.
        </p>
      </div>

      <div className="space-y-6">
        <div className="p-6 bg-surface rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-text mb-4">
            Linear Gradient Preview
          </h2>
          <div className="space-y-4">
            <div
              className="h-32 rounded-lg border border-border"
              style={{
                background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
              }}
            />
            <div className="flex items-center gap-4">
              <span className="text-sm text-text-secondary">Gradient:</span>
              <code className="px-3 py-1 bg-background rounded text-sm font-mono text-text border border-border">
                linear-gradient(45deg, #FF6B6B, #4ECDC4)
              </code>
            </div>
          </div>
        </div>

        <div className="p-6 bg-surface rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-text mb-4">
            Radial Gradient Preview
          </h2>
          <div className="space-y-4">
            <div
              className="h-32 rounded-lg border border-border"
              style={{
                background: "radial-gradient(circle, #45B7D1, #96CEB4)",
              }}
            />
            <div className="flex items-center gap-4">
              <span className="text-sm text-text-secondary">Gradient:</span>
              <code className="px-3 py-1 bg-background rounded text-sm font-mono text-text border border-border">
                radial-gradient(circle, #45B7D1, #96CEB4)
              </code>
            </div>
          </div>
        </div>

        <div className="p-6 bg-surface rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-text mb-4">
            Conic Gradient Preview
          </h2>
          <div className="space-y-4">
            <div
              className="h-32 rounded-lg border border-border"
              style={{
                background:
                  "conic-gradient(from 0deg, #FFEAA7, #DDA0DD, #98D8C8, #F7DC6F, #FFEAA7)",
              }}
            />
            <div className="flex items-center gap-4">
              <span className="text-sm text-text-secondary">Gradient:</span>
              <code className="px-3 py-1 bg-background rounded text-sm font-mono text-text border border-border">
                conic-gradient(from 0deg, #FFEAA7, #DDA0DD, #98D8C8, #F7DC6F,
                #FFEAA7)
              </code>
            </div>
          </div>
        </div>

        <div className="p-6 bg-surface rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-text mb-4">
            Gradient Controls
          </h2>
          <p className="text-text-secondary mb-4">
            In a full implementation, this would include:
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>• Color stop controls</li>
            <li>• Angle and direction settings</li>
            <li>• Gradient type selection (linear, radial, conic)</li>
            <li>• Real-time preview updates</li>
            <li>• CSS code export</li>
            <li>• Preset gradient library</li>
          </ul>
        </div>

        <div className="p-6 bg-surface rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-text mb-4">
            Navigation Test
          </h2>
          <p className="text-text-secondary">
            This page demonstrates that the routing is working correctly. You
            can navigate back to the main tools page or use the sidebar to
            access other tools and submenus.
          </p>
        </div>
      </div>
    </div>
  )
}
