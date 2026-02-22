'use client'

import Link from 'next/link'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedElement from '@/components/ui/AnimatedElement'

const services = [
  {
    name: 'Landing Page',
    price: '$250',
    description: 'A focused, high-converting single page that gets your business online fast.',
    features: [
      'Single page design',
      'Mobile-responsive layout',
      'Contact form',
      'Basic SEO setup',
      'Social media links',
    ],
    href: '/pricing#landing-page',
  },
  {
    name: 'Standard',
    price: '$500',
    description: 'A professional multi-page website that establishes your brand and drives leads.',
    features: [
      'Up to 8 pages',
      'Mobile-responsive design',
      'Contact form',
      'Advanced SEO setup',
      'Blog or news section',
      'Analytics integration',
    ],
    href: '/pricing#standard',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$1,500',
    description: 'A full-featured platform with booking, ordering, and customer accounts.',
    features: [
      'Unlimited pages',
      'Booking & ordering systems',
      'Customer accounts & portals',
      'Custom integrations',
      'Advanced analytics',
      'Priority development',
    ],
    href: '/pricing#enterprise',
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
                <p className="mt-2 text-slate-700">{service.description}</p>
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
                  href="/contact"
                  className={`block w-full text-center py-3.5 px-6 rounded-lg font-semibold transition-all min-h-[48px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    service.popular
                      ? 'bg-electric-600 text-white hover:bg-electric-700 shadow-lg shadow-electric-600/25 focus-visible:ring-electric-500'
                      : 'bg-navy-900 text-white hover:bg-navy-800 focus-visible:ring-navy-900'
                  }`}
                  aria-label={`Get started with ${service.name} package for ${service.price}`}
                >
                  {service.popular ? 'Get Started - Most Popular' : 'Get Started'}
                </Link>
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-slate-700 mb-4">
          All website builds include a monthly Care Plan ($29/month) for hosting, security, and support.
        </p>
        <Link
          href="/pricing"
          className="text-electric-600 font-semibold hover:text-electric-700 inline-flex items-center gap-2 px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2 transition-colors"
        >
          View full pricing details
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </Section>
  )
}
