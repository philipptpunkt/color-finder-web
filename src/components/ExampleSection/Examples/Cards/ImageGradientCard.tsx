import { Card } from "../Card/Card"
import Image from "next/image"
import newYork from "../assets/new-york-bw.jpg"
import { cn } from "@/utils/cn"

export function ImageGradientCard() {
  const rounded = true
  return (
    <Card rounded="rounded-2xl" fill>
      <div className="relative w-full h-60 min-[600px]:h-full">
        <Image
          src={newYork}
          alt="New York houses from the air in black and white photography"
          fill
          priority
          sizes="(min-width: 600px) 50vw, (min-width: 900px) 33vw, 100vw"
          className={cn("object-cover", {
            "rounded-2xl": rounded,
          })}
        />
        <div
          className={cn(
            "flex items-end",
            "absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-custom-700 to-transparent",
            {
              "rounded-2xl": rounded,
            }
          )}
        >
          <div className="p-8">
            <p className="text-custom-50 text-5xl font-bold">Visit</p>
            <p className="text-custom-100 text-6xl font-bold">New York</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
