import { Icon, IconHighlight, IconName } from "@/components/Icon"
import { Card } from "../Card/Card"
import { Input } from "@/components/Input/Input"
import { Button } from "@/components/Buttons/Button"

export function Chat() {
  return (
    <Card
      rounded="rounded-2xl"
      horizontalPadding
      verticalPadding
      backgroundColor="bg-white"
    >
      <div className="flex flex-col justify-between h-96">
        <div className="flex justify-between">
          <IconHighlight
            iconName={IconName.icUser}
            className="w-6 h-6"
            backgroundColor="bg-custom-100 dark:bg-custom-700"
          />
          <div>
            <p className="text-lg font-semibold">Pam Hudson</p>
            <p className="text-label">pam@example.com</p>
          </div>
          <IconHighlight
            iconName={IconName.icPlus}
            className="w-6 h-6"
            border
          />
        </div>

        <p className="self-start max-w-[75%] text-sm bg-custom-50 dark:bg-custom-950 rounded-md py-2 px-3">
          Hey, how about dinner tonight?
        </p>
        <p className="self-end max-w-[75%] text-sm bg-custom-500 dark:bg-custom-500 rounded-md py-2 px-3 text-text-inverse-light dark:text-text-inverse-dark">
          Sounds good, do you have a place in mind?
        </p>
        <p className="self-start max-w-[75%] text-sm bg-custom-50 dark:bg-custom-950 rounded-md py-2 px-3">
          I wanted to try out the new sushi place downtown. Should I make a
          reservation?
        </p>
        <p className="self-end max-w-[75%] text-sm bg-custom-500  dark:bg-custom-500 rounded-md py-2 px-3 text-text-inverse-light dark:text-text-inverse-dark">
          Oh yes! I love sushi!!
        </p>

        <div className="flex">
          <Input rounded placeholder="type something" />
          <div className="w-2" />
          <Button
            type="contained"
            content="hug"
            title={
              <Icon iconName={IconName.icPaperPlaneTilt} className="w-6 h-6" />
            }
            disabled
          />
        </div>
      </div>
    </Card>
  )
}
