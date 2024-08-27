"use client"

import { lazy, Suspense, useCallback, useState } from "react"
import { Icon, IconName } from "../Icon"
import { Button } from "../Buttons/Button"
import { useSearchParams } from "@/utils/useSearchParams"
import { usePathname, useRouter } from "next/navigation"
import "react-color-palette/css"
import { cn } from "@/utils/cn"
import { Modal } from "@/design-system/Modal/Modal"
import { Spinner } from "@/design-system/Loading/Spinner"

const ColorPickerModal = lazy(() => import("./ColorPickerModal"))

export function ColorPicker() {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  const pathname = usePathname()
  const { searchParams, createQueryString } = useSearchParams()

  const hexValueFromQuery = searchParams.get("hex")

  const applyColor = useCallback((value: string) => {
    router.push(pathname + "?" + createQueryString("hex", value), {
      scroll: false,
    })
    setIsOpen(false)
  }, [])

  return (
    <>
      <Button
        type="contained"
        content="hug"
        onClick={() => setIsOpen(true)}
        title={
          <Icon
            iconName={IconName.icPaintBucket}
            color="text-text-inverse-light"
          />
        }
      />
      {isOpen ? (
        <Modal close={() => setIsOpen(false)}>
          <Suspense fallback={<Spinner />}>
            <ColorPickerModal
              close={() => setIsOpen(false)}
              applyColor={applyColor}
              initialColorValue={hexValueFromQuery}
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
