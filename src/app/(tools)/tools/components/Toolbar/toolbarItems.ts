import { IconName } from "@/design-system"
import { PanelId } from "../types"

export enum ToolbarId {
  Palette = "palette",
  Settings = "settings",
  Contrast = "contrast",
  Gradient = "gradient",
  TextShadow = "text-shadow",
  BoxShadow = "box-shadow",
  Theme = "theme",
  Info = "info",
  SignOut = "sign-out",
}

type ToolbarItem = {
  id: ToolbarId
  title: string
  href: string
  iconName: IconName
}

export const paletteToolItems: ToolbarItem[] = [
  {
    id: ToolbarId.Palette,
    title: "Palette",
    href: `/tools/palettes?panel=${PanelId.Color}`,
    iconName: IconName.icPalette,
  },
  {
    id: ToolbarId.Settings,
    title: "Settings",
    href: `/tools/palettes/settings?panel=${PanelId.Settings}`,
    iconName: IconName.icGear,
  },
  {
    id: ToolbarId.Contrast,
    title: "Contrast",
    href: "/tools/palettes/contrast",
    iconName: IconName.icCircleHalf,
  },
]

export const cssToolItems: ToolbarItem[] = [
  {
    id: ToolbarId.Gradient,
    title: "Gradient",
    href: "/tools/gradient",
    iconName: IconName.icGradient,
  },
  {
    id: ToolbarId.TextShadow,
    title: "Text Shadow",
    href: "/tools/text-shadow",
    iconName: IconName.icTextT,
  },
  {
    id: ToolbarId.BoxShadow,
    title: "Box Shadow",
    href: "/tools/box-shadow",
    iconName: IconName.icSquare,
  },
]

export const footerItems: ToolbarItem[] = [
  {
    id: ToolbarId.Theme,
    title: "Theme",
    href: "#",
    iconName: IconName.icMoon,
  },
  {
    id: ToolbarId.Info,
    title: "Info",
    href: "/tools",
    iconName: IconName.icInfo,
  },
  {
    id: ToolbarId.SignOut,
    title: "Sign Out",
    href: "#",
    iconName: IconName.icSignOut,
  },
]
