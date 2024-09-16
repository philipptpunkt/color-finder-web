import { cn } from "@/utils/cn"

interface RadioProps {
  label: string | React.ReactNode
  checked: boolean
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Radio({ label, checked, name, value, onChange }: RadioProps) {
  return (
    <label className="inline-flex items-center">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span
        className={cn(
          "w-5 h-5 mr-2 rounded-full",
          "border border-slate-500 hover:border-2",
          "flex items-center justify-center"
        )}
      >
        {checked ? (
          <span className="w-3 h-3 bg-custom-500 rounded-full" />
        ) : null}
      </span>
      {label}
    </label>
  )
}
