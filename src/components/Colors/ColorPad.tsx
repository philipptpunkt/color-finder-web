"use client"

import { cn } from "@/utils/cn"
import { Icon, IconName } from "../Icon"
import { useToast } from "@/design-system/Toast/ToastProvider"
import { copyTextToClipboard } from "@/utils/copyTextToClipboard"
import "./styles.css"

export function ColorPad({
  hexValue,
  backgroundColor,
  textColor,
  position,
  isUserPick,
}: {
  hexValue: string
  backgroundColor: string
  textColor: string
  position: string | number
  isUserPick: boolean
}) {
  const { showToast } = useToast()

  const handleClick = () => {
    copyTextToClipboard(hexValue)
    showToast({
      type: "info",
      title: "Copied to clipboard",
      message: "The hex value was copied to your clipboard. Happy coloring!",
    })
  }

  return (
    <div
      className="color-pad-wrapper cursor-pointer flex flex-row sm:flex-col w-full justify-center items-center lg:rounded-lg py-4 lg:mx-2"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
      onClick={handleClick}
    >
      <div
        className={cn(
          "color-pad-text text-center text-sm sm:text-xs lg:text-sm pr-4 sm:p-0",
          {
            "font-black": isUserPick,
          }
        )}
      >
        {position}
      </div>
      <div
        className={cn(
          "color-pad-text text-center text-sm sm:text-xs lg:text-sm uppercase",
          {
            "font-black": isUserPick,
          }
        )}
      >
        {hexValue}
      </div>
      <div
        className="flex justify-center items-center"
        style={{ color: textColor }}
      >
        <Icon
          className="color-pad-icon w-8 h-8"
          iconName={IconName.icEyedropper}
          style={{ color: textColor }}
        />
      </div>
    </div>
  )
}
