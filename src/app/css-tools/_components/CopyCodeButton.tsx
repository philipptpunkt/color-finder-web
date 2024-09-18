"use client"

import { Icon, IconName } from "@/components/Icon"
import { useToast } from "@/design-system/Toast/ToastProvider"
import { copyTextToClipboard } from "@/utils/copyTextToClipboard"

export function CopyCodeButton({ code }: { code: string }) {
  const { showToast } = useToast()

  const codeStringForClipboard = `background: ${code}`

  const handleClick = () => {
    copyTextToClipboard(codeStringForClipboard)
    showToast({
      type: "info",
      title: "Copied to clipboard",
      message: "The code snippet was copied to your clipboard.",
    })
  }

  return (
    <button
      onClick={handleClick}
      className="flex justify-center items-center text-slate-400 hover:bg-slate-700 px-8 py-2 rounded-lg"
    >
      <Icon
        iconName={IconName.icCopy}
        className="text-slate-400 dark:text-slate-400 mr-2"
      />
      <p className="font-semibold ">Copy Code</p>
    </button>
  )
}
