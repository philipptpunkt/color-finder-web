import React from "react"

export default function ToolsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text mb-4">Tools Dashboard</h1>
        <p className="text-lg text-text-secondary">
          Welcome to the tools section. Use the sidebar to navigate between
          different tools and features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-surface rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-text mb-3">
            Palette Tools
          </h2>
          <p className="text-text-secondary mb-4">
            Create, edit, and manage color palettes with our comprehensive set
            of tools.
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>• Color picker and harmony generator</li>
            <li>• Palette settings and export options</li>
            <li>• Contrast checker for accessibility</li>
          </ul>
        </div>

        <div className="p-6 bg-surface rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-text mb-3">
            Development Tools
          </h2>
          <p className="text-text-secondary mb-4">
            Tools to help you implement colors in your projects.
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>• Gradient generator</li>
            <li>• CSS variable export</li>
            <li>• Color format conversion</li>
          </ul>
        </div>

        <div className="p-6 bg-surface rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-text mb-3">
            Getting Started
          </h2>
          <p className="text-text-secondary mb-4">
            New to our tools? Here's how to get started:
          </p>
          <ol className="space-y-2 text-sm text-text-secondary">
            <li>1. Expand the sidebar to see all available tools</li>
            <li>2. Click on palette tools to open the submenu</li>
            <li>3. Try the gradient tool in the Tools section</li>
          </ol>
        </div>

        <div className="p-6 bg-surface rounded-lg border border-border">
          <h2 className="text-xl font-semibold text-text mb-3">Features</h2>
          <p className="text-text-secondary mb-4">
            Key features of the tools interface:
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>• Collapsible sidebar with icon-only mode</li>
            <li>• Expandable submenus that push content</li>
            <li>• Smooth animations and transitions</li>
            <li>• Responsive layout for different screen sizes</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
