import type { Metadata } from "next"
import newrelic from "newrelic"
import Script from "next/script"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { Footer } from "@/components/Footer/Footer"
import { ToastProvider } from "@/design-system/Toast/ToastProvider"
import "./globals.css"
import { Navigation } from "@/components/Navigation/Navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Color Finder - Create Color Palettes Easily",
  description: `Find and create color palettes that match Tailwind CSS color palettes with Color Finder. Our intuitive tool helps designers and developers generate, preview, and apply color variations in real-time. Enhance your projects with the ideal color scheme using Color Finder at colorfinder.app.`,
  metadataBase: new URL("https://colorfinder.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Color Finder - Create Color Palettes and Styles Easily",
    description:
      "Explore Color Finder's collection of CSS tools, including gradient generators, color palette creators, contrast checkers, and more. Enhance your web development projects with accessible and visually appealing designs.",
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
    title: "Color Finder - Create Color Palettes and Styles Easily",
    description:
      "Color Finder offers a suite of CSS tools including gradient generators, color palette creators, and contrast checkers. Streamline your design process and create stunning, accessible websites.",
    images: [
      "https://colorfinder.app/api/image/colorFinderOpenGraph?w=1200&q=90",
    ],
  },
}

function NewRelicBrowser() {
  const browserTimingHeader = newrelic.getBrowserTimingHeader({
    hasToRemoveScriptWrapper: true,
  })

  return (
    <Script
      id="nr-browser-agent"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: browserTimingHeader }}
    />
  )
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
          <ToastProvider>
            {children}
            <Navigation />
            <Footer />
          </ToastProvider>
        </ThemeProvider>
        <NewRelicBrowser />
      </body>
    </html>
  )
}
