"use client"

import { Radio } from "@/design-system/Input"

export default function StandardSelector({
  selected,
  setSelected,
  disableAAA,
}: {
  selected: string
  setSelected: (value: string) => void
  disableAAA?: boolean
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value)
  }

  return (
    <div className="flex flex-col space-y-4">
      <Radio
        label="WCAG AA"
        name="options_standard"
        value="aa"
        checked={selected === "aa"}
        onChange={handleChange}
      />
      {disableAAA ? null : (
        <Radio
          label="WCAG AAA"
          name="options_standard"
          value="aaa"
          checked={selected === "aaa"}
          onChange={handleChange}
        />
      )}
    </div>
  )
}
