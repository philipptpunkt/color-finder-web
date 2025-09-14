import { HeroSection } from "./_components/HeroSection"
import { MainToolSection } from "./_components/MainToolSection"
import { FeaturesSection } from "./_components/FeaturesSection"
import { CTASection } from "./_components/CTASection"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MainToolSection />
      <FeaturesSection />
      <CTASection />
    </main>
  )
}
