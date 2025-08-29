import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["contained", "outlined", "text"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "neutral"],
    },
    size: {
      control: { type: "select" },
      options: ["s", "m", "l"],
    },
    width: {
      control: { type: "select" },
      options: ["full", "wide", "narrow", "snug"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    href: {
      control: { type: "text" },
    },
    onClick: {
      action: "clicked",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    label: "Button",
  },
}

// Size variants
export const Small: Story = {
  args: {
    label: "Small Button",
    size: "s",
  },
}

export const Medium: Story = {
  args: {
    label: "Medium Button",
    size: "m",
  },
}

export const Large: Story = {
  args: {
    label: "Large Button",
    size: "l",
  },
}

// Primary color variants
export const PrimaryContained: Story = {
  args: {
    label: "Primary Contained",
    variant: "contained",
    color: "primary",
  },
}

export const PrimaryOutlined: Story = {
  args: {
    label: "Primary Outlined",
    variant: "outlined",
    color: "primary",
  },
}

export const PrimaryText: Story = {
  args: {
    label: "Primary Text",
    variant: "text",
    color: "primary",
  },
}

// Secondary color variants
export const SecondaryContained: Story = {
  args: {
    label: "Secondary Contained",
    variant: "contained",
    color: "secondary",
  },
}

export const SecondaryOutlined: Story = {
  args: {
    label: "Secondary Outlined",
    variant: "outlined",
    color: "secondary",
  },
}

export const SecondaryText: Story = {
  args: {
    label: "Secondary Text",
    variant: "text",
    color: "secondary",
  },
}

// Neutral color variants
export const NeutralContained: Story = {
  args: {
    label: "Neutral Contained",
    variant: "contained",
    color: "neutral",
  },
}

export const NeutralOutlined: Story = {
  args: {
    label: "Neutral Outlined",
    variant: "outlined",
    color: "neutral",
  },
}

export const NeutralText: Story = {
  args: {
    label: "Neutral Text",
    variant: "text",
    color: "neutral",
  },
}

// Interactive states
export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
}

export const WithOnClick: Story = {
  args: {
    label: "Click Me",
    onClick: () => alert("Button clicked!"),
  },
}

export const AsLink: Story = {
  args: {
    label: "Link Button",
    href: "/example",
  },
}

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="s" label="Small" />
      <Button size="m" label="Medium" />
      <Button size="l" label="Large" />
    </div>
  ),
}

// All widths showcase
export const AllWidths: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <Button width="full" label="Full Width" />
      <div className="flex items-center gap-4">
        <Button width="wide" label="Wide" />
        <Button width="narrow" label="Narrow" />
        <Button width="snug" label="Snug" />
      </div>
    </div>
  ),
}

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button variant="contained" color="primary" label="Contained" />
        <Button variant="outlined" color="primary" label="Outlined" />
        <Button variant="text" color="primary" label="Text" />
      </div>
      <div className="flex items-center gap-4">
        <Button variant="contained" color="secondary" label="Contained" />
        <Button variant="outlined" color="secondary" label="Outlined" />
        <Button variant="text" color="secondary" label="Text" />
      </div>
      <div className="flex items-center gap-4">
        <Button variant="contained" color="neutral" label="Contained" />
        <Button variant="outlined" color="neutral" label="Outlined" />
        <Button variant="text" color="neutral" label="Text" />
      </div>
    </div>
  ),
}

// Interactive states showcase
export const InteractiveStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button label="Normal" />
        <Button disabled label="Disabled" />
      </div>
      <div className="flex items-center gap-4">
        <Button onClick={() => alert("Clicked!")} label="With onClick" />
        <Button href="/example" label="As Link" />
      </div>
      <div className="flex items-center gap-4">
        <Button width="wide" label="Wide Button" />
        <Button width="snug" label="Snug" />
      </div>
    </div>
  ),
}

// Complete matrix of all combinations
export const CompleteMatrix: Story = {
  render: () => (
    <div className="space-y-8">
      {(["primary", "secondary", "neutral"] as const).map((color) => (
        <div key={color} className="space-y-4">
          <h3 className="text-lg font-semibold">{color}</h3>
          {(["contained", "outlined", "text"] as const).map((variant) => (
            <div key={variant} className="space-y-2">
              <h4 className="text-sm font-medium">{variant}</h4>
              <div className="flex items-center gap-2">
                {(["s", "m", "l"] as const).map((size) => (
                  <Button
                    key={size}
                    variant={variant}
                    color={color}
                    size={size}
                    label={`${color} ${variant} ${size}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
}
