import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FlyerSection } from "@/components/flyer-section"
import { IntroVideoSection } from "@/components/intro-video-section"
import { FeaturesSection } from "@/components/features-section"
import { VideoSection } from "@/components/video-section"
import { UsageSection } from "@/components/usage-section"
import { InstallationSection } from "@/components/installation-section"
import { PricingSection } from "@/components/pricing-section"
import { B2BSection } from "@/components/b2b-section"
import { TrustSection } from "@/components/trust-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        <HeroSection />
        <FlyerSection />
        <IntroVideoSection />
        <FeaturesSection />
        <VideoSection />
        <UsageSection />
        <InstallationSection />
        <PricingSection />
        <B2BSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
