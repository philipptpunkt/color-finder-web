import { Input } from "@/design-system/Input"
import { Wheel } from "./Wheel"
import GradientTypeSelection from "./GradientTypeSelection"
import { GradientType } from "../GradientSection"

interface DegreeSelectionProps {
  currentDegree: number
  onRotation: (degree: number) => void
  value: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  gradientType: GradientType
  setGradientType: (type: GradientType) => void
}

export function DegreeSelection({
  currentDegree,
  onRotation,
  value,
  onChange,
  gradientType,
  setGradientType,
}: DegreeSelectionProps) {
  return (
    <div className="p-4">
      <p className="font-semibold mb-4">Rotation</p>
      <div className="flex">
        <div className="mr-4">
          <Wheel
            size={200}
            degree={currentDegree}
            onDegreeChange={onRotation}
            disabled={gradientType === "radial"}
          />
          <div className="h-4" />
          <Input
            type="number"
            value={value}
            onChange={onChange}
            placeholder="Enter degree"
            className="text-center"
          />
        </div>
        <div className="w-full">
          <GradientTypeSelection
            selected={gradientType}
            setSelected={setGradientType}
          />
        </div>
      </div>
    </div>
  )
}
