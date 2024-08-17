import { Card } from "../ExampleSection/Examples/Card/Card"
import { Button } from "./Button"

export function ButtonsContained() {
  return (
    <Card rounded="rounded-2xl" fill>
      <div className="p-4">
        <p className="font-semibold pb-4">Button contained</p>
        <Button type="contained" title="default" verticalPadding />
        <Button type="contained" title="hover" hover verticalPadding />
        <Button type="contained" title="active" active verticalPadding />
        <Button type="contained" title="disabled" disabled verticalPadding />
      </div>
    </Card>
  )
}
