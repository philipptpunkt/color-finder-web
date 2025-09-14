import { cn } from "@/utils/cn"
import { IconName } from "./IconNames"
import { iconSymbols } from "./IconSymbols"
import { cva, type VariantProps } from "class-variance-authority"

export const iconVariants = cva("", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-10 w-10",
    },
    color: {
      default: ["text-text"],
      soft: ["text-text-soft"],
      light: ["text-text-light"],
      primary: "text-text-primary",
      secondary: "text-text-secondary",
      error: "text-error",
      success: "text-success",
    },
    strokeWidth: {
      thin: "stroke-[0.25em]",
      light: "stroke-[0.5em]",
      regular: "stroke-[1em]",
      bold: "stroke-[1.5em]",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    strokeWidth: "regular",
  },
})

export type IconSize = NonNullable<VariantProps<typeof iconVariants>["size"]>
export type IconColor = NonNullable<VariantProps<typeof iconVariants>["color"]>
export type IconStrokeWidth = NonNullable<
  VariantProps<typeof iconVariants>["strokeWidth"]
>

export interface IconProps extends VariantProps<typeof iconVariants> {
  iconName: IconName
  className?: string
  style?: React.CSSProperties
}

/**
 * Icon component that displays SVG icons from the icon library
 *
 * @param {Object} props - Component props
 * @param {IconName} props.iconName - Name of the icon to display
 * @param {IconSize} [props.size="md"] - Size of the icon (xs, sm, md, lg, xl)
 * @param {IconColor} [props.color="default"] - Color of the icon (default, soft, light, primary, secondary, error, success)
 * @param {IconStrokeWidth} [props.strokeWidth="regular"] - Stroke width of the icon (thin, light, regular, bold)
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.CSSProperties} [props.style] - Inline styles
 * @returns {JSX.Element} Icon component
 */
export function Icon({
  iconName,
  size,
  color,
  strokeWidth,
  className,
  style,
}: IconProps) {
  const IconComponent = iconSymbols[iconName]

  return (
    <IconComponent
      className={cn(iconVariants({ size, color, strokeWidth }), className)}
      style={style}
    />
  )
}
