'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import DemoHeader from '@/components/demos/DemoHeader'
import DemoFooter from '@/components/demos/DemoFooter'

const featuredServices = [
  {
    name: 'Signature Massage',
    duration: '60 or 90 min',
    price: 'From $120',
    description: 'Our most popular massage, customized to your needs with aromatherapy and hot stones.',
  },
  {
    name: 'Hydrating Facial',
    duration: '75 min',
    price: '$145',
    description: 'Deep cleansing and hydration treatment for radiant, glowing skin.',
  },
  {
    name: 'Couples Retreat',
    duration: '2 hours',
    price: '$350',
    description: 'Side-by-side massage, champagne, and private relaxation time together.',
  },
]

const membershipTiers = [
  {
    name: 'Essentials',
    price: 99,
    frequency: '/month',
    features: [
      'One 60-min massage monthly',
      '15% off additional services',
      '10% off retail products',
      'Priority booking',
    ],
  },
  {
    name: 'Luxe',
    price: 179,
    frequency: '/month',
    popular: true,
    features: [
      'One 90-min massage monthly',
      'One facial per quarter',
      '20% off additional services',
      '15% off retail products',
      'Complimentary upgrades',
      'Guest passes (2/year)',
    ],
  },
  {
    name: 'Ultimate',
    price: 299,
    frequency: '/month',
    features: [
      'Two services monthly',
      '25% off additional services',
      '20% off retail products',
      'VIP lounge access',
      'Unlimited guest passes',
      'Exclusive member events',
    ],
  },
]

const spaIcon = (
  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center hover:scale-105 transition-transform">
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  </div>
)

