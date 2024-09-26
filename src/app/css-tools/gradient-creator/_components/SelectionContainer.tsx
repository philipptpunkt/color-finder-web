import { cn } from "@/utils/cn"
import { Icon, IconButton, IconName } from "@/components/Icon"
import "react-color-palette/css"

export function SelectionContainer({
  percentage,
  hex,
  selected,
  onSelect,
  onRemove,
  disableRemove,
}: {
  percentage: number
  hex: string
  selected: boolean
  onSelect: () => void
  onRemove: () => void
  disableRemove: boolean
}) {
  return (
    <li
      onClick={onSelect}
      className={cn(
        "flex justify-between",
        "border-2 border-border-light dark:border-border-dark hover:border-slate-400 hover:dark:border-border-dark-hover",
        "rounded-lg p-1 font-semibold cursor-pointer",
        {
          "bg-custom-500 dark:bg-custom-800": selected,
          "text-text-inverse-light": selected,
        }
      )}
    >
      <div className="flex items-center grow">
        <div
          className="h-12 w-12 rounded-md mr-2"
          style={{ backgroundColor: hex }}
        />
        <p className="font-semibold mr-2">{hex}</p>
        <div className="grow mr-2">
          <p className="text-center">{percentage}</p>
        </div>
      </div>
      <button
        className="m-2"
        onClick={(event) => {
          if (!disableRemove) {
            event.stopPropagation()
            onRemove()
          }
        }}
      >
        <Icon
          iconName={IconName.icX}
          className={cn(
            "h-6 w-6 text-slate-400 dark:text-slate-400 hover:text-slate-500 hover:dark:text-slate-300",
            {
              "text-text-inverse-light hover:text-white": selected,
            }
          )}
        />
      </button>
    </li>
  )
}
