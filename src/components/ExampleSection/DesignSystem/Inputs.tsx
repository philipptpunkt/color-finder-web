import { Input } from "@/design-system/Input/Input"
import { Card } from "../Examples/Card/Card"

export function Inputs() {
  return (
    <Card rounded="rounded-2xl" fill>
      <div className="p-4">
        <p className="font-semibold pb-4">Input</p>
        <div className="flex flex-col gap-2 mt-2">
          <Input value="" placeholder="Input default" rounded />
          <Input value="" placeholder="Input hover" hover rounded />
          <Input value="" placeholder="Input active" active rounded />
          <Input value="" placeholder="Input disabled" disabled rounded />
        </div>
      </div>
    </Card>
  )
}
