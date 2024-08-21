import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { notFound } from "next/navigation"
import { images } from "./assets/images"

const COLOR_FINDER_URL = "https://www.colorfinder.app"

const maxAge = 60 * 60 * 24 * 7 // 7 days

const DEFAULT_WIDTH = 1080
const DEFAULT_QUALITY = 75

const allowedWidths = [
  16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048,
  3840,
]
const allowedQualities = [25, 50, 75, 90, 100]

const getClosestValue = (value: number, allowedValues: number[]): number => {
  return allowedValues.reduce((prev, curr) =>
    Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
  )
}

function getNumberFromQueryString(
  value: string | null,
  fallbackValue: number
): number {
  const parsedValue = typeof value === "string" ? Number(value) : fallbackValue

  return isNaN(parsedValue) ? fallbackValue : parsedValue
}

export function GET(
  req: NextRequest,
  { params }: { params: { name: string } }
) {
  const name = params.name
  const image = images[name]

  if (!image) {
    notFound()
  }

  const query = req.nextUrl.searchParams
  const w = query.get("w")
  const q = query.get("q")

  const widthParam = getNumberFromQueryString(w, DEFAULT_WIDTH)
  const qualityParam = getNumberFromQueryString(q, DEFAULT_QUALITY)

  const width = getClosestValue(widthParam, allowedWidths)
  const quality = getClosestValue(qualityParam, allowedQualities)

  return new NextResponse(null, {
    headers: {
      "Cache-Control": `public, s-maxage=${maxAge}, max-age=${maxAge}, stale-while-revalidate=${
        maxAge * 10
      }, stale-if-error=${maxAge * 10}`,
      Location: `${COLOR_FINDER_URL}/_next/image?url=${encodeURIComponent(
        image.src
      )}&w=${width}&q=${quality}`,
    },
    status: 301,
  })
}
