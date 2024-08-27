import { cn } from "@/utils/cn"

const baseStyles = "rounded-md p-2 font-normal"

interface ButtonProps {
  type: "contained" | "outlined" | "text"
  title: string | React.ReactNode
  disabled?: boolean
  hover?: boolean
  active?: boolean
  content?: "stretch" | "hug" | "limited"
  bold?: boolean
  horizontalPadding?: boolean
  verticalPadding?: boolean
  onClick?: () => void
}

export function Button({
  type,
  title,
  disabled = false,
  hover = false,
  active = false,
  content = "stretch",
  bold = false,
  horizontalPadding = false,
  verticalPadding = false,
  onClick,
}: ButtonProps) {
  const isContainedStyle = type === "contained"
  const isOutlinedStyle = type === "outlined"
  const isTextStyle = type === "text"

  if (active) {
    return (
      <button
        className={cn(baseStyles, {
          "w-full": content === "stretch",
          "max-w-[160px]": content === "limited",
          "w-auto px-2": content === "hug",
          "mx-2": horizontalPadding,
          "my-2": verticalPadding,
          "text-text-inverse-light": isContainedStyle,
          "bg-custom-700 dark:bg-custom-200": active && isContainedStyle,
          "border border-custom-700 dark:border-custom-200":
            active && isOutlinedStyle,
          "text-custom-700 hover:text-custom-700 dark:text-custom-200 dark:hover:text-custom-200":
            active && (isOutlinedStyle || isTextStyle),
        })}
      >
        {title}
      </button>
    )
  }

  if (hover) {
    return (
      <button
        className={cn(baseStyles, {
          "w-full": content === "stretch",
          "max-w-[160px]": content === "limited",
          "w-auto px-2": content === "hug",
          "mx-2": horizontalPadding,
          "my-2": verticalPadding,
          "text-text-inverse-light": isContainedStyle,
          "bg-custom-600 dark:bg-custom-300": hover && isContainedStyle,
          "border border-custom-600 dark:border-custom-300":
            hover && isOutlinedStyle,
          "text-custom-600 dark:text-custom-300":
            hover && (isOutlinedStyle || isTextStyle),
        })}
      >
        {title}
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      className={cn("rounded-md w-full p-2 font-normal", {
        "w-full": content === "stretch",
        "max-w-[160px]": content === "limited",
        "w-auto px-2": content === "hug",
        "font-semibold": bold,
        "mx-2": horizontalPadding,
        "my-2": verticalPadding,
        "bg-custom-500 hover:bg-custom-600 active:bg-custom-700 dark:bg-custom-400 dark:hover:bg-custom-300 active:dark:bg-custom-200":
          isContainedStyle,
        "text-text-inverse-light": isContainedStyle,
        "bg-custom-100 hover:bg-custom-100 active:bg-custom-100 dark:bg-custom-950 dark:hover:bg-custom-950 dark:active:bg-custom-950":
          disabled && isContainedStyle,
        "text-custom-500 hover:text-custom-600 active:text-custom-700 dark:text-custom-400 dark:hover:text-custom-300 active:dark:text-custom-200":
          isOutlinedStyle || isTextStyle,
        "border border-custom-500 hover:border-custom-600 active:border-custom-700 dark:border-custom-400 dark:hover:border-custom-300 active:dark:border-custom-200":
          isOutlinedStyle,
        "border-custom-100 hover:border-custom-100 active:border-custom-100 dark:border-custom-950 dark:hover:border-custom-950 dark:active:border-custom-950":
          disabled && isOutlinedStyle,
        "text-custom-300 hover:text-custon-300 dark:text-custom-700 hover:dark:text-custom-700":
          disabled,
      })}
    >
      {title}
    </button>
  )
}
