import { Card } from "../ExampleSection/Examples/Card/Card"
import { Button } from "./Button"

export function ButtonsText() {
  return (
    <Card rounded="rounded-2xl" fill>
      <div className="p-4">
        <p className="font-semibold pb-4">Button text</p>
        <Button type="text" title="default" verticalPadding />
        <Button type="text" title="hover" hover verticalPadding />
        <Button type="text" title="active" active verticalPadding />
        <Button type="text" title="disabled" disabled verticalPadding />
      </div>
    </Card>
  )
}
