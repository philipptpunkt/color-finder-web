import type { Meta, StoryObj } from '@storybook/react'
import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card7,
  Card8,
  Card9,
  Card10,
  Card11,
  Card12,
  Card13,
  Card14,
  Card15,
  Card16,
  Card17,
  Card18,
  Card19,
  Card20,
  ExampleCard
} from './ExampleCard'

const meta: Meta<typeof ExampleCard> = {
  title: 'Design System/Card/Examples',
  component: ExampleCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A collection of 20 different card designs using the neutral color palette with various styles including borders, gradients, and blurred backgrounds.'
      }
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

// Sample content for all cards
const CardContent = () => (
  <>
    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
      Card Title
    </h3>
    <p className="text-neutral-600 dark:text-neutral-400 mb-3">
      This is a sample card description that demonstrates the styling and layout of the card component.
    </p>
    <div className="flex gap-2">
      <span className="px-2 py-1 text-xs bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded">
        Tag 1
      </span>
      <span className="px-2 py-1 text-xs bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded">
        Tag 2
      </span>
    </div>
  </>
)

// Default story
export const Default: Story = {
  render: () => <ExampleCard />
}

// Individual card stories
export const BasicNeutralCard: Story = {
  render: () => (
    <Card1>
      <CardContent />
    </Card1>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic neutral card with subtle border and light shadow.'
      }
    }
  }
}

export const ElevatedCard: Story = {
  render: () => (
    <Card2>
      <CardContent />
    </Card2>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Elevated card with stronger shadow and rounded corners.'
      }
    }
  }
}

export const GradientBackgroundCard: Story = {
  render: () => (
    <Card3>
      <CardContent />
    </Card3>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with subtle gradient background from neutral-50 to neutral-100.'
      }
    }
  }
}

export const DoubleBorderCard: Story = {
  render: () => (
    <Card4>
      <CardContent />
    </Card4>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with double border effect using border and ring utilities.'
      }
    }
  }
}

export const BlurredGlassCard: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-neutral-200 to-neutral-300 p-8 rounded-lg">
      <Card5>
        <CardContent />
      </Card5>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Blurred glass effect card with backdrop blur and semi-transparent background.'
      }
    }
  }
}

export const InsetShadowCard: Story = {
  render: () => (
    <Card6>
      <CardContent />
    </Card6>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with inset shadow creating a recessed appearance.'
      }
    }
  }
}

export const GradientBorderCard: Story = {
  render: () => (
    <Card7>
      <CardContent />
    </Card7>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with gradient border effect using nested divs.'
      }
    }
  }
}

export const HoverEffectCard: Story = {
  render: () => (
    <Card8>
      <CardContent />
    </Card8>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive card with subtle hover effects and transitions.'
      }
    }
  }
}

export const ThickBorderAccentCard: Story = {
  render: () => (
    <Card9>
      <CardContent />
    </Card9>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with thick left border accent for emphasis.'
      }
    }
  }
}

export const SoftShadowCard: Story = {
  render: () => (
    <Card10>
      <CardContent />
    </Card10>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with extra rounded corners and soft colored shadow.'
      }
    }
  }
}

export const MinimalFlatCard: Story = {
  render: () => (
    <Card11>
      <CardContent />
    </Card11>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Minimal flat design card without borders or shadows.'
      }
    }
  }
}

export const DashedBorderCard: Story = {
  render: () => (
    <Card12>
      <CardContent />
    </Card12>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with dashed border style for a distinctive look.'
      }
    }
  }
}

export const LayeredShadowCard: Story = {
  render: () => (
    <Card13>
      <CardContent />
    </Card13>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with layered shadow effect using pseudo-elements.'
      }
    }
  }
}

export const SubtleGradientCard: Story = {
  render: () => (
    <Card14>
      <CardContent />
    </Card14>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with subtle vertical gradient background.'
      }
    }
  }
}

export const FrostedGlassCard: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-neutral-300 to-neutral-400 p-8 rounded-lg">
      <Card15>
        <CardContent />
      </Card15>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Frosted glass card with strong backdrop blur effect.'
      }
    }
  }
}

export const EmbossedCard: Story = {
  render: () => (
    <Card16>
      <CardContent />
    </Card16>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Embossed effect card with inner shadow and gradient overlay.'
      }
    }
  }
}

export const DiagonalGradientCard: Story = {
  render: () => (
    <Card17>
      <CardContent />
    </Card17>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with diagonal gradient background for dynamic appearance.'
      }
    }
  }
}

export const SoftGlowCard: Story = {
  render: () => (
    <Card18>
      <CardContent />
    </Card18>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with soft glow effect using colored shadows and rings.'
      }
    }
  }
}

export const TexturedBackgroundCard: Story = {
  render: () => (
    <Card19>
      <CardContent />
    </Card19>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with textured background using gradient overlays.'
      }
    }
  }
}

export const NeumorphismCard: Story = {
  render: () => (
    <Card20>
      <CardContent />
    </Card20>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Neumorphism style card with soft shadows and gradient effects.'
      }
    }
  }
}

// Showcase all cards in a grid
export const AllCardVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      <div>
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 1: Basic</h4>
        <Card1><CardContent /></Card1>
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 2: Elevated</h4>
        <Card2><CardContent /></Card2>
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 3: Gradient BG</h4>
        <Card3><CardContent /></Card3>
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 4: Double Border</h4>
        <Card4><CardContent /></Card4>
      </div>
      <div className="bg-gradient-to-br from-neutral-200 to-neutral-300 p-4 rounded-lg">
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 5: Blurred Glass</h4>
        <Card5><CardContent /></Card5>
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 6: Inset Shadow</h4>
        <Card6><CardContent /></Card6>
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 7: Gradient Border</h4>
        <Card7><CardContent /></Card7>
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 8: Hover Effect</h4>
        <Card8><CardContent /></Card8>
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 9: Thick Border</h4>
        <Card9><CardContent /></Card9>
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 10: Soft Shadow</h4>
        <Card10><CardContent /></Card10>
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 11: Minimal Flat</h4>
        <Card11><CardContent /></Card11>
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 12: Dashed Border</h4>
        <Card12><CardContent /></Card12>
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 13: Layered Shadow</h4>
        <Card13><CardContent /></Card13>
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 14: Subtle Gradient</h4>
        <Card14><CardContent /></Card14>
      </div>
      <div className="bg-gradient-to-br from-neutral-300 to-neutral-400 p-4 rounded-lg">
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 15: Frosted Glass</h4>
        <Card15><CardContent /></Card15>
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 16: Embossed</h4>
        <Card16><CardContent /></Card16>
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 17: Diagonal Gradient</h4>
        <Card17><CardContent /></Card17>
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 18: Soft Glow</h4>
        <Card18><CardContent /></Card18>
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 19: Textured BG</h4>
        <Card19><CardContent /></Card19>
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Card 20: Neumorphism</h4>
        <Card20><CardContent /></Card20>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A comprehensive showcase of all 20 card variants in a responsive grid layout.'
      }
    }
  }
}