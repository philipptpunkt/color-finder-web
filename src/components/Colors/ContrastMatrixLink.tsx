"use client"

import { useSearchParams } from "@/utils/useSearchParams"

export function ContrastMatrixLink() {
  const { searchParams } = useSearchParams()

  return (
    <a href={`/contrast-check?${searchParams.toString()}#contrast-matrix`}>
      <p className="mt-1 sm:mt-0 font-semibold">Contrast Matrix</p>
    </a>
  )
}
