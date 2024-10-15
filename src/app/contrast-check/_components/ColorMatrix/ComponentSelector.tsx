"use client"

import { Radio } from "@/design-system/Input"

export default function ComponentSelector({
  selected,
  setSelected,
}: {
  selected: string
  setSelected: (value: string) => void
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value)
  }

  return (
    <div className="flex flex-col space-y-4">
      <Radio
        label="Normal Text"
        name="options"
        value="normalText"
        checked={selected === "normalText"}
        onChange={handleChange}
      />
      <Radio
        label={
          <>
            <strong>Bold</strong>/Large Text
          </>
        }
        name="options"
        value="largeText"
        checked={selected === "largeText"}
        onChange={handleChange}
      />
      <Radio
        label="User Interface"
        name="options"
        value="uiComp"
        checked={selected === "uiComp"}
        onChange={handleChange}
      />
    </div>
  )
}
