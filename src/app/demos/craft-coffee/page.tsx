'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import DemoHeader from '@/components/demos/DemoHeader'
import DemoFooter from '@/components/demos/DemoFooter'

const featuredCoffees = [
  {
    name: 'Ethiopian Yirgacheffe',
    origin: 'Gedeo Zone, Ethiopia',
    flavor: 'Bright, floral, citrus notes with a wine-like finish',
    roast: 'Light',
    price: 18,
    gradient: 'from-amber-600 to-amber-800',
  },
  {
    name: 'Colombian Supremo',
    origin: 'Huila Region, Colombia',
    flavor: 'Balanced, nutty, caramel sweetness with mild acidity',
    roast: 'Medium',
    price: 16,
    gradient: 'from-amber-700 to-yellow-600',
  },
  {
    name: 'Sumatra Mandheling',
    origin: 'North Sumatra, Indonesia',
    flavor: 'Earthy, full-bodied, hints of dark chocolate',
    roast: 'Dark',
    price: 17,
    gradient: 'from-amber-900 to-amber-700',
  },
]

const subscriptionPlans = [
  { frequency: 'Weekly', discount: '15% off', popular: false },
  { frequency: 'Bi-weekly', discount: '10% off', popular: true },
  { frequency: 'Monthly', discount: '5% off', popular: false },
]

const coffeeIcon = (
  <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center hover:bg-amber-500 transition-colors">
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
    </svg>
  </div>
)

