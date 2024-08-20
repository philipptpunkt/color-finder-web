import { Card } from "../Card/Card"
import Image from "next/image"
import fish from "../assets/fish.jpg"
import { cn } from "@/utils/cn"
import { Button } from "@/components/Buttons/Button"

export function ImageCard() {
  const rounded = true
  return (
    <Card rounded="rounded-2xl" fill>
      <div className="relative w-full h-60 min-[900px]:h-full">
        <Image
          src={fish}
          alt="Image of a colorful fish against the black background"
          fill
          sizes="(min-width: 600px) 50vw, (min-width: 900px) 25vw, 100vw"
          className={cn("object-cover", {
            "rounded-2xl": rounded,
          })}
        />
        <div className="absolute bottom-0 left-0 bg-transparent w-full p-2">
          <div
            className={cn(
              "bg-slate-800 dark:bg-slate-900",
              "flex justify-center items-center",
              {
                "rounded-xl": rounded,
              }
            )}
          >
            <p className="text-slate-300 dark:text-slate-400">
              Something went wrong.
            </p>
            <Button type="text" title="Retry" bold content="hug" />
          </div>
        </div>
      </div>
    </Card>
  )
}
