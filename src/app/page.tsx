"use client"

import { useTheme } from "next-themes"
import { Header } from "./_components/Header"
import HeroSection from "./_components/HeroSection"
import { ToolsSection } from "./_components/ToolsSection"
import { FeaturesSection } from "./_components/FeaturesSection"
import { CTASection } from "./_components/CTASection"
import { Footer } from "./_components/Footer"

export default function HomePage() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="min-h-screen bg-background text-text">
      <Header onThemeToggle={toggleTheme} />
      <main>
        <HeroSection />
        <ToolsSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
