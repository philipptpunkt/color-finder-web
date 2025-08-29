import type { Preview } from "@storybook/nextjs-vite"
import "../src/app/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      default: "light",
      options: [
        {
          name: "light",
          value: "var(--color-neutral-50)",
        },
        {
          name: "dark",
          value: "var(--color-neutral-900)",
        },
        {
          name: "pink",
          value: "#ff1493",
        },
        {
          name: "yellow",
          value: "#ffff00",
        },
        {
          name: "mid-blue",
          value: "#4169e1",
        },
        {
          name: "black",
          value: "#000000",
        },
        {
          name: "white",
          value: "#ffffff",
        },
      ],
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },

  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light"

      // Apply theme data attribute to the document
      if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-theme", theme)
      }

      return Story()
    },
  ],
}

export default preview
