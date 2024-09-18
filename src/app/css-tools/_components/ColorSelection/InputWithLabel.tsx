import { Input, InputProps } from "@/design-system/Input/Input"

interface InputWithLabelProps extends InputProps {
  label: string
}

export function InputWithLabel({ label, ...rest }: InputWithLabelProps) {
  return (
    <div className="max-w-40">
      <Input {...rest} className="text-center" />
      <p className="text-center font-semibold text-label mt-1">{label}</p>
    </div>
  )
}
