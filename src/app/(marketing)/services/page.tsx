import { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedElement from '@/components/ui/AnimatedElement'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Custom website design and development services for small businesses. From simple landing pages to full e-commerce solutions, we build websites that drive results.',
  openGraph: {
    title: 'Services | Buildwise',
    description: 'Custom website design and development services for small businesses.',
  },
}

const services = [
  {
    id: 'website-design',
    title: 'Website Design & Development',
    description: 'Custom-designed websites built with modern technology. No templates, no shortcuts—just quality craftsmanship that represents your brand.',
    features: [
      'Custom design tailored to your brand',
      'Mobile-responsive layouts',
      'Fast-loading performance',
      'SEO-ready structure',
      'Accessibility compliance',
      'Content management system',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    description: 'Sell online with a store built for conversions. We create shopping experiences that turn browsers into buyers.',
    features: [
      'Secure payment processing',
      'Inventory management',
      'Shipping integrations',
      'Customer accounts',
      'Order management',
      'Sales analytics',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'High-converting single-page designs for marketing campaigns, product launches, or lead generation.',
    features: [
      'Conversion-focused design',
      'A/B testing ready',
      'Form integrations',
      'Analytics tracking',
      'Fast deployment',
      'Mobile optimization',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: 'ongoing-support',
    title: 'Ongoing Support & Maintenance',
    description: 'Your website is never "done." Our monthly plans keep your site secure, updated, and performing at its best.',
    features: [
      'Security monitoring',
      'Regular backups',
      'Software updates',
      'Content updates',
      'Performance optimization',
      'Priority support',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 'seo',
    title: 'SEO & Search Visibility',
    description: 'Get found online. We build every site with search engines in mind and offer ongoing SEO services to improve your rankings.',
    features: [
      'Technical SEO setup',
      'Keyword optimization',
      'Local SEO',
      'Schema markup',
      'Performance optimization',
      'Monthly reporting',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: 'integrations',
    title: 'Third-Party Integrations',
    description: 'Connect your website with the tools you already use. From CRMs to booking systems, we make everything work together.',
    features: [
      'CRM integrations',
      'Email marketing',
      'Scheduling tools',
      'Payment processors',
      'Social media',
      'Analytics platforms',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h1 className="heading-1 text-white">
                Services built for your success
              </h1>
            </AnimatedElement>
            <AnimatedElement delay={0.1}>
              <p className="mt-6 text-xl text-slate-300">
                From design to launch and beyond, we provide everything you need to establish and grow your online presence.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedElement key={service.id} delay={index * 0.1}>
              <div className="h-full p-8 rounded-2xl border border-slate-200 hover:border-electric-200 hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-14 h-14 rounded-xl bg-electric-100 text-electric-600 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold text-navy-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg
                        className="w-4 h-4 text-electric-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Why Monthly Plans Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedElement>
              <p className="text-sm font-semibold uppercase tracking-wider text-electric-500 mb-3">
                Why Monthly Plans?
              </p>
              <h2 className="heading-2 text-navy-900">
                Your website needs ongoing care
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                A website isn't a "set it and forget it" project. Security threats evolve, software needs updates, and your business grows. Our monthly plans ensure your site stays secure, fast, and relevant.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.1}>
              <ul className="mt-8 space-y-4">
                {[
                  'Security monitoring and threat protection',
                  'Regular backups so you never lose data',
                  'Software and plugin updates',
                  'Content updates when you need them',
                  'Performance monitoring and optimization',
                  'A dedicated team you can actually reach',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
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
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <div className="mt-8">
                <Link href="/pricing#monthly" className="btn-primary">
                  View Monthly Plans
                </Link>
              </div>
            </AnimatedElement>
          </div>

          <AnimatedElement delay={0.2} direction="left">
            <div className="bg-slate-100 rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-electric-500 text-white mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Peace of Mind Included
                </h3>
                <p className="text-slate-600 mb-8">
                  Focus on running your business while we handle the technical details. Our team monitors your site 24/7 so you don't have to.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-electric-500">99.9%</div>
                    <div className="text-sm text-slate-500 mt-1">Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-electric-500">24h</div>
                    <div className="text-sm text-slate-500 mt-1">Response</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-electric-500">Daily</div>
                    <div className="text-sm text-slate-500 mt-1">Backups</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="navy">
        <div className="text-center">
          <AnimatedElement>
            <h2 className="heading-2 text-white">
              Ready to discuss your project?
            </h2>
            <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
              Book a free consultation and let's talk about what you need. No pressure, no obligation—just a conversation about your goals.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-navy-900 bg-white rounded-lg hover:bg-slate-100 transition-colors">
                Book Your Free Consultation
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
