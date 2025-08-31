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
  {
    id: 4,
    title: "Bluesky",
    icon: IconName.icButterfly,
    link: "https://bsky.app/profile/philipptpunkt.bsky.social",
  },
]

export function Socials({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
      {socials.map((entry) => {
        return (
          <Link
            key={entry.id}
            href={entry.link}
            target="_blank"
            className={cn([
              "w-10",
              "h-10",
              "bg-leaf-200/50",
              "border",
              "border-leaf-300",
              "rounded-lg",
              "flex",
              "items-center",
              "justify-center",
              "text-leaf-600",
              "hover:text-leaf-800",
              "hover:bg-leaf-300/60",
              "hover:border-leaf-400",
              "hover:scale-105",
              "transition-all",
              "duration-200",
              "mr-3",
              "last:mr-0",
            ])}
            title={entry.title}
          >
            <Icon iconName={entry.icon} className="w-5 h-5" />
          </Link>
        )
      })}
    </div>
  )
}
