import { Roboto_Mono } from "next/font/google"
import { cn } from "@/utils/cn"
import { Icon, IconName } from "@/components/Icon"
import { CopyCodeButton } from "./CopyCodeButton"

const robotoMono = Roboto_Mono({ subsets: ["latin"] })

export function CodeSection({
  code,
  propertyName,
}: {
  code: string
  propertyName: string
}) {
  return (
    <div className="bg-slate-900 text-text-inverse-light rounded-lg">
      <div className="flex pt-4">
        <div className="bg-slate-800 w-12 py-4 rounded-tl-lg"></div>
        <div className="flex justify-center items-center bg-slate-700 rounded-t-lg border-b border-slate-100 px-4 py-2">
          <Icon
            iconName={IconName.icFileCss}
            className="text-text-inverse-light mr-2"
          />
          <p className="font-semibold ">styles.css</p>
        </div>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="absolute left-0 top-0 w-12 text-center py-4 bg-slate-800 text-slate-500">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
        </div>
        <div className="w-12 p-4"></div>
        <div
          className={cn(
            "px-4 pt-4 pb-6 bg-slate-700 w-full",
            robotoMono.className
          )}
        >
          <p>
            <span className="text-amber-500 font-semibold">{propertyName}</span>
            <span className="text-teal-500 font-semibold">: </span>
            <span>{code}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center bg-slate-800 p-4 rounded-b-lg">
        <CopyCodeButton code={code} propertyName={propertyName} />
      </div>
    </div>
  )
}
