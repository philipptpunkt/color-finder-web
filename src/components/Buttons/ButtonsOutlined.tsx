import { Card } from "../ExampleSection/Examples/Card/Card"
import { Button } from "./Button"

export function ButtonsOutlined() {
  return (
    <Card rounded="rounded-2xl" fill>
      <div className="p-4">
        <p className="font-semibold pb-4">Button outlined</p>
        <Button type="outlined" title="default" verticalPadding />
        <Button type="outlined" title="hover" hover verticalPadding />
        <Button type="outlined" title="active" active verticalPadding />
        <Button type="outlined" title="disabled" disabled verticalPadding />
      </div>
    </Card>
  )
}
