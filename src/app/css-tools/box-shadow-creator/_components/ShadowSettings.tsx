"use client"

import { InputWithLabel } from "@/design-system/Input/InputWithLabel"
import "./slider.css"
import "react-loading-skeleton/dist/skeleton.css"
import { Slider } from "./Slider"
import chroma from "chroma-js"
import { Icon, IconName } from "@/components/Icon"
import { Modal } from "@/design-system/Modal/Modal"
import { lazy, Suspense, useState } from "react"
import { Spinner } from "@/design-system/Loading/Spinner"
import { cn } from "@/utils/cn"
import "react-color-palette/css"
import { DEFAULT_LIGHTNESS_THRESHOLD } from "@/components/constants"

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
  spreadRadius: number
  setSpreadRadius: (value: number) => void
  color: string
  setColor: (value: string) => void
}

export function ShadowSettings({
  xOffset,
  setXOffset,
  yOffset,
  setYOffset,
  blurRadius,
  setBlurRadius,
  spreadRadius,
  setSpreadRadius,
  color,
  setColor,
}: ShadowSettingsProps) {
  const [isOpen, setIsOpen] = useState(false)

  function applyColor(value: string) {
    setColor(value)
    setIsOpen(false)
  }

  const rgba = chroma(color).rgba()

  const originalLightness = chroma(color).get("hsl.l")

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
      <Slider
        label="Shadow Size / Spread Radius"
        min={-50}
        max={50}
        value={spreadRadius}
        onChange={setSpreadRadius}
      />

      <div>
        <p className="font-semibold mb-2">Shadow Color</p>
        <div className="flex gap-4 mb-4">
          <div
            className="flex justify-center items-center h-12 w-full rounded-lg"
            style={{ backgroundColor: color }}
            onClick={() => setIsOpen(true)}
          >
            <Icon
              iconName={IconName.icPaintBucket}
              className={cn({
                "text-text-inverse-light":
                  originalLightness < DEFAULT_LIGHTNESS_THRESHOLD,
                "text-text-inverse-dark":
                  originalLightness >= DEFAULT_LIGHTNESS_THRESHOLD,
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
