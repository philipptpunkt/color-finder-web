import Link from "next/link"
import { Icon, IconName } from "../Icon"
import { cn } from "@/utils/cn"

const socials = [
  {
    id: 1,
    title: "LinkedIn",
    icon: IconName.icLinkedin,
    link: "https://linkedin.com/in/trentmann",
  },
  {
    id: 2,
    title: "Github",
    icon: IconName.icGithub,
    link: "https://github.com/philipptpunkt",
  },
  {
    id: 3,
    title: "Instagram",
    icon: IconName.icInstagram,
    link: "https://www.instagram.com/philipptpunkt/",
  },
]

export function Socials({ className }: { className?: string }) {
  return (
    <div className={cn("flex", className)}>
      {socials.map((entry) => {
        return (
          <Link
            key={entry.id}
            href={entry.link}
            target="_blank"
            className="mr-4 hover:scale-[110%]"
          >
            <Icon iconName={entry.icon} />
          </Link>
        )
      })}
    </div>
  )
}
