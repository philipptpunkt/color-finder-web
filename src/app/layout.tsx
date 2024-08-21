import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { Navigation } from "@/components/Navigation/Navigation"
import { Footer } from "@/components/Footer/Footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Color Finder",
  description: `Find and create perfect color palettes with Color Finder. Our intuitive tool helps designers and developers generate, preview, and apply color variations in real-time. Enhance your projects with the ideal color scheme using Color Finder at colorfinder.app.`,
  openGraph: {
    title: "Color Finder - Find Your Perfect Color",
    description:
      "Find and create perfect color palettes with Color Finder. Our tool helps you generate, preview, and apply color variations in real-time.",
    url: "https://colorfinder.app",
    siteName: "Color Finder",
    images: [
      {
        url: "https://colorfinder.app/api/image/colorFinderOpenGraph?w=1200&q=90",
        alt: "Color Finder Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Color Finder - Find Your Perfect Color",
    description:
      "Find, create and test perfect color palettes with Color Finder.",
    images: [
      "https://colorfinder.app/api/image/colorFinderOpenGraph?w=1200&q=90",
    ],
  },
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
