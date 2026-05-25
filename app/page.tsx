import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import UseCasesSection from "@/components/use-cases-section"
import PricingSection from "@/components/pricing-section"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"
import Btn from "@/components/btn-download"






export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main>
        <HeroSection />
        <UseCasesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <div className="fixed bottom-4 right-4">
     <Btn url="https://calendly.com/bookings-singular/schedule-a-meeting-with-singular" label="Schedule Meeting" />
     </div>
      </main>
      <Footer />
    </div>
  )
}