export default function HavenWellnessHome() {
  const [selectedTier, setSelectedTier] = useState('Luxe')

  return (
    <div className="min-h-screen bg-stone-50">
      <DemoHeader
        brandName="Haven Wellness"
        icon={spaIcon}
        baseHref="/demos/haven-wellness"
        navLinks={[
          { label: 'Home', href: '/demos/haven-wellness' },
          { label: 'Services', href: '/demos/haven-wellness/services' },
          { label: 'Membership', href: '#membership' },
          { label: 'Gift Cards', href: '#gift-cards' },
        ]}
        ctaText="Book Now"
        ctaHref="/demos/haven-wellness/services"
        colorScheme="light"
        accentColor="text-teal-600"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-stone-100 via-teal-50 to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-300 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-200 rounded-full filter blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-teal-600 font-medium tracking-wide mb-4"
            >
              Luxury Spa & Wellness Center
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-stone-800 leading-tight"
            >
              Your sanctuary for
              <span className="block text-teal-600 font-normal">rest and renewal</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl text-stone-600 leading-relaxed"
            >
              Escape the everyday and discover a haven of tranquility. Our expert therapists and luxurious treatments are designed to restore your body, calm your mind, and renew your spirit.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/demos/haven-wellness/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition-colors font-medium text-lg shadow-lg shadow-teal-600/25"
              >
                Book an Appointment
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-stone-300 text-stone-700 rounded-full hover:border-teal-500 hover:text-teal-600 transition-colors font-medium text-lg"
              >
                Explore Services
              </a>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block" aria-hidden="true">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="text-stone-400"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section id="services" className="py-24 bg-white scroll-mt-20" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal-600 font-medium tracking-wide mb-2 uppercase text-sm">Our Services</p>
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-light text-stone-800">Signature Experiences</h2>
            <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Each treatment is thoughtfully designed to provide a transformative experience for your body and mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-stone-50 to-teal-50/50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300 border border-stone-100"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-stone-800">{service.name}</h3>
                <p className="text-sm text-teal-600 mt-1">{service.duration}</p>
                <p className="mt-4 text-stone-600 leading-relaxed">{service.description}</p>
                <p className="mt-4 text-2xl font-light text-stone-800">{service.price}</p>
                <Link
                  href="/demos/haven-wellness/services"
                  className="mt-6 inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition-colors group"
                >
                  Book Now
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/demos/haven-wellness/services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-teal-600 text-teal-600 rounded-full hover:bg-teal-600 hover:text-white transition-colors font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* The Haven Experience */}
      <section className="py-24 bg-stone-900 text-white" aria-labelledby="experience-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-teal-400 font-medium tracking-wide mb-2 uppercase text-sm">The Haven Experience</p>
              <h2 id="experience-heading" className="text-3xl sm:text-4xl font-light">Where wellness meets luxury</h2>
              <p className="mt-6 text-stone-300 text-lg leading-relaxed">
                From the moment you arrive, every detail is designed to put you at ease. Sink into our plush robes, sip herbal tea in our relaxation lounge, and let the outside world fade away.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-8" role="list" aria-label="Company statistics">
                {[
                  { value: '15+', label: 'Expert Therapists' },
                  { value: '50+', label: 'Treatments Offered' },
                  { value: '98%', label: 'Client Satisfaction' },
                  { value: '10', label: 'Years of Excellence' },
                ].map((stat) => (
                  <div key={stat.label} role="listitem">
                    <div className="text-3xl font-light text-teal-400">{stat.value}</div>
                    <div className="text-sm text-stone-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-teal-600 to-emerald-700 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-12 h-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                    </div>
                    <p className="text-white/90 font-medium">Our Relaxation Lounge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-24 bg-gradient-to-br from-stone-50 to-teal-50/50 scroll-mt-20" aria-labelledby="membership-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal-600 font-medium tracking-wide mb-2 uppercase text-sm">Membership</p>
            <h2 id="membership-heading" className="text-3xl sm:text-4xl font-light text-stone-800">Make wellness a ritual</h2>
            <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Join our membership program and enjoy exclusive benefits, priority booking, and significant savings on the services you love.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <motion.article
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 relative cursor-pointer transition-all duration-300 ${
                  selectedTier === tier.name
                    ? 'ring-2 ring-teal-500 shadow-xl scale-[1.02]'
                    : 'shadow-sm hover:shadow-lg'
                }`}
                onClick={() => setSelectedTier(tier.name)}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal-500 text-white text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-medium text-stone-800">{tier.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-light text-stone-800">${tier.price}</span>
                  <span className="text-stone-500">{tier.frequency}</span>
                </div>
                <ul className="mt-6 space-y-3" role="list">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-stone-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full mt-8 py-3 rounded-full font-medium transition-colors ${
                    selectedTier === tier.name
                      ? 'bg-teal-600 text-white hover:bg-teal-500'
                      : 'border-2 border-stone-300 text-stone-700 hover:border-teal-500 hover:text-teal-600'
                  }`}
                >
                  Join {tier.name}
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Cards */}
      <section id="gift-cards" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-3xl p-8 md:p-16 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-light">Give the gift of relaxation</h2>
            <p className="mt-4 text-teal-100 text-lg max-w-2xl mx-auto leading-relaxed">
              Haven Wellness gift cards make the perfect present for any occasion. Available in any amount, delivered instantly by email.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-white text-teal-600 rounded-full hover:bg-teal-50 transition-colors font-medium shadow-lg">
                Purchase Gift Card
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-colors font-medium">
                Check Balance
              </button>
            </div>
          </div>
        </div>
      </section>

      <DemoFooter
        brandName="Haven Wellness"
        icon={spaIcon}
        description="Your sanctuary for rest, renewal, and transformation."
        sections={[
          {
            title: 'Services',
            links: [
              { label: 'Massage Therapy', href: '/demos/haven-wellness/services' },
              { label: 'Facials & Skincare', href: '/demos/haven-wellness/services' },
              { label: 'Body Treatments', href: '/demos/haven-wellness/services' },
              { label: 'Packages', href: '/demos/haven-wellness/services' },
            ],
          },
          {
            title: 'Information',
            links: [
              { label: 'About Us' },
              { label: 'Membership', href: '#membership' },
              { label: 'Gift Cards', href: '#gift-cards' },
              { label: 'Careers' },
            ],
          },
        ]}
        contactInfo={{
          email: 'hello@havenwellness.demo',
          phone: '(555) 234-5678',
          address: ['123 Serenity Lane', 'Wellness City, WC 12345'],
        }}
        colorScheme="dark"
      />
    </div>
  )
}
