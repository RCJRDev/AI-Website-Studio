import { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedElement from '@/components/ui/AnimatedElement'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for custom website design and monthly support plans. Website builds from $750, monthly support from $49/month.',
  openGraph: {
    title: 'Pricing | Buildwise',
    description: 'Transparent pricing for custom website design and monthly support plans.',
  },
}

const buildPackages = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$750 – $1,000',
    description: 'Perfect for new businesses, freelancers, and simple online presence needs.',
    bestFor: 'Freelancers, solo professionals, new businesses',
    includes: [
      'Up to 5 pages',
      'Mobile-responsive design',
      'Contact form',
      'Basic SEO setup',
      'Social media links',
      'Google Analytics integration',
      '2 rounds of revisions',
    ],
    timeline: '1-2 weeks',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$1,500 – $2,500',
    description: 'For established businesses ready to expand their online reach and generate more leads.',
    bestFor: 'Growing businesses, local services, consultants',
    includes: [
      'Up to 10 pages',
      'Custom design elements',
      'Blog or news section',
      'Advanced SEO optimization',
      'Email capture & newsletter signup',
      'CRM integration',
      'Lead generation forms',
      'Analytics dashboard',
      '3 rounds of revisions',
    ],
    popular: true,
    timeline: '2-3 weeks',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$3,000 – $5,000',
    description: 'Full-featured websites for businesses with complex needs and high growth ambitions.',
    bestFor: 'Established businesses, e-commerce, service companies',
    includes: [
      'Unlimited pages',
      'E-commerce functionality',
      'Custom features & integrations',
      'Advanced animations',
      'Membership/booking systems',
      'Multi-language support',
      'Premium third-party integrations',
      'Advanced analytics & tracking',
      'Priority development',
      'Unlimited revisions',
    ],
    timeline: '3-4 weeks',
  },
]

const monthlyPlans = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$49 – $79',
    description: 'Essential maintenance for simple websites.',
    bestFor: 'Starter package clients, low-traffic sites',
    includes: [
      'Managed hosting',
      'SSL certificate',
      'Weekly backups',
      'Security monitoring',
      'Software updates',
      'Up to 30 min of content updates/month',
      'Email support (48h response)',
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '$99 – $149',
    description: 'Comprehensive care for growing businesses.',
    bestFor: 'Growth package clients, active websites',
    includes: [
      'Everything in Basic, plus:',
      'Daily backups',
      'Performance monitoring',
      'Up to 1 hour of updates/month',
      'Priority email support (24h response)',
      'Monthly performance report',
      'Basic SEO monitoring',
    ],
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$249 – $399',
    description: 'White-glove service for mission-critical websites.',
    bestFor: 'Pro package clients, e-commerce, high-traffic',
    includes: [
      'Everything in Standard, plus:',
      'Real-time backups',
      'Advanced security features',
      'Up to 3 hours of updates/month',
      'Same-day support response',
      'Phone support available',
      'Quarterly strategy call',
      'Advanced analytics & SEO reports',
      'Uptime guarantee (99.9%)',
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h1 className="heading-1 text-white">
                Transparent pricing, real value
              </h1>
            </AnimatedElement>
            <AnimatedElement delay={0.1}>
              <p className="mt-6 text-xl text-slate-300">
                No hidden fees, no surprise costs. Choose the package that fits your needs and budget.
              </p>
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
                  <p className="text-slate-600">
                    Pay once for your custom website design and development. This covers the entire creation process from concept to launch.
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-100 text-accent-600 font-bold text-lg mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">Monthly Service Plan</h3>
                  <p className="text-slate-600">
                    Required ongoing support that includes hosting, security, backups, updates, and support. This keeps your site running smoothly.
                  </p>
                </div>
              </div>
              <div className="mt-8 p-4 bg-electric-50 rounded-lg border border-electric-100">
                <p className="text-sm text-electric-700 text-center">
                  <strong>Example:</strong> A Growth website ($2,000) + Standard plan ($129/month) = $2,000 upfront + $129/month ongoing
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
          description="One-time investment to build your custom website. Price depends on complexity and specific requirements."
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

                <p className="text-slate-600 mb-4">{pkg.description}</p>

                <div className="mb-6 p-3 bg-slate-50 rounded-lg">
                  <p className="text-sm">
                    <span className="font-medium text-navy-900">Best for:</span>{' '}
                    <span className="text-slate-600">{pkg.bestFor}</span>
                  </p>
                </div>

                <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
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
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                    pkg.popular
                      ? 'bg-electric-500 text-white hover:bg-electric-600 shadow-lg shadow-electric-500/25'
                      : 'bg-navy-900 text-white hover:bg-navy-800'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Monthly Plans */}
      <Section background="gray" id="monthly">
        <SectionHeader
          eyebrow="Monthly Service Plans"
          title="Ongoing support & maintenance"
          description="Required for all websites. Choose the level of support that matches your needs."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {monthlyPlans.map((plan, index) => (
            <AnimatedElement key={plan.id} delay={index * 0.1}>
              <div
                id={`plan-${plan.id}`}
                className={`relative h-full flex flex-col p-8 rounded-2xl border-2 transition-shadow hover:shadow-xl bg-white ${
                  plan.popular
                    ? 'border-electric-500 shadow-lg'
                    : 'border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-electric-500 text-white">
                      Recommended
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-navy-900">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-navy-900">{plan.price}</span>
                    <span className="text-slate-500">/month</span>
                  </div>
                </div>

                <p className="text-slate-600 mb-4">{plan.description}</p>

                <div className="mb-6 p-3 bg-slate-50 rounded-lg">
                  <p className="text-sm">
                    <span className="font-medium text-navy-900">Best for:</span>{' '}
                    <span className="text-slate-600">{plan.bestFor}</span>
                  </p>
                </div>

                <ul className="flex-grow space-y-3 mb-8">
                  {plan.includes.map((item) => (
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
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-electric-500 text-white hover:bg-electric-600 shadow-lg shadow-electric-500/25'
                      : 'bg-navy-900 text-white hover:bg-navy-800'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </AnimatedElement>
          ))}
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
              Not sure which plan is right for you?
            </h2>
            <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
              Book a free consultation and we'll help you choose the right package for your business goals and budget.
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
