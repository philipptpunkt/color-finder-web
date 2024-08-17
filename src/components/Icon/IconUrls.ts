import { IconName } from "./IconName"
import icArrowBendDownRight from "./svgs/ic-arrow-bend-down-right.svg"
import icArrowBendUpLeft from "./svgs/ic-arrow-bend-up-left.svg"
import icArrowClockwise from "./svgs/ic-arrows-clockwise.svg"
import icChartLine from "./svgs/ic-chart-line.svg"
import icCurrencyDollarSimple from "./svgs/ic-currency-dollar-simple.svg"
import icFaders from "./svgs/ic-faders.svg"
import icMoon from "./svgs/ic-moon.svg"
import icPaperPlaneTilt from "./svgs/ic-paper-plane-tilt.svg"
import icPlus from "./svgs/ic-plus.svg"
import icPulse from "./svgs/ic-pulse.svg"
import icSun from "./svgs/ic-sun.svg"
import icUser from "./svgs/ic-user.svg"
import icUsers from "./svgs/ic-users.svg"

export interface SvgInfo {
  src: string
}
export const iconUrls = {
  icArrowBendDownRight,
  icArrowBendUpLeft,
  icArrowClockwise,
  icChartLine,
  icCurrencyDollarSimple,
  icFaders,
  icMoon,
  icPaperPlaneTilt,
  icPlus,
  icPulse,
  icSun,
  icUser,
  icUsers,
} satisfies Record<IconName, SvgInfo>
