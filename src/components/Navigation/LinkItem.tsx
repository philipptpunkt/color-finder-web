"use client"

import * as React from "react"
import { Link as NavigationMenuLink } from "@radix-ui/react-navigation-menu"
import { cn } from "@/utils/cn"
import { Link } from "../Link/Link"
import { usePathname } from "next/navigation"

interface LinkItemProps {
  title: string
  description?: string
  href: string
}

export function LinkItem({ title, href, description }: LinkItemProps) {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <li>
      <Link legacyBehavior passHref href={href}>
        <NavigationMenuLink
          // asChild
          active={isActive}
          className={cn(
            "flex flex-col",
            "hover:bg-slate-200 dark:hover:bg-slate-800 focus:shadow-custom-500 focus:shadow-[0_0_0_2px]",
            "select-none rounded-md p-2 no-underline outline-none transition-colors",
            "hover:scale-[102%]",
            {
              "bg-custom-100 dark:bg-custom-700": isActive,
            }
          )}
        >
          <>
            <p className="font-semibold text-text-light dark:text-text-dark mb-1">
              {title}
            </p>
            <p className="font-normal text-sm text-slate-500 dark:text-text-dark">
              {description}
            </p>
          </>
        </NavigationMenuLink>
      </Link>
    </li>
  )
}
