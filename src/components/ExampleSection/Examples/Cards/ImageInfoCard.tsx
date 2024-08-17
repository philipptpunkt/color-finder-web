import { Card } from "../Card/Card"
import Image from "next/image"
import newYorkHouses from "../assets/new-york-houses.jpg"
import { cn } from "@/utils/cn"
import { Button } from "@/components/Buttons/Button"

export function ImageInfoCard() {
  const rounded = true

  return (
    <Card rounded="rounded-2xl" fill horizontalPadding verticalPadding>
      <div className="flex min-[900px]:flex-col min-[900px]:h-full">
        <div className="relative w-1/2 min-[900px]:w-full h-60 min-[900px]:h-40 lg:h-64">
          <Image
            src={newYorkHouses}
            alt="New York houses view from the streets in black and white photography"
            fill
            priority
            sizes="(min-width: 900px) 33vw, 50vw"
            className={cn("object-cover", {
              "rounded-xl": rounded,
            })}
          />
        </div>
        <div className="flex flex-col justify-between grow ml-4 min-[900px]:ml-0">
          <p className="text-sm font-semibold text-custom-600 mt-8">
            Only 2 rooms left
          </p>
          <p className="text-2xl min-[600px]:text-3xl min-[900px]:text-2xl lg:text-3xl font-bold">
            The Continental
          </p>
          <p className="text-lg min-[600px]:text-xl min-[900px]:text-lg lg:text-xl font-semibold">
            $299.00
          </p>
          <Button type="contained" title="Book now" />
        </div>
      </div>
    </Card>
  )
}
