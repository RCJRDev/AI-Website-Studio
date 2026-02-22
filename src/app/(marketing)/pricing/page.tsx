import { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedElement from '@/components/ui/AnimatedElement'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for custom website design. Landing Page $250, Standard $500, Enterprise $1,500. One monthly plan at $29/month. No surprises.',
  openGraph: {
    title: 'Pricing | Buildwise',
    description: 'Simple, transparent pricing for custom website design. One price per tier, no surprises.',
  },
}

const buildPackages = [
  {
    id: 'landing-page',
    name: 'Landing Page',
    price: '$250',
    description: 'Get online fast with a focused, high-converting single page that showcases your business.',
    bestFor: 'New businesses, freelancers, product launches, marketing campaigns',
    includes: [
      'Single page design',
      'Mobile-responsive layout',
      'Contact form',
      'Basic SEO setup',
      'Social media links',
      '1 round of revisions',
    ],
    timeline: '~1 week',
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '$500',
    description: 'A professional multi-page website that establishes your brand and drives leads.',
    bestFor: 'Small businesses, consultants, local services, personal brands',
    includes: [
      'Up to 8 pages',
      'Mobile-responsive design',
      'Contact form',
      'Advanced SEO setup',
      'Google Analytics integration',
      'Social media links',
      'Blog or news section',
      '2 rounds of revisions',
    ],
    popular: true,
    timeline: '1-2 weeks',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$1,500',
    description: 'A full-featured business platform with the advanced functionality your growing business demands.',
    bestFor: 'Established businesses, e-commerce stores, service companies with complex needs',
    includes: [
      'Unlimited pages',
      'Online booking system',
      'E-commerce & online ordering',
      'Customer accounts & portals',
      'Custom integrations',
      'Advanced SEO & analytics',
      'Priority development',
      'Unlimited revisions',
    ],
    timeline: '3-4 weeks',
  },
]

