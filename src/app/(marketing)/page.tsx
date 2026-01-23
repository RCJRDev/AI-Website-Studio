import { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import ServicesOverview from '@/components/home/ServicesOverview'
import ProcessPreview from '@/components/home/ProcessPreview'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import PortfolioPreview from '@/components/home/PortfolioPreview'
import CTASection from '@/components/home/CTASection'
import FAQSection from '@/components/home/FAQSection'
import TrustSignals from '@/components/home/TrustSignals'

export const metadata: Metadata = {
  title: 'Buildwise | Professional Websites Starting at $2,499 | No Hidden Fees',
  description: 'Get a stunning, custom-designed website for your business starting at just $2,499. Includes ongoing support for $49/mo. 98% client satisfaction, 50+ websites delivered. 30-day money-back guarantee.',
  openGraph: {
    title: 'Buildwise | Professional Websites Starting at $2,499',
    description: 'Custom websites without the agency price tag. Starting at $2,499 + $49/mo support. 30-day guarantee. Book a free consultation today.',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSignals />
      <FeaturesSection />
      <ServicesOverview />
      <ProcessPreview />
      <PortfolioPreview />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
