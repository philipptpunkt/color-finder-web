import { Icon, IconName } from "@/components/Icon"
import { cn } from "@/utils/cn"

export type ToastMessageType = "info" | "success" | "warning" | "error"

interface ToastProps {
  type: ToastMessageType
  close: () => void
  title: string
  message?: string
}

function ToastIcon({ type }: { type: ToastMessageType }) {
  switch (type) {
    case "error":
      return (
        <Icon iconName={IconName.icXCircle} color="text-text-inverse-light" />
      )
    case "warning":
      return (
        <Icon
          iconName={IconName.icWarningCircle}
          color="text-text-inverse-light"
        />
      )
    case "success":
      return (
        <Icon
          iconName={IconName.icCheckCircle}
          color="text-text-inverse-light"
        />
      )
    default:
      return <Icon iconName={IconName.icInfo} color="text-text-inverse-light" />
  }
}

export function Toast({ type, close, title, message }: ToastProps) {
  return (
    <div
      className={cn(
        "cursor-pointer z-30 overflow-hidden my-2",
        "rounded-lg",
        "flex w-full max-w-[400px] bg-slate-50 dark:bg-slate-700"
      )}
      onClick={close}
    >
      <div
        className={cn(
          "flex justify-center items-center grow rounded-l-lg p-2",
          {
            "bg-custom-200 dark:bg-custom-800": type === "info",
            "bg-green-400": type === "success",
            "bg-amber-300": type === "warning",
            "bg-red-400": type === "error",
          }
        )}
      >
        <ToastIcon type={type} />
      </div>
      <div className="flex flex-col justify-center w-full px-8 py-2">
        <p className="font-bold">{title}</p>
        {message ? <p className="text-sm ">{message}</p> : null}
      </div>
    </div>
  )
}
