import { cn } from "@/utils/cn"
import { Icon, IconProps } from "./Icon"
import { IconBackground, interactiveIconVariants } from "./variants"

interface IconButtonProps extends IconProps {
  onClick: () => void
  background?: IconBackground
}

/**
 * IconButton component that combines an Icon with button functionality and interactive styling
 *
 * @param {Object} props - Component props
 * @param {string} props.iconName - Name of the icon to display
 * @param {string} [props.size] - Size of the icon (xs, sm, md, lg, xl)
 * @param {string} [props.color] - Color of the icon (default, soft, light, primary, secondary, error, success)
 * @param {string} [props.strokeWidth] - Stroke width of the icon (thin, light, regular, bold)
 * @param {IconBackground} [props.background] - Background style for the button
 * @param {Function} props.onClick - Click handler function
 * @returns {JSX.Element} IconButton component
 */
export function IconButton({
  iconName,
  size,
  color,
  background,
  strokeWidth,
  onClick,
}: IconButtonProps) {
  return (
    <button
      className={cn(interactiveIconVariants({ background }))}
      onClick={onClick}
    >
      <Icon
        iconName={iconName}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
      />
    </button>
  )
}
