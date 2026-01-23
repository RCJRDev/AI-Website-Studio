'use client'

import Link from 'next/link'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedElement from '@/components/ui/AnimatedElement'

const services = [
  {
    name: 'Starter',
    price: '$500',
    description: 'A polished, professional website that gets your business online.',
    features: [
      'Up to 5 pages',
      'Mobile-responsive design',
      'Contact form',
      'Basic SEO setup',
      'Social media integration',
    ],
    href: '/pricing#starter',
  },
  {
    name: 'Growth',
    price: '$1,000',
    description: 'Built to attract visitors and capture leads for your business.',
    features: [
      'Up to 10 pages',
      'Custom design elements',
      'Blog or news section',
      'Advanced SEO',
      'Analytics integration',
      'Email capture forms',
    ],
    href: '/pricing#growth',
    popular: true,
  },
  {
    name: 'Pro',
    price: '$2,000',
    description: 'A complete digital platform with advanced features to scale.',
    features: [
      'Unlimited pages',
      'E-commerce ready',
      'Custom functionality',
      'Premium integrations',
      'Advanced analytics',
      'Priority development',
    ],
    href: '/pricing#pro',
  },
]

export default function ServicesOverview() {
  return (
    <Section background="gray">
      <SectionHeader
        eyebrow="Website Packages"
        title="Simple pricing. Clear value."
        description="One price per tier. No hidden fees. Every package includes our quality guarantee and dedicated support."
      />

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <AnimatedElement key={service.name} delay={index * 0.1}>
            <div
              className={`relative h-full p-8 rounded-2xl bg-white border-2 transition-all duration-300 hover:shadow-xl ${
                service.popular
                  ? 'border-electric-500 shadow-lg'
                  : 'border-slate-200 hover:border-electric-200'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-electric-500 text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-navy-900">{service.name}</h3>
                <p className="mt-2 text-slate-600">{service.description}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-navy-900">{service.price}</span>
                  <span className="text-slate-500 ml-1">one-time</span>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-electric-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href={service.href}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                    service.popular
                      ? 'bg-electric-500 text-white hover:bg-electric-600 shadow-lg shadow-electric-500/25'
                      : 'bg-navy-900 text-white hover:bg-navy-800'
                  }`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-slate-600 mb-4">
          All website builds include a monthly service plan ($19/month) for hosting, security, and support.
        </p>
        <Link
          href="/pricing"
          className="text-electric-500 font-semibold hover:text-electric-600 inline-flex items-center gap-2"
        >
          View full pricing details
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </Section>
  )
}
