import { Content, NavigationMenuLink } from "@radix-ui/react-navigation-menu"
import { cn } from "@/utils/cn"
import { Link } from "../Link/Link"
import { LinkItem } from "./LinkItem"

export function UtilityContent() {
  return (
    <Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
      <ul className="one m-0 grid list-none gap-4 p-4 sm:w-[500px] sm:grid-cols-[0.75fr_1fr] bg-slate-50 dark:bg-slate-700">
        <li className="row-span-3 grid">
          <Link legacyBehavior passHref href="/">
            <NavigationMenuLink
              className={cn(
                "rainbow-circle",
                "flex flex-col justify-end  h-full w-full  rounded-md p-4",
                "focus:shadow-custom-500 dark:focus:shadow-custom-700 select-none no-underline outline-none focus:shadow-[0_0_0_2px]",
                "hover:scale-[102%]"
              )}
            >
              <>
                <div className="my-4 text-3xl font-normal text-text-inverse-light">
                  <span className="font-bold">Color</span>Finder
                </div>
                <p className="font-medium text-text-inverse-light text-md">
                  Tools created to enhance accessibility and efficiency for
                  better designs.
                </p>
              </>
            </NavigationMenuLink>
          </Link>
        </li>

        <LinkItem
          href="/contrast-check"
          title="Contrast Check"
          description="Easy to use tool to check custom colors or your color palette for contrast."
        />
        {/* <LinkItem
          href="/contrast-check"
          title="Contrast Check"
          description="Easy to use tool to check custom colors or your color palette for contrast"
        /> */}
      </ul>
    </Content>
  )
}
