import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { DefaultCard } from "./DefaultCard"

const meta: Meta<typeof DefaultCard> = {
  title: "Design System/Card",
  component: DefaultCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    horizontalPadding: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Horizontal padding for the card content",
    },
    verticalPadding: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Vertical padding for the card content",
    },
    children: {
      control: { type: "text" },
      description: "Content to display inside the card",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    horizontalPadding: "md",
    verticalPadding: "md",
    children: (
      <div>
        <h3 className="text-lg font-semibold text-text mb-2">Card Title</h3>
        <p className="text-text-secondary">
          This is a sample card with gradient border effect. The outer container
          has a gradient background with 1px padding to create the border
          effect, while the inner content has the standard background color.
        </p>
      </div>
    ),
  },
}
