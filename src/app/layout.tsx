import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { ThemeToggle } from "@/components/ThemeChanger/ThemeToogle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UI Color Theme picker",
  description: "Try out different colors",
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
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
