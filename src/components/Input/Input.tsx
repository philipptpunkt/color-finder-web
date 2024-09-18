import { cn } from "@/utils/cn"

interface InputProps {
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  rounded?: boolean
}

//
// WARNING for EXAMPLE COMPONENTS ONLY
//
export function Input({
  value,
  onChange,
  rounded = false,
  placeholder,
}: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={cn(
        "border border-border-light hover:border-border-light-hover dark:border-border-dark hover:dark:border-border-dark-hover",
        "active:border-custom-500",
        "py-2 px-3 w-full",
        {
          "rounded-lg": rounded,
        }
      )}
      placeholder={placeholder}
      readOnly
    />
  )
}
