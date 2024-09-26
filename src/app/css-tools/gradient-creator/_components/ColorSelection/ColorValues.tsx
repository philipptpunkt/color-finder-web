import { InputWithLabel } from "@/design-system/Input/InputWithLabel"
import chroma from "chroma-js"

interface ColorValuesProps {
  hex: string
  hsva: {
    h: number
    s: number
    v: number
    a: number
  }
}

export function ColorValues({ hex, hsva }: ColorValuesProps) {
  const rgba = chroma(hex).rgba()

  return (
    <div className="p-4">
      <p className="font-semibold mb-4">Color Values</p>
      <InputWithLabel
        label="Hex"
        value={hex}
        readOnly
        onChange={() => undefined}
      />

      <div className="flex gap-2 my-3">
        <InputWithLabel
          label="R"
          value={rgba[0]}
          type="number"
          readOnly
          onChange={() => undefined}
        />
        <InputWithLabel
          label="G"
          value={rgba[1]}
          type="number"
          readOnly
          onChange={() => undefined}
        />
        <InputWithLabel
          label="B"
          value={rgba[2]}
          type="number"
          readOnly
          onChange={() => undefined}
        />
        <InputWithLabel
          label="A"
          value={rgba[3]}
          type="number"
          readOnly
          onChange={() => undefined}
        />
      </div>

      <div className="flex gap-2 mb-3">
        <InputWithLabel
          label="H"
          value={Math.round(hsva.h)}
          type="number"
          onChange={() => undefined}
          readOnly
        />
        <InputWithLabel
          label="S"
          value={Math.round(hsva.s)}
          type="number"
          onChange={() => undefined}
          readOnly
        />
        <InputWithLabel
          label="V"
          value={Math.round(hsva.v)}
          type="number"
          onChange={() => undefined}
          readOnly
        />
        <InputWithLabel
          label="A"
          value={Math.round(hsva.a * 100) / 100}
          type="number"
          onChange={() => undefined}
          readOnly
        />
      </div>
    </div>
  )
}
