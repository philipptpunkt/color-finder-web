import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { cn } from "@/utils/cn"
import { Icon, IconName } from "../Icon"
import { UtilityContent } from "./UtilityContent"
import { CssToolsContent } from "./CssToolsContent"

export const NavigationLinks = () => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
      <NavigationMenu.List className="center m-0 flex list-none p-1 gap-2">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className={cn(
              "flex items-center justify-between gap-2 group",
              "rounded-lg px-3 py-2 select-none outline-none",
              "font-medium text-sm text-text-inverse-light hover:bg-custom-500 focus:shadow-custom-500 focus:shadow-[0_0_0_2px]"
            )}
          >
            Utility
            <Icon
              iconName={IconName.icCaretDown}
              className={cn(
                "w-4 h-4 text-text-inverse-light",
                "transition-transform duration-300 ease-in group-data-[state=open]:-rotate-180"
              )}
              aria-hidden
            />
          </NavigationMenu.Trigger>

          <UtilityContent />
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className={cn(
              "flex items-center justify-between gap-2 group",
              "rounded-lg px-3 py-2 select-none outline-none",
              "font-medium text-sm text-text-inverse-light hover:bg-custom-500 focus:shadow-custom-500 focus:shadow-[0_0_0_2px]"
            )}
          >
            CSS Tools
            <Icon
              iconName={IconName.icCaretDown}
              className={cn(
                "w-4 h-4 text-text-inverse-light",
                "transition-transform duration-300 ease-in group-data-[state=open]:-rotate-180"
              )}
              aria-hidden
            />
          </NavigationMenu.Trigger>

          <CssToolsContent />
        </NavigationMenu.Item>

        {/* <NavigationMenu.Item>
          <NavigationMenu.Link
            className={cn(
              "block",
              "rounded-lg px-3 py-2 select-none no-underline outline-none",
              "font-medium text-sm text-text-inverse-light hover:bg-custom-500 focus:shadow-custom-500 focus:shadow-[0_0_0_2px]"
            )}
            href="/contact"
          >
            Contact
          </NavigationMenu.Link>
        </NavigationMenu.Item> */}

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-slate-500 dark:bg-slate-700" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-slate-50 dark:bg-slate-700 transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  )
}
