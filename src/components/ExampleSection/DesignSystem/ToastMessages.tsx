import { Toast } from "@/design-system/Toast/Toast"
import { Card } from "../Examples/Card/Card"

export function ToastMessages() {
  return (
    <Card
      rounded="rounded-2xl"
      fill
      backgroundColor="bg-slate-200 dark:bg-background-highlight-dark"
    >
      <div className="p-4">
        <p className="font-semibold pb-4">Toast Messages</p>
        <Toast
          key="info"
          type="info"
          title="Info Message"
          message="A short, optional info message"
        />
        <Toast
          key="success"
          type="success"
          title="Success Message"
          message="Something was done successfully"
        />
        <Toast
          key="warning"
          type="warning"
          title="Warning"
          message="Could have been our fault"
        />
        <Toast
          key="error"
          type="error"
          title="Error Message"
          message="Oh boy this should not have happened"
        />
      </div>
    </Card>
  )
}
