'use client'

import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedElement from '@/components/ui/AnimatedElement'

const features = [
  {
    title: 'Stand Out From Competitors',
    description: 'Your website is designed from scratch for your business. No templates that look like everyone else.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Keep Visitors On Your Site',
    description: 'Fast-loading pages keep visitors engaged. Slow sites lose customers - yours will load in under 3 seconds.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Reach Customers Everywhere',
    description: 'Over 60% of your visitors are on mobile. Your site will look perfect on phones, tablets, and desktops.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Get Found On Google',
    description: 'Built with search engines in mind so customers can find you when they search for what you offer.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Never Worry About Tech',
    description: 'We handle hosting, updates, and fixes. When you need changes, we are a call or email away.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Sleep Easy at Night',
    description: 'Your site is protected with security monitoring, SSL certificates, and daily backups. We have got you covered.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

export default function FeaturesSection() {
  return (
    <Section id="features">
      <SectionHeader
        eyebrow="Why Businesses Choose Us"
        title="A website that works as hard as you do"
        description="We do not just make pretty websites. We build tools that bring you customers."
      />

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <AnimatedElement key={feature.title} delay={index * 0.1}>
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-electric-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white group">
              <div className="w-12 h-12 rounded-xl bg-electric-100 text-electric-600 flex items-center justify-center group-hover:bg-electric-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-navy-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-slate-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </Section>
  )
}
