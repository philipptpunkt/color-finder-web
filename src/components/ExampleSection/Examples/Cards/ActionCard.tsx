import { Card } from "../Card/Card"
import Image from "next/image"
import sushiPlate from "../assets/sushi-plate.jpg"
import { cn } from "@/utils/cn"
import { Button } from "@/components/Buttons/Button"

export function ActionCard() {
  const rounded = true
  return (
    <Card rounded="rounded-2xl" fill>
      <div className="flex flex-col sm:flex-row">
        <div className="relative sm:w-1/2 h-80 sm:h-auto">
          <Image
            src={sushiPlate}
            alt="Plate of Sushi"
            fill
            sizes="(min-width: 600px) 33vw, (min-width: 900px) 25vw, 100vw"
            className={cn({
              "rounded-tl-2xl rounded-tr-2xl sm:rounded-tr-none sm:rounded-bl-2xl object-cover":
                rounded,
            })}
          />
        </div>
        <div className="flex flex-col justify-between p-4">
          <div>
            <h4 className="mb-1">Plate of Sashimi</h4>
            <p className="font-normal mb-6">$30</p>
            <p>
              Sake, Otoro and Kanpachi slices. Served with fresh daikon radish
              and our homemade Wasabi paste.
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <Button type="contained" title="Order now" content="limited" />
          </div>
        </div>
      </div>
    </Card>
  )
}
