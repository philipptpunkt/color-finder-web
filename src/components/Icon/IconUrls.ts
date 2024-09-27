import { IconName } from "./IconName"
import icArrowBendDownRight from "./svgs/ic-arrow-bend-down-right.svg"
import icArrowBendUpLeft from "./svgs/ic-arrow-bend-up-left.svg"
import icArrowClockwise from "./svgs/ic-arrows-clockwise.svg"
import icCaretDown from "./svgs/ic-caret-down.svg"
import icChartLine from "./svgs/ic-chart-line.svg"
import icCheckCircle from "./svgs/ic-check-circle.svg"
import icCopy from "./svgs/ic-copy.svg"
import icCurrencyDollarSimple from "./svgs/ic-currency-dollar-simple.svg"
import icEyedropper from "./svgs/ic-eyedropper.svg"
import icFaders from "./svgs/ic-faders.svg"
import icFileCss from "./svgs/ic-file-css.svg"
import icFileJsx from "./svgs/ic-file-jsx.svg"
import icGithub from "./svgs/ic-github-logo.svg"
import icInfo from "./svgs/ic-info.svg"
import icInstagram from "./svgs/ic-instagram-logo.svg"
import icLinkedin from "./svgs/ic-linkedin-logo.svg"
import icMoon from "./svgs/ic-moon.svg"
import icPaintBucket from "./svgs/ic-paint-bucket.svg"
import icPalette from "./svgs/ic-palette.svg"
import icPaperPlaneTilt from "./svgs/ic-paper-plane-tilt.svg"
import icPlus from "./svgs/ic-plus.svg"
import icPulse from "./svgs/ic-pulse.svg"
import icSun from "./svgs/ic-sun.svg"
import icUser from "./svgs/ic-user.svg"
import icUsers from "./svgs/ic-users.svg"
import icWarningCircle from "./svgs/ic-warning-circle.svg"
import icXCircle from "./svgs/ic-x-circle.svg"
import icX from "./svgs/ic-x.svg"

export interface SvgInfo {
  src: string
}
export const iconUrls = {
  icArrowBendDownRight,
  icArrowBendUpLeft,
  icArrowClockwise,
  icCaretDown,
  icChartLine,
  icCheckCircle,
  icCopy,
  icCurrencyDollarSimple,
  icEyedropper,
  icFaders,
  icFileCss,
  icFileJsx,
  icGithub,
  icInfo,
  icInstagram,
  icLinkedin,
  icMoon,
  icPaintBucket,
  icPalette,
  icPaperPlaneTilt,
  icPlus,
  icPulse,
  icSun,
  icUser,
  icUsers,
  icWarningCircle,
  icXCircle,
  icX,
} satisfies Record<IconName, SvgInfo>
