import { cn } from "@/utils/cn"

interface InputProps {
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  rounded?: boolean
  disabled?: boolean
  active?: boolean
  hover?: boolean
}

export function Input({
  value,
  onChange,
  rounded = false,
  placeholder,
  disabled,
  active,
  hover,
}: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={cn(
        "font-semibold",
        "py-2 px-3 w-full max-w-[400px]",
        "border-2 border-slate-400 hover:border-border-light-hover dark:border-border-dark hover:dark:border-border-dark-hover",
        "focus:outline-none focus:border-custom-500 focus:dark:border-custom-500",
        "rounded-lg bg-slate-50 dark:bg-slate-800",
        {
          "border-border-light-hover dark:border-border-dark-hover focus:border-border-light-hover focus:dark:border-border-dark-hover":
            hover,
          "border-custom-500 dark:border-custom-500 hover:border-custom-500 hover:dark:border-custom-500":
            active,
          "border-slate-300 hover:border-slate-300 dark:border-slate-700 hover:dark:border-slate-700 placeholder-slate-300 bg-slate-100 dark:bg-slate-900 dark:placeholder-slate-600":
            disabled,
        }
      )}
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}
