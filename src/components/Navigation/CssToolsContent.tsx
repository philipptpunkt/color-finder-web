import { Content } from "@radix-ui/react-navigation-menu"
import { LinkItem } from "./LinkItem"

export function CssToolsContent() {
  return (
    <Content className="absolute top-0 left-0 w-full sm:w-auto">
      <ul className="m-0 grid list-none gap-4 p-4 sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
        <LinkItem
          title="CSS Tools Overview"
          description="Find all the available CSS Tools on one page"
          href="/css-tools"
        />
        <LinkItem
          title="Gradient Creator"
          description="An interactive tool to generate gradients in various forms and colors."
          href="/css-tools/gradient-creator"
        />
        <LinkItem
          title="Box Shadow Creator"
          description="Adjust offsets, blur, shadow size and color of Box Shadows in real-time."
          href="/css-tools/box-shadow-creator"
        />
        <LinkItem
          title="Text Shadow Creator"
          description="Generate Text Shadows in real-time with no code."
          href="/css-tools/text-shadow-creator"
        />
      </ul>
    </Content>
  )
}
