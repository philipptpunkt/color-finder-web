import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/cn"
import { Link } from "@/components/Link/Link"

const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "font-light",
    "transition-all",
    "duration-200",
    "focus:outline-none",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "rounded-full",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        contained: "",
        outlined: "border bg-transparent",
        text: "bg-transparent border-none font-medium",
      },
      color: {
        primary: "",
        secondary: "",
        neutral: "",
      },
      size: {
        s: "text-sm px-6 py-1.5 h-8",
        m: "text-base px-8 py-2 h-10",
        l: "text-lg px-12 py-3 h-12",
      },
      width: {
        full: "w-full",
        wide: "px-16",
        narrow: "px-4",
        snug: "px-1",
      },
    },
    compoundVariants: [
      // Primary contained variants
      {
        variant: "contained",
        color: "primary",
        class: [
          "bg-[var(--color-button-primary)]",
          "text-[var(--color-button-primary-text)]",
          "border-[var(--color-button-primary)]",
          "hover:bg-[var(--color-button-primary)]/80",
          "active:bg-[var(--color-button-primary)]/70",
          "disabled:bg-[var(--color-button-primary)]/60",
        ],
      },
      // Primary outlined variants
      {
        variant: "outlined",
        color: "primary",
        class: [
          "border-[var(--color-button-primary)]",
          "text-[var(--color-button-primary)]",
          "hover:border-[var(--color-button-primary)]/80",
          "hover:text-[var(--color-button-primary)]/80",
          "active:border-[var(--color-button-primary)]/60",
          "active:text-[var(--color-button-primary)]/60",
          "disabled:border-[var(--color-button-primary)]/60",
          "disabled:text-[var(--color-button-primary)]/60",
        ],
      },
      // Primary text variants
      {
        variant: "text",
        color: "primary",
        class: [
          "text-[var(--color-button-primary)]",
          "hover:text-[var(--color-button-primary)]/60",
          "active:text-[var(--color-button-primary)]/50",
          "disabled:text-[var(--color-button-primary)]/50",
        ],
      },
      // Secondary contained variants
      {
        variant: "contained",
        color: "secondary",
        class: [
          "bg-[var(--color-button-secondary)]",
          "text-[var(--color-button-secondary-text)]",
          "border-[var(--color-button-secondary)]",
          "hover:bg-[var(--color-button-secondary)]/80",
          "active:bg-[var(--color-button-secondary)]/70",
          "disabled:bg-[var(--color-button-secondary)]/50",
        ],
      },
      // Secondary outlined variants
      {
        variant: "outlined",
        color: "secondary",
        class: [
          "border-[var(--color-button-secondary)]",
          "text-[var(--color-button-secondary)]",
          "hover:border-[var(--color-button-secondary)]/80",
          "hover:text-[var(--color-button-secondary)]/80",
          "active:border-[var(--color-button-secondary)]/60",
          "active:text-[var(--color-button-secondary)]/60",
          "disabled:border-[var(--color-button-secondary)]/60",
          "disabled:text-[var(--color-button-secondary)]/60",
        ],
      },
      // Secondary text variants
      {
        variant: "text",
        color: "secondary",
        class: [
          "text-[var(--color-button-secondary)]",
          "hover:text-[var(--color-button-secondary)]/80",
          "active:text-[var(--color-button-secondary)]/60",
          "disabled:text-[var(--color-button-secondary)]/60",
        ],
      },
      // Neutral contained variants
      {
        variant: "contained",
        color: "neutral",
        class: [
          "bg-[var(--color-button-neutral)]",
          "text-[var(--color-button-neutral-text)]",
          "border-[var(--color-button-neutral)]",
          "hover:bg-[var(--color-button-neutral)]/80",
          "active:bg-[var(--color-button-neutral)]/70",
          "disabled:bg-[var(--color-button-neutral)]/60",
        ],
      },
      // Neutral outlined variants
      {
        variant: "outlined",
        color: "neutral",
        class: [
          "border-[var(--color-button-neutral)]",
          "text-[var(--color-button-neutral)]",
          "hover:border-[var(--color-button-neutral)]/80",
          "hover:text-[var(--color-button-neutral)]/80",
          "active:border-[var(--color-button-neutral)]/60",
          "active:text-[var(--color-button-neutral)]/60",
          "disabled:border-[var(--color-button-neutral)]/60",
          "disabled:text-[var(--color-button-neutral)]/60",
        ],
      },
      // Neutral text variants
      {
        variant: "text",
        color: "neutral",
        class: [
          "text-[var(--color-button-neutral)]",
          "hover:text-[var(--color-button-neutral)]/80",
          "active:text-[var(--color-button-neutral)]/60",
          "disabled:text-[var(--color-button-neutral)]/60",
        ],
      },
    ],
    defaultVariants: {
      variant: "contained",
      color: "primary",
      size: "m",
      width: undefined,
    },
  }
)

export interface ButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      "color" | "class" | "style" | "children"
    >,
    VariantProps<typeof buttonVariants> {
  label: string
  href?: string
  width?: "full" | "wide" | "narrow" | "snug"
  className?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, color, size, width, label, href, className, ...props }, ref) => {
    const buttonClasses = cn(
      buttonVariants({
        variant,
        color: color as "primary" | "secondary" | "neutral",
        size,
        width,
      }),
      className
    )

    if (href) {
      return (
        <Link href={href} className={buttonClasses}>
          {label}
        </Link>
      )
    }

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {label}
      </button>
    )
  }
)

Button.displayName = "Button"
