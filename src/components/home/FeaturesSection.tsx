'use client'

import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedElement from '@/components/ui/AnimatedElement'

const features = [
  {
    title: 'Custom Design, Not Templates',
    description: 'Every website is designed specifically for your business. No cookie-cutter templates or generic layouts.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Built for Performance',
    description: 'Fast-loading websites that score high on Google PageSpeed. Better performance means better user experience and SEO.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Mobile-First Approach',
    description: 'Over 60% of web traffic comes from mobile devices. Your site will look and work great on every screen size.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'SEO Foundation',
    description: 'Every site is built with search engines in mind. Proper structure, metadata, and speed optimization included.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Ongoing Expert Support',
    description: 'Your website is never "done." Our monthly plans include updates, maintenance, and priority support.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Secure & Reliable',
    description: 'SSL certificates, regular backups, and security monitoring come standard. Your data and your visitors are protected.',
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
        eyebrow="Why Choose Buildwise"
        title="Everything you need. Nothing you don't."
        description="We build websites that actually help your business grow—not just look pretty."
      />

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <AnimatedElement key={feature.title} delay={index * 0.1}>
            <div className="p-6 rounded-2xl border border-slate-200 hover:border-electric-200 hover:shadow-lg transition-all duration-300 bg-white group">
              <div className="w-12 h-12 rounded-xl bg-electric-100 text-electric-600 flex items-center justify-center group-hover:bg-electric-500 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-navy-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-slate-600">
                {feature.description}
              </p>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </Section>
  )
}
