import { cva, type VariantProps } from "class-variance-authority"

export const interactiveIconVariants = cva(
  [
    "p-2",
    "rounded-full",
    "cursor-pointer",
    "transition-colors",
    "focus:outline-2",
    "focus:outline-focus",
    "focus:outline-offset-2",
  ],
  {
    variants: {
      background: {
        transparent: [
          "bg-transparent",
          "hover:bg-neutral-200",
          "dark:hover:bg-neutral-700",
          "active:bg-neutral-300",
          "dark:active:bg-neutral-500",
        ],
        light: [
          "bg-neutral-100",
          "dark:bg-neutral-800",
          "hover:bg-neutral-200",
          "dark:hover:bg-neutral-700",
          "active:bg-neutral-300",
          "dark:active:bg-neutral-500",
        ],
        primary: [
          "bg-primary-50",
          "dark:bg-primary-800",
          "hover:bg-primary-100",
          "dark:hover:bg-primary-700",
          "active:bg-primary-200",
          "dark:active:bg-primary-600",
        ],
        secondary: [
          "bg-secondary-50",
          "dark:bg-secondary-800",
          "hover:bg-secondary-100",
          "dark:hover:bg-secondary-700",
          "active:bg-secondary-200",
          "dark:active:bg-secondary-600",
        ],
      },
    },
    defaultVariants: {
      background: "transparent",
    },
  }
)

export type IconBackground = NonNullable<
  VariantProps<typeof interactiveIconVariants>["background"]
>