const monthlyPlan = {
  id: 'care-plan',
  name: 'Care Plan',
  price: '$29',
  description: 'Everything you need to keep your site fast, secure, and up to date — one simple price for every client.',
  includes: [
    'Managed hosting',
    'SSL certificate',
    'Daily backups',
    'Security monitoring',
    'Software updates',
    'Up to 30 min of content updates/month',
    'Email support (48h response)',
    'Monthly performance report',
  ],
}

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h1 className="heading-1 text-white">
                One price. No surprises.
              </h1>
            </AnimatedElement>
            <AnimatedElement delay={0.1}>
              <p className="mt-6 text-xl text-slate-200 leading-relaxed">
                Every tier has a single, clear price. Pick the package that fits your business and get started today.
              </p>
            </AnimatedElement>
            <AnimatedElement delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-200">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/15 backdrop-blur-sm border border-white/25">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  30-Day Money-Back Guarantee
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/15 backdrop-blur-sm border border-white/25">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Flexible Payment Plans
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/15 backdrop-blur-sm border border-white/25">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Cancel Anytime
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement>
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200">
              <h2 className="heading-3 text-navy-900 text-center mb-8">
                How Our Pricing Works
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-electric-100 text-electric-600 font-bold text-lg mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">One-Time Build Fee</h3>
                  <p className="text-slate-700">
                    Pay once for your custom website design and development. This covers the entire creation process from concept to launch.
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-100 text-accent-700 font-bold text-lg mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">Monthly Service Plan</h3>
                  <p className="text-slate-700">
                    Required ongoing support that includes hosting, security, backups, updates, and support. This keeps your site running smoothly.
                  </p>
                </div>
              </div>
              <div className="mt-8 p-4 bg-electric-50 rounded-lg border border-electric-200">
                <p className="text-sm text-electric-800 text-center">
                  <strong>Example:</strong> A Standard website ($500) + Care Plan ($29/month) = $500 upfront + $29/month ongoing
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* Website Build Packages */}
      <Section id="builds">
        <SectionHeader
          eyebrow="Website Builds"
          title="Choose your foundation"
          description="One-time investment to build your custom website. Each tier includes everything listed—no add-ons required."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {buildPackages.map((pkg, index) => (
            <AnimatedElement key={pkg.id} delay={index * 0.1}>
              <div
                id={pkg.id}
                className={`relative h-full flex flex-col p-8 rounded-2xl border-2 transition-shadow hover:shadow-xl bg-white ${
                  pkg.popular
                    ? 'border-electric-500 shadow-lg'
                    : 'border-slate-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-electric-500 text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-navy-900">{pkg.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-navy-900">{pkg.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">one-time</p>
                </div>

                <p className="text-slate-700 mb-4">{pkg.description}</p>

                <div className="mb-6 p-3 bg-slate-50 rounded-lg">
                  <p className="text-sm">
                    <span className="font-medium text-navy-900">Best for:</span>{' '}
                    <span className="text-slate-700">{pkg.bestFor}</span>
                  </p>
                </div>

                <div className="mb-6 flex items-center gap-2 text-sm text-slate-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Typical timeline: {pkg.timeline}
                </div>

                <ul className="flex-grow space-y-3 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
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
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all group ${
                    pkg.popular
                      ? 'bg-electric-500 text-white hover:bg-electric-600 hover:shadow-xl shadow-lg shadow-electric-500/30'
                      : 'bg-navy-900 text-white hover:bg-navy-800 hover:shadow-lg'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {`Choose ${pkg.name} - Free Consultation`}
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Monthly Plan */}
      <Section background="gray" id="monthly">
        <SectionHeader
          eyebrow="Monthly Care Plan"
          title="Keep your site fast, secure & updated"
          description="Required for all websites. One simple price — no tiers, no confusion. We handle the technical stuff so you can focus on your business."
        />

        <div className="mt-16 max-w-lg mx-auto">
          <AnimatedElement>
            <div
              id={`plan-${monthlyPlan.id}`}
              className="relative flex flex-col p-8 rounded-2xl border-2 border-electric-500 shadow-lg bg-white"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-electric-500 text-white">
                  Included with every website
                </span>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-navy-900">{monthlyPlan.name}</h3>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-navy-900">{monthlyPlan.price}</span>
                  <span className="text-slate-500">/month</span>
                </div>
              </div>

              <p className="text-slate-600 mb-6 text-center">{monthlyPlan.description}</p>

              <ul className="flex-grow space-y-3 mb-8">
                {monthlyPlan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
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
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="w-full text-center py-3 px-6 rounded-lg font-semibold transition-all group bg-electric-500 text-white hover:bg-electric-600 hover:shadow-xl shadow-lg shadow-electric-500/30"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* Why Monthly Plans */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <AnimatedElement>
            <div className="bg-electric-50 border border-electric-100 rounded-2xl p-8 md:p-12">
              <h2 className="heading-3 text-navy-900 mb-6">
                Why are monthly plans required?
              </h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  We've seen too many businesses invest in a website only to let it become outdated, insecure, or broken within a year. Our monthly plans prevent that.
                </p>
                <p>
                  <strong>What you get:</strong> Professional hosting, security monitoring, regular backups, software updates, and a team that knows your site inside and out. When something breaks or you need a change, we're here.
                </p>
                <p>
                  <strong>What you avoid:</strong> Security breaches, slow loading times, outdated software, and the scramble to find help when things go wrong.
                </p>
                <p>
                  Think of it like this: you wouldn't buy a car and never change the oil. Your website needs the same ongoing attention to stay healthy and effective.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray">
        <SectionHeader
          title="Pricing FAQ"
          description="Common questions about our pricing structure."
        />

        <div className="mt-12 max-w-3xl mx-auto space-y-6">
          {[
            {
              q: 'Can I pay the build fee in installments?',
              a: 'Yes. We typically collect 50% upfront to begin the project and 50% upon launch. For larger projects, we can discuss alternative payment schedules.',
            },
            {
              q: 'What happens if I want to cancel my monthly plan?',
              a: 'You can cancel with 30 days notice. We\'ll help you transition your site to another provider or provide you with all necessary files and access credentials.',
            },
            {
              q: 'Are there any additional costs I should expect?',
              a: 'Domain registration (~$15/year) and premium third-party services (like email marketing tools) are additional. We\'ll always discuss any potential extra costs before starting your project.',
            },
            {
              q: 'Do you offer discounts for annual payments?',
              a: 'Yes. Pay your monthly plan annually and receive 2 months free (that\'s about 17% off).',
            },
            {
              q: 'What if my needs change over time?',
              a: 'You can upgrade or adjust your monthly plan at any time. If you need major new features, we\'ll provide a clear quote for the additional work.',
            },
          ].map((faq, index) => (
            <AnimatedElement key={faq.q} delay={index * 0.05}>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="font-semibold text-navy-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="navy">
        <div className="text-center">
          <AnimatedElement>
            <h2 className="heading-2 text-white">
              Still have questions? Let's talk.
            </h2>
            <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
              Book a free 30-minute call. We'll understand your goals, recommend the right package, and answer any questions. Zero pressure, zero obligation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-navy-900 bg-white rounded-lg hover:bg-slate-100 hover:scale-105 transition-all shadow-xl group">
                Get My Free Consultation
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              98% of clients would recommend us. 30-day money-back guarantee on all projects.
            </p>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
