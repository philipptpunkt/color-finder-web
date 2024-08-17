import { cn } from "@/utils/cn"
import { Card } from "../Card/Card"

export function Graph() {
  return (
    <Card rounded="rounded-xl">
      <p className="mt-4 ml-4 font-semibold text-lg">Overview</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 840 400"
        preserveAspectRatio="xMidYMid meet"
        className={cn(
          "w-full h-auto",
          "text-custom-600 dark:text-custom-400",
          "fill-text-light-light dark:fill-text-light-dark",
          "stroke-text-light-light dark:stroke-text-light-dark"
        )}
      >
        <text x="50" y="350" fontSize="12">
          $500
        </text>
        <text x="50" y="280" fontSize="12">
          $1000
        </text>
        <text x="50" y="210" fontSize="12">
          $1500
        </text>
        <text x="50" y="140" fontSize="12">
          $2000
        </text>
        <text x="50" y="70" fontSize="12">
          $2500
        </text>

        <text x="120" y="380" fontSize="12">
          Jan
        </text>
        <text x="180" y="380" fontSize="12">
          Feb
        </text>
        <text x="240" y="380" fontSize="12">
          Mar
        </text>
        <text x="300" y="380" fontSize="12">
          Apr
        </text>
        <text x="360" y="380" fontSize="12">
          May
        </text>
        <text x="420" y="380" fontSize="12">
          Jun
        </text>
        <text x="480" y="380" fontSize="12">
          Jul
        </text>
        <text x="540" y="380" fontSize="12">
          Aug
        </text>
        <text x="600" y="380" fontSize="12">
          Sep
        </text>
        <text x="660" y="380" fontSize="12">
          Oct
        </text>
        <text x="720" y="380" fontSize="12">
          Nov
        </text>
        <text x="780" y="380" fontSize="12">
          Dec
        </text>

        <rect x="110" y="140" width="40" height="210" fill="currentColor" />
        <rect x="170" y="210" width="40" height="140" fill="currentColor" />
        <rect x="230" y="224" width="40" height="126" fill="currentColor" />
        <rect x="290" y="196" width="40" height="154" fill="currentColor" />
        <rect x="350" y="70" width="40" height="280" fill="currentColor" />
        <rect x="410" y="40" width="40" height="310" fill="currentColor" />
        <rect x="470" y="196" width="40" height="154" fill="currentColor" />
        <rect x="530" y="280" width="40" height="70" fill="currentColor" />
        <rect x="590" y="140" width="40" height="210" fill="currentColor" />
        <rect x="650" y="252" width="40" height="98" fill="currentColor" />
        <rect x="710" y="210" width="40" height="140" fill="currentColor" />
        <rect x="770" y="50" width="40" height="300" fill="currentColor" />

        <line x1="100" y1="50" x2="100" y2="350" />

        <line x1="100" y1="350" x2="820" y2="350" />
      </svg>
    </Card>
  )
}
