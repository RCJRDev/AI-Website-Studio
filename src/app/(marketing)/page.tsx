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
  title: 'Buildwise | Custom Websites for Small Businesses',
  description: 'Professional website design and ongoing support for small businesses. Get a custom-built website with monthly maintenance starting at $49/month. Fast delivery, expert support, real results.',
  openGraph: {
    title: 'Buildwise | Custom Websites for Small Businesses',
    description: 'Professional website design and ongoing support for small businesses. Get a custom-built website with monthly maintenance starting at $49/month.',
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
