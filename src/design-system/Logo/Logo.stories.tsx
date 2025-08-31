import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Logo } from "./Logo"

const meta: Meta<typeof Logo> = {
  title: "Design System/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xxs", "xs", "sm", "md", "lg", "xl"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    size: "md",
  },
}

// Size variations
export const SizeVariations: Story = {
  render: () => {
    const sizes = ["xxs", "xs", "sm", "md", "lg", "xl"] as const
    return (
      <div className="flex items-center space-x-8">
        {sizes.map((size) => (
          <div key={size} className="flex flex-col items-center space-y-2">
            <Logo size={size} />
            <span className="text-sm text-gray-500 uppercase">{size}</span>
          </div>
        ))}
      </div>
    )
  },
}
