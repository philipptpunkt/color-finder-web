"use client"

import { ColorValues } from "@/components/Colors/generateColorValues"
import { getContrastRatio } from "../getContrastRatio"
import { cn } from "@/utils/cn"
import {
  WCAG_AA_LARGE_TEXT_CONTRAST_RATIO,
  WCAG_AA_NORMAL_TEXT_CONTRAST_RATIO,
  WCAG_AA_UI_CONTRAST_RATIO,
  WCAG_AAA_LARGE_TEXT_CONTRAST_RATIO,
  WCAG_AAA_NORMAL_TEXT_CONTRAST_RATIO,
} from "../constants"
import ComponentSelector from "./ComponentSelector"
import { useEffect, useMemo, useState } from "react"
import StandardSelector from "./StandardSelector"

export function CustomColorMatrix({
  colorValues,
}: {
  colorValues: ColorValues
}) {
  const [selectedOption, setSelectedOption] = useState("normalText")
  const [selectedStandard, setSelectedStandard] = useState("aa")

  const extendedColorValues = [...colorValues]

  extendedColorValues.unshift({
    color: "#FFFFFF",
    position: 0,
    lightness: 20,
  })

  extendedColorValues.push({
    color: "#000000",
    position: 1000,
    lightness: 0,
  })

  useEffect(() => {
    if (selectedOption === "uiComp") {
      setSelectedStandard("aa")
    }
  }, [selectedOption])

  const contrastRatioThreshold = useMemo(() => {
    if (selectedOption === "normalText") {
      return selectedStandard === "aa"
        ? WCAG_AA_NORMAL_TEXT_CONTRAST_RATIO
        : WCAG_AAA_NORMAL_TEXT_CONTRAST_RATIO
    }

    if (selectedOption === "largeText") {
      return selectedStandard === "aa"
        ? WCAG_AA_LARGE_TEXT_CONTRAST_RATIO
        : WCAG_AAA_LARGE_TEXT_CONTRAST_RATIO
    }

    return WCAG_AA_UI_CONTRAST_RATIO
  }, [selectedOption, selectedStandard])

  return (
    <section className="relative px-4">
      <div id="contrast-matrix" className="absolute top-[-130px]" />
      <h2 className="my-8">Custom Color Contrast Matrix</h2>

      <div className="flex mb-4">
        <ComponentSelector
          selected={selectedOption}
          setSelected={setSelectedOption}
        />
        <div className="w-16" />
        <StandardSelector
          selected={selectedStandard}
          setSelected={setSelectedStandard}
          disableAAA={selectedOption === "uiComp"}
        />
      </div>

      <div className="overflow-x-scroll">
        <table className="table-fixed border-collapse border border-slate-300 dark:border-slate-600 md:w-full bg-slate-50 dark:bg-slate-800">
          <thead>
            <tr>
              <th className="border border-slate-300 dark:border-slate-600 p-1 font-light text-sm md:font-semibold">
                Colors
              </th>
              {extendedColorValues.map((colorValue) => {
                return (
                  <th
                    key={colorValue.color}
                    className="h-12 sm:h-16 font-light text-sm md:font-semibold text-center border border-slate-300 dark:border-slate-600"
                  >
                    {colorValue.position === 0
                      ? "White"
                      : colorValue.position === 1000
                      ? "Black"
                      : colorValue.position}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border border-slate-300 dark:border-slate-600" />
              {extendedColorValues.map((colorValue) => {
                return (
                  <td
                    key={colorValue.color}
                    className="h-12 sm:h-16 border border-slate-300 dark:border-slate-600"
                    style={{ backgroundColor: colorValue.color }}
                  />
                )
              })}
            </tr>
            {colorValues.map(({ color: rowColor }) => {
              return (
                <tr key={rowColor}>
                  <th
                    className="border border-slate-300 dark:border-slate-600"
                    style={{ backgroundColor: rowColor }}
                  />
                  {extendedColorValues.map(({ color: columnColor }) => {
                    const contrastRaw = getContrastRatio(columnColor, rowColor)
                    const contrast = Math.round(contrastRaw * 100) / 100
                    return (
                      <td
                        key={columnColor}
                        className={cn(
                          "h-auto sm:h-16 p-1",
                          "font-light text-sm md:font-semibold text-center",
                          "border border-slate-300 dark:border-slate-600",
                          {
                            "bg-success-lighter dark:bg-success-darker":
                              contrast >= contrastRatioThreshold,
                          }
                        )}
                      >{`${contrast}:1`}</td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
