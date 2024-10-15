import { Input } from "@/design-system/Input"
import { Card } from "../Examples/Card/Card"

export function Inputs() {
  return (
    <Card rounded="rounded-2xl" fill>
      <div className="p-4">
        <p className="font-semibold pb-4">Input</p>
        <div className="flex flex-col gap-2 mt-2">
          <Input key="default" placeholder="Input default" rounded readOnly />
          <Input key="hover" placeholder="Input hover" hover rounded readOnly />
          <Input
            key="active"
            placeholder="Input active"
            active
            rounded
            readOnly
          />
          <Input
            key="disabled"
            placeholder="Input disabled"
            disabled
            rounded
            readOnly
          />
        </div>
      </div>
    </Card>
  )
}
