"use client"

import ColorPickerModal from "@/components/ColorPicker/ColorPickerModal"
import { ContentContainer } from "@/components/Layout/ContentContainer"
import { Spinner } from "@/design-system/Loading/Spinner"
import { Modal } from "@/design-system/Modal/Modal"
import { cn } from "@/utils/cn"
import { Suspense, useCallback, useMemo, useState } from "react"
import { getContrastRatio } from "./getContrastRatio"
import { ColorBox } from "./ColorBox"
import { ResultBox } from "./ResultBox"
import "react-color-palette/css"
import {
  WCAG_AA_LARGE_TEXT_CONTRAST_RATIO,
  WCAG_AA_NORMAL_TEXT_CONTRAST_RATIO,
  WCAG_AA_UI_CONTRAST_RATIO,
  WCAG_AAA_LARGE_TEXT_CONTRAST_RATIO,
  WCAG_AAA_NORMAL_TEXT_CONTRAST_RATIO,
} from "./constants"
import chroma from "chroma-js"
import { DEFAULT_LIGHTNESS_THRESHOLD } from "@/components/constants"

export function ColorSelection({
  initialColorValue,
}: {
  initialColorValue: string | null
}) {
  const [isOpen, setIsOpen] = useState<"fore" | "back" | false>(false)

  const [foregroundColor, setForegroundColor] = useState<string | null>(null)
  const [backgroundColor, setBackgroundColor] = useState<string | null>(null)

  const applyColor = useCallback(
    (value: string) => {
      if (isOpen === "fore") {
        setForegroundColor(value)
      }

      if (isOpen === "back") {
        setBackgroundColor(value)
      }
      setIsOpen(false)
    },
    [isOpen]
  )

  const preselectedColor =
    isOpen === "fore"
      ? foregroundColor
      : isOpen === "back"
      ? backgroundColor
      : initialColorValue

  const contrastCheckResults: {
    contrastRatio: number | "notSet"
    compliance: {
      wcagAAnormalText: boolean | "notSet"
      wcagAAAnormalText: boolean | "notSet"
      wcagAAlargeText: boolean | "notSet"
      wcagAAAlargeText: boolean | "notSet"
      wcagAAui: boolean | "notSet"
    }
  } = useMemo(() => {
    if (foregroundColor && backgroundColor) {
      const contrastRatio = getContrastRatio(foregroundColor, backgroundColor)

      const compliance = {
        wcagAAnormalText: contrastRatio >= WCAG_AA_NORMAL_TEXT_CONTRAST_RATIO,
        wcagAAAnormalText: contrastRatio >= WCAG_AAA_NORMAL_TEXT_CONTRAST_RATIO,
        wcagAAlargeText: contrastRatio >= WCAG_AA_LARGE_TEXT_CONTRAST_RATIO,
        wcagAAAlargeText: contrastRatio >= WCAG_AAA_LARGE_TEXT_CONTRAST_RATIO,
        wcagAAui: contrastRatio >= WCAG_AA_UI_CONTRAST_RATIO,
      }

      return {
        contrastRatio: Math.round(contrastRatio * 100) / 100,
        compliance,
      }
    }

    return {
      contrastRatio: "notSet",
      compliance: {
        wcagAAnormalText: "notSet",
        wcagAAAnormalText: "notSet",
        wcagAAlargeText: "notSet",
        wcagAAAlargeText: "notSet",
        wcagAAui: "notSet",
      },
    }
  }, [foregroundColor, backgroundColor])

  const originalLightness = foregroundColor
    ? chroma(foregroundColor).get("hsl.l")
    : null

  const wcagaaColorUserInterfacePass = contrastCheckResults.compliance.wcagAAui
  const wcagaaColorUserInterface = wcagaaColorUserInterfacePass
    ? "bg-success-light dark:bg-success-dark"
    : "bg-error-light dark:bg-success-dark"

  return (
    <>
      <div style={{ gridArea: "foregroundColor" }}>
        <ColorBox
          title="Foreground Color"
          color={foregroundColor}
          setIsOpen={() => setIsOpen("fore")}
          className="h-full"
        />
      </div>
      <div style={{ gridArea: "backgroundColor" }}>
        <ColorBox
          title="Background Color"
          color={backgroundColor}
          setIsOpen={() => setIsOpen("back")}
          className="h-full"
        />
      </div>

      <div style={{ gridArea: "checkResults" }}>
        <ContentContainer className="w-full h-full" reducedPadding>
          <div className="mb-4">
            <p className="text-2xl font-bold ">{`Contrast Ratio: ${
              contrastCheckResults.contrastRatio === "notSet"
                ? "pick colors"
                : `${contrastCheckResults.contrastRatio}:1`
            }`}</p>
          </div>
          <ResultBox
            wcagaaPass={contrastCheckResults.compliance.wcagAAnormalText}
            wcagaaaPass={contrastCheckResults.compliance.wcagAAAnormalText}
          >
            <div
              className="flex justify-center items-center rounded-md w-full"
              style={{
                backgroundColor: backgroundColor || "",
                color: foregroundColor || "",
              }}
            >
              Normal Text
            </div>
          </ResultBox>
          <div className="h-4" />
          <ResultBox
            wcagaaPass={contrastCheckResults.compliance.wcagAAlargeText}
            wcagaaaPass={contrastCheckResults.compliance.wcagAAAlargeText}
          >
            <div
              className="flex justify-center items-center rounded-md w-full"
              style={{
                backgroundColor: backgroundColor || "",
                color: foregroundColor || "",
              }}
            >
              <p className="font-bold">Bold Text</p>
              &nbsp;/&nbsp;
              <p className="text-xl">Large Text</p>
            </div>
          </ResultBox>
          <div className="h-8" />

          <div>
            <div className="flex items-center mb-2 font-semibold">
              <p className="mr-2">User Interface</p>
              <p
                className={cn(
                  "p-2 rounded-md",
                  wcagaaColorUserInterfacePass === "notSet"
                    ? "bg-slate-300 dark:bg-slate-700"
                    : wcagaaColorUserInterface
                )}
              >
                WCAG&nbsp;AA
              </p>
            </div>
            <div
              className="px-4 py-8 rounded-md"
              style={{ backgroundColor: backgroundColor || "" }}
            >
              <button
                className={cn(
                  "rounded-md p-2 w-full border border-slate-300 mb-2",
                  {
                    "text-text-inverse-light dark:text-text-inverse-light":
                      originalLightness !== null &&
                      originalLightness < DEFAULT_LIGHTNESS_THRESHOLD,
                    "text-text-inverse-dark dark:text-text-inverse-dark":
                      originalLightness !== null &&
                      originalLightness >= DEFAULT_LIGHTNESS_THRESHOLD,
                  }
                )}
                style={{ backgroundColor: foregroundColor || "" }}
              >
                Click Me
              </button>
              <input
                placeholder="your input goes here"
                className="rounded-md border-2 w-full px-4 py-2"
                style={{ borderColor: foregroundColor || "" }}
              />
            </div>
          </div>
        </ContentContainer>
      </div>

      {isOpen ? (
        <Modal close={() => setIsOpen(false)}>
          <Suspense fallback={<Spinner />}>
            <ColorPickerModal
              close={() => setIsOpen(false)}
              applyColor={applyColor}
              initialColorValue={preselectedColor}
              enableAlphaValue={true}
              className={cn({
                "no-document-scroll": isOpen,
              })}
              title={
                isOpen === "fore"
                  ? "Pick a Foreground Color"
                  : "Pick a Background Color"
              }
            />
          </Suspense>
        </Modal>
      ) : null}
    </>
  )
}
