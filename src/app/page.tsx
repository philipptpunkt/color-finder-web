import HeroSection from "./_components/HeroSection"
import { ToolsSection } from "./_components/ToolsSection"
import { FeaturesSection } from "./_components/FeaturesSection"
import { CTASection } from "./_components/CTASection"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ToolsSection />
      <FeaturesSection />
      <CTASection />
    </main>
  )
}
