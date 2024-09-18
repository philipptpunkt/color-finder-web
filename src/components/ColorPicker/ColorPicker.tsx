"use client"

import { lazy, Suspense, useCallback, useState } from "react"
import { Icon, IconName } from "../Icon"
import { Button } from "../Buttons/Button"
import "react-color-palette/css"
import { cn } from "@/utils/cn"
import { Modal } from "@/design-system/Modal/Modal"
import { Spinner } from "@/design-system/Loading/Spinner"

const ColorPickerModal = lazy(() => import("./ColorPickerModal"))

export function ColorPicker({
  applyColor,
  initialColorValue,
  enableAlphaValue,
}: {
  applyColor: (value: string) => void
  initialColorValue: string | null
  enableAlphaValue?: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)

  const onApply = useCallback(
    (value: string) => {
      applyColor(value)
      setIsOpen(false)
    },
    [applyColor]
  )

  return (
    <>
      <Button
        type="contained"
        content="hug"
        onClick={() => setIsOpen(true)}
        title={
          <Icon
            iconName={IconName.icPaintBucket}
            className="text-text-inverse-light"
          />
        }
      />
      {isOpen ? (
        <Modal close={() => setIsOpen(false)}>
          <Suspense fallback={<Spinner />}>
            <ColorPickerModal
              close={() => setIsOpen(false)}
              applyColor={onApply}
              initialColorValue={initialColorValue}
              enableAlphaValue={enableAlphaValue}
              className={cn({
                "no-document-scroll": isOpen,
              })}
            />
          </Suspense>
        </Modal>
      ) : null}
    </>
  )
}
