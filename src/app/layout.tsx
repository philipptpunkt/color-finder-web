import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { ThemeToggle } from "@/components/ThemeChanger/ThemeToogle"
import { ColorWheel } from "@/components/ColorWheel/ColorWheel"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Color Theme Picker",
  description: `Try out different colors and how they work with components. There are several example components privided which will respond to your color pick. Light and Dark mode are available as well of course.`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          {children}
          <ColorWheel />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
