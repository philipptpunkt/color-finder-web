import { Icon, IconHighlight, IconName } from "@/components/Icon"
import { Card } from "../Card/Card"
import { Input } from "@/components/Input/Input"
import { Button } from "@/components/Buttons/Button"

export function InputCard() {
  return (
    <Card rounded="rounded-2xl" horizontalPadding verticalPadding>
      <div className="flex flex-col justify-between h-96">
        <div className="mt-4">
          <p className="text-2xl font-semibold mb-2">Create new List</p>
          <p className="text-sm text-text-light-light dark:text-text-light-dark">
            You can add list items after you have created a new list.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold mb-2">Name</p>
          <Input rounded placeholder="Name of your list" />
        </div>
        <div>
          <p className="text-sm font-semibold mb-2">Tags</p>
          <Input rounded placeholder="You can add optional tags" />
        </div>

        <div className="w-2" />
        <div className="flex justify-between">
          <Button type="outlined" content="limited" title="Cancel" />
          <div className="w-8" />
          <Button type="contained" content="limited" title="Create" />
        </div>
      </div>
    </Card>
  )
}
