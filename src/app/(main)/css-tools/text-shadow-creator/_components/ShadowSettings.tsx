"use client"

import "react-loading-skeleton/dist/skeleton.css"
import chroma from "chroma-js"
import { Icon, IconName } from "@/components/Icon"
import { Modal } from "@/design-system/Modal/Modal"
import { lazy, Suspense, useState } from "react"
import { Spinner } from "@/design-system/Loading/Spinner"
import { cn } from "@/utils/cn"
import "react-color-palette/css"
import { DEFAULT_LIGHTNESS_THRESHOLD } from "@/components/constants"
import { InputWithLabel, Slider } from "@/design-system/Input"

const ColorPickerModal = lazy(
  () => import("@/components/ColorPicker/ColorPickerModal")
)

interface ShadowSettingsProps {
  xOffset: number
  setXOffset: (value: number) => void
  yOffset: number
  setYOffset: (value: number) => void
  blurRadius: number
  setBlurRadius: (value: number) => void
  color: string
  setColor: (value: string) => void
  textColor: string
  setTextColor: (value: string) => void
}

export function ShadowSettings({
  xOffset,
  setXOffset,
  yOffset,
  setYOffset,
  blurRadius,
  setBlurRadius,
  color,
  setColor,
  textColor,
  setTextColor,
}: ShadowSettingsProps) {
  const [isOpen, setIsOpen] = useState<false | "text" | "shadow">(false)

  function applyColor(value: string) {
    if (isOpen === "shadow") {
      setColor(value)
    }
    if (isOpen === "text") {
      setTextColor(value)
    }
    setIsOpen(false)
  }

  const rgba = chroma(color).rgba()

  const originalLightnessText = chroma(textColor).get("hsl.l")
  const originalLightnessShadow = chroma(color).get("hsl.l")

  return (
    <div
      className="flex flex-col gap-4 w-full p-4"
      style={{ gridArea: "shadowSettings" }}
    >
      <Slider
        label="Horizontal Offset"
        min={-100}
        max={100}
        value={xOffset}
        onChange={setXOffset}
      />
      <Slider
        label="Vertical Offset"
        min={-100}
        max={100}
        value={yOffset}
        onChange={setYOffset}
      />
      <Slider
        label="Blur Radius"
        min={0}
        max={100}
        value={blurRadius}
        onChange={setBlurRadius}
      />

      <div>
        <p className="font-semibold mb-2">Text Color</p>
        <div className="flex gap-4 mb-4">
          <div
            className="flex justify-center items-center h-12 w-full rounded-lg"
            style={{ backgroundColor: textColor }}
            onClick={() => setIsOpen("text")}
          >
            <Icon
              iconName={IconName.icPaintBucket}
              className={cn("text-custom-400", {
                "text-text-inverse-light dark:text-text-inverse-ligh":
                  originalLightnessText < DEFAULT_LIGHTNESS_THRESHOLD,
                "text-text-inverse-dark dark:text-text-inverse-dark":
                  originalLightnessText >= DEFAULT_LIGHTNESS_THRESHOLD,
              })}
            />
          </div>
          <InputWithLabel
            label="Hex"
            value={textColor}
            readOnly
            onChange={() => undefined}
          />
        </div>

        <p className="font-semibold mb-2">Shadow Color</p>
        <div className="flex gap-4 mb-4">
          <div
            className="flex justify-center items-center h-12 w-full rounded-lg"
            style={{ backgroundColor: color }}
            onClick={() => setIsOpen("shadow")}
          >
            <Icon
              iconName={IconName.icPaintBucket}
              className={cn({
                "text-text-inverse-light dark:text-text-inverse-light":
                  originalLightnessShadow < DEFAULT_LIGHTNESS_THRESHOLD,
                "text-text-inverse-dark dark:text-text-inverse-dark":
                  originalLightnessShadow >= DEFAULT_LIGHTNESS_THRESHOLD,
              })}
            />
          </div>
          <InputWithLabel
            label="Hex"
            value={color}
            readOnly
            onChange={() => undefined}
          />
          {isOpen ? (
            <Modal close={() => setIsOpen(false)}>
              <Suspense fallback={<Spinner />}>
                <ColorPickerModal
                  close={() => setIsOpen(false)}
                  applyColor={applyColor}
                  initialColorValue={color}
                  enableAlphaValue={true}
                  className={cn({
                    "no-document-scroll": isOpen,
                  })}
                />
              </Suspense>
            </Modal>
          ) : null}
        </div>
        <div className="flex gap-2 mb-8">
          <InputWithLabel
            label="R"
            value={rgba[0]}
            type="number"
            readOnly
            onChange={() => undefined}
          />
          <InputWithLabel
            label="G"
            value={rgba[1]}
            type="number"
            readOnly
            onChange={() => undefined}
          />
          <InputWithLabel
            label="B"
            value={rgba[2]}
            type="number"
            readOnly
            onChange={() => undefined}
          />
          <InputWithLabel
            label="A"
            value={rgba[3]}
            type="number"
            readOnly
            onChange={() => undefined}
          />
        </div>
      </div>
    </div>
  )
}
