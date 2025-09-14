import { OklchColorPicker } from "@/components/OklchColorPicker"

export function ColorPanel() {
  return (
    <OklchColorPicker
      value={{
        l: 0.6,
        c: 0.3,
        h: 263,
      }}
      onChange={() => {}}
    />
  )
}
