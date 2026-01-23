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
  title: 'Buildwise | Professional Websites $500–$2,000 | No Hidden Fees',
  description: 'Custom-designed websites for your business. Starter $500, Growth $1,000, Pro $2,000. Includes hosting and support for $19/mo. 98% client satisfaction. 30-day money-back guarantee.',
  openGraph: {
    title: 'Buildwise | Professional Websites $500–$2,000',
    description: 'Custom websites without the agency price tag. Starter $500, Growth $1,000, Pro $2,000. Book a free consultation today.',
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
