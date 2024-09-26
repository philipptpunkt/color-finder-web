"use client"

import { cn } from "@/utils/cn"
import { GradientType } from "../GradientSection"

function RadioContainer({
  label,
  selected,
  value,
  onClick,
}: {
  label: string
  selected: boolean
  value: GradientType
  onClick: (value: GradientType) => void
}) {
  return (
    <button
      onClick={() => onClick(value)}
      className={cn(
        "w-full first:rounded-t-lg last:rounded-b-lg",
        "border-2 border-border-light dark:border-border-dark hover:border-slate-400 hover:dark:border-border-dark-hover",
        "p-2 font-semibold text-slate-400 cursor-pointer",
        {
          "bg-custom-500 dark:bg-custom-800": selected,
          "border-custom-500 dark:border-custom-800 hover:border-custom-500 hover:dark:border-custom-800":
            selected,
          "text-text-inverse-light": selected,
        }
      )}
    >
      {label}
    </button>
  )
}

export default function GradientTypeSelection({
  selected,
  setSelected,
}: {
  selected: GradientType
  setSelected: (value: GradientType) => void
}) {
  return (
    <div className="flex flex-col w-full">
      <RadioContainer
        label="Linear"
        selected={selected === "linear"}
        key="linear"
        value="linear"
        onClick={setSelected}
      />
      <RadioContainer
        label="Radial"
        selected={selected === "radial"}
        key="radial"
        value="radial"
        onClick={setSelected}
      />
      <RadioContainer
        label="Conic"
        selected={selected === "conic"}
        key="conic"
        value="conic"
        onClick={setSelected}
      />
    </div>
  )
}
