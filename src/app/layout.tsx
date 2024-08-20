import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { Navigation } from "@/components/Navigation/Navigation"
import "./globals.css"
import { Footer } from "@/components/Footer/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Color Finder",
  description: `Find and create perfect color palettes with Color Finder. Our intuitive tool helps designers and developers generate, preview, and apply color variations in real-time. Enhance your projects with the ideal color scheme using Color Finder at colorfinder.app.`,
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
          <Navigation />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