export default function CraftCoffeeHome() {
  const [selectedPlan, setSelectedPlan] = useState('Bi-weekly')

  return (
    <div className="min-h-screen bg-stone-50">
      <DemoHeader
        brandName="Craft Coffee Roasters"
        icon={coffeeIcon}
        baseHref="/demos/craft-coffee"
        navLinks={[
          { label: 'Home', href: '/demos/craft-coffee' },
          { label: 'Shop', href: '/demos/craft-coffee/shop' },
          { label: 'Subscribe', href: '#subscribe' },
          { label: 'Our Story', href: '#about' },
        ]}
        ctaText="Shop Now"
        ctaHref="/demos/craft-coffee/shop"
        colorScheme="dark"
        accentColor="text-amber-400"
      />

      {/* Hero Section */}
      <section className="relative bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-stone-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-amber-400 font-medium mb-4 tracking-wide"
            >
              Small-batch roasted in Portland, Oregon
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Coffee crafted with
              <span className="text-amber-400"> passion</span>,
              delivered with care
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl text-stone-300 leading-relaxed"
            >
              From farm to cup, we source the finest single-origin beans and roast them to perfection. Subscribe today and discover your new favorite coffee.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/demos/craft-coffee/shop"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition-colors font-semibold text-lg shadow-lg shadow-amber-900/30"
              >
                Explore Our Coffees
              </Link>
              <a
                href="#subscribe"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-stone-600 text-white rounded-lg hover:bg-stone-800 hover:border-stone-500 transition-colors font-semibold text-lg"
              >
                Start Subscription
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Coffees */}
      <section className="py-20 bg-white" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-600 font-semibold mb-2 tracking-wide uppercase text-sm">Our Selection</p>
            <h2 id="featured-heading" className="text-3xl sm:text-4xl font-bold text-stone-900">Featured Single-Origin Coffees</h2>
            <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
              Each coffee tells a story of its origin. Discover the unique flavors shaped by terroir, climate, and generations of farming tradition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCoffees.map((coffee, index) => (
              <motion.article
                key={coffee.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-stone-50 rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`aspect-square bg-gradient-to-br ${coffee.gradient} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 rounded-full text-sm font-medium text-stone-700 shadow-sm">
                    {coffee.roast} Roast
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-amber-600 font-medium">{coffee.origin}</p>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">{coffee.name}</h3>
                  <p className="mt-2 text-stone-600 text-sm leading-relaxed">{coffee.flavor}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-stone-900">${coffee.price}</span>
                      <span className="text-stone-500 text-sm ml-1">/ 12oz</span>
                    </div>
                    <Link
                      href="/demos/craft-coffee/shop"
                      className="px-4 py-2.5 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors text-sm font-medium"
                    >
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/demos/craft-coffee/shop"
              className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors group"
            >
              View All Coffees
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section id="subscribe" className="py-20 bg-stone-900 text-white scroll-mt-20" aria-labelledby="subscribe-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-amber-400 font-semibold mb-2 tracking-wide uppercase text-sm">Coffee Subscription</p>
              <h2 id="subscribe-heading" className="text-3xl sm:text-4xl font-bold">Fresh roasted coffee, delivered to your door</h2>
              <p className="mt-4 text-lg text-stone-300 leading-relaxed">
                Never run out of great coffee again. Our subscription service delivers freshly roasted beans on your schedule. Customize your grind, quantity, and frequency.
              </p>
              <ul className="mt-8 space-y-4" role="list">
                {[
                  'Free shipping on all subscription orders',
                  'Pause or cancel anytime—no commitment',
                  'Customize your grind preference',
                  'Exclusive access to limited releases',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-stone-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-stone-800/50 backdrop-blur rounded-2xl p-8 border border-stone-700/50">
              <h3 className="text-xl font-bold mb-6">Choose Your Delivery Frequency</h3>
              <fieldset>
                <legend className="sr-only">Subscription frequency</legend>
                <div className="space-y-4">
                  {subscriptionPlans.map((plan) => (
                    <label
                      key={plan.frequency}
                      className={`relative flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedPlan === plan.frequency
                          ? 'border-amber-500 bg-amber-500/10'
                          : 'border-stone-700 hover:border-stone-600'
                      }`}
                    >
                      <input
                        type="radio"
                        name="subscription"
                        value={plan.frequency}
                        checked={selectedPlan === plan.frequency}
                        onChange={(e) => setSelectedPlan(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedPlan === plan.frequency ? 'border-amber-500' : 'border-stone-500'
                        }`}>
                          {selectedPlan === plan.frequency && <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />}
                        </div>
                        <div>
                          <span className="font-medium">{plan.frequency}</span>
                          {plan.popular && (
                            <span className="ml-2 text-xs px-2 py-0.5 bg-amber-500 text-stone-900 rounded-full font-semibold">
                              Most Popular
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-amber-400 font-semibold">{plan.discount}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <button className="w-full mt-6 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition-colors font-semibold text-lg shadow-lg shadow-amber-900/30">
                Start Your Subscription
              </button>
              <p className="text-center text-stone-400 text-sm mt-4">
                Starting at $14/bag with subscription
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Origin Story */}
      <section id="about" className="py-20 bg-white scroll-mt-20" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-amber-600 font-semibold mb-2 tracking-wide uppercase text-sm">Our Story</p>
              <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-stone-900">From bean to cup, crafted with intention</h2>
              <p className="mt-4 text-lg text-stone-600 leading-relaxed">
                Craft Coffee Roasters began in 2015 with a simple mission: bring exceptional single-origin coffees to people who care about where their coffee comes from.
              </p>
              <p className="mt-4 text-stone-600 leading-relaxed">
                We work directly with farmers across Ethiopia, Colombia, Guatemala, and Indonesia, paying premium prices for exceptional beans. Every batch is small-lot roasted in our Portland facility to bring out the unique character of each origin.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6" role="list" aria-label="Company statistics">
                <div className="text-center" role="listitem">
                  <div className="text-3xl font-bold text-amber-600">12+</div>
                  <div className="text-sm text-stone-600 mt-1">Farm Partners</div>
                </div>
                <div className="text-center" role="listitem">
                  <div className="text-3xl font-bold text-amber-600">8</div>
                  <div className="text-sm text-stone-600 mt-1">Years Roasting</div>
                </div>
                <div className="text-center" role="listitem">
                  <div className="text-3xl font-bold text-amber-600">15K+</div>
                  <div className="text-sm text-stone-600 mt-1">Happy Subscribers</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-stone-200 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-amber-600/20 flex items-center justify-center">
                      <svg className="w-12 h-12 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
                      </svg>
                    </div>
                    <p className="text-amber-800 font-medium">Our Roastery</p>
                    <p className="text-amber-600 text-sm">Portland, Oregon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brewing Guide CTA */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-900 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">New to specialty coffee?</h2>
            <p className="mt-4 text-stone-300 max-w-2xl mx-auto leading-relaxed">
              Download our free brewing guide and learn how to make the perfect cup at home. Includes tips for pour-over, French press, and espresso.
            </p>
            <button className="mt-8 px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition-colors font-semibold shadow-lg shadow-amber-900/30">
              Get the Free Brewing Guide
            </button>
          </div>
        </div>
      </section>

      <DemoFooter
        brandName="Craft Coffee"
        icon={coffeeIcon}
        description="Small-batch roasted in Portland, Oregon. Delivering exceptional coffee since 2015."
        sections={[
          {
            title: 'Shop',
            links: [
              { label: 'All Coffees', href: '/demos/craft-coffee/shop' },
              { label: 'Subscriptions', href: '#subscribe' },
              { label: 'Gift Cards' },
              { label: 'Brewing Equipment' },
            ],
          },
          {
            title: 'Learn',
            links: [
              { label: 'Brewing Guides' },
              { label: 'Coffee Origins' },
              { label: 'Our Roasting Process' },
              { label: 'Sustainability' },
            ],
          },
        ]}
        contactInfo={{
          email: 'hello@craftcoffee.demo',
          address: ['Portland, OR'],
        }}
        colorScheme="dark"
      />
    </div>
  )
}
