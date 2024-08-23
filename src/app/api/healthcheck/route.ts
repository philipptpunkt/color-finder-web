import { NextResponse } from "next/server"

export function GET() {
  return NextResponse.json(
    { status: "All good here" },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-cache",
      },
    }
  )
}
