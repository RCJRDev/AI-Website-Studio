'use client'

import Link from 'next/link'
import { useState, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const serviceCategories = [
  {
    id: 'massage',
    name: 'Massage Therapy',
    description: 'Release tension and restore balance with our therapeutic massage treatments.',
    services: [
      {
        name: 'Swedish Massage',
        duration: '60 min',
        price: 95,
        description: 'Classic relaxation massage with long, flowing strokes to ease muscle tension and promote calm.',
      },
      {
        name: 'Swedish Massage',
        duration: '90 min',
        price: 135,
        description: 'Extended session for deeper relaxation and full-body attention.',
      },
      {
        name: 'Deep Tissue Massage',
        duration: '60 min',
        price: 115,
        description: 'Focused pressure on chronic muscle tension and problem areas.',
      },
      {
        name: 'Deep Tissue Massage',
        duration: '90 min',
        price: 165,
        description: 'Comprehensive deep tissue work for significant tension relief.',
      },
      {
        name: 'Signature Haven Massage',
        duration: '60 min',
        price: 120,
        description: 'Our signature experience combining Swedish technique, aromatherapy, and hot stones.',
      },
      {
        name: 'Signature Haven Massage',
        duration: '90 min',
        price: 170,
        description: 'The ultimate relaxation experience with extended time for total body restoration.',
      },
      {
        name: 'Hot Stone Massage',
        duration: '75 min',
        price: 145,
        description: 'Heated basalt stones melt away tension and warm tired muscles.',
      },
      {
        name: 'Prenatal Massage',
        duration: '60 min',
        price: 105,
        description: 'Gentle, nurturing massage designed specifically for expectant mothers.',
      },
    ],
  },
  {
    id: 'facial',
    name: 'Facials & Skincare',
    description: 'Customized treatments for radiant, healthy skin at every age.',
    services: [
      {
        name: 'Classic Facial',
        duration: '50 min',
        price: 95,
        description: 'Deep cleansing, exfoliation, and hydration for refreshed, glowing skin.',
      },
      {
        name: 'Hydrating Facial',
        duration: '75 min',
        price: 145,
        description: 'Intensive moisture treatment with hyaluronic acid and botanical extracts.',
      },
      {
        name: 'Anti-Aging Facial',
        duration: '75 min',
        price: 165,
        description: 'Advanced treatment targeting fine lines, firmness, and radiance.',
      },
      {
        name: 'Gentleman\'s Facial',
        duration: '50 min',
        price: 95,
        description: 'Tailored skincare for men, addressing shaving irritation and skin concerns.',
      },
      {
        name: 'Brightening Facial',
        duration: '60 min',
        price: 125,
        description: 'Target uneven skin tone and dullness for a luminous complexion.',
      },
      {
        name: 'Sensitive Skin Facial',
        duration: '60 min',
        price: 115,
        description: 'Gentle, calming treatment for reactive and sensitive skin types.',
      },
    ],
  },
  {
    id: 'body',
    name: 'Body Treatments',
    description: 'Luxurious rituals to nourish, detoxify, and rejuvenate your entire body.',
    services: [
      {
        name: 'Body Polish',
        duration: '45 min',
        price: 85,
        description: 'Full-body exfoliation leaving skin silky smooth and refreshed.',
      },
      {
        name: 'Detox Body Wrap',
        duration: '60 min',
        price: 125,
        description: 'Purifying treatment with mineral-rich clay and seaweed extracts.',
      },
      {
        name: 'Hydrating Body Wrap',
        duration: '60 min',
        price: 125,
        description: 'Intensive moisture treatment for dry, dehydrated skin.',
      },
      {
        name: 'Back Treatment',
        duration: '45 min',
        price: 75,
        description: 'Deep cleansing and exfoliation for hard-to-reach areas.',
      },
    ],
  },
  {
    id: 'packages',
    name: 'Spa Packages',
    description: 'Complete spa experiences combining our most beloved treatments.',
    services: [
      {
        name: 'Haven Escape',
        duration: '2 hours',
        price: 225,
        description: 'Signature massage, express facial, and scalp treatment. Includes refreshments.',
      },
      {
        name: 'Couples Retreat',
        duration: '2 hours',
        price: 350,
        description: 'Side-by-side massage, champagne, chocolates, and private relaxation time.',
      },
      {
        name: 'Ultimate Renewal',
        duration: '3 hours',
        price: 375,
        description: 'Full facial, body polish, massage, and aromatherapy bath ritual.',
      },
      {
        name: 'Mother-to-Be',
        duration: '2 hours',
        price: 245,
        description: 'Prenatal massage, gentle facial, and foot treatment designed for comfort.',
      },
      {
        name: 'Girls\' Day Out',
        duration: '2.5 hours',
        price: 195,
        description: 'Mini facial, massage, and mani-pedi. Minimum 3 guests, price per person.',
      },
    ],
  },
]

export default function HavenWellnessServices() {
  const [activeCategory, setActiveCategory] = useState('massage')
  const [selectedService, setSelectedService] = useState<typeof serviceCategories[0]['services'][0] | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuId = useId()

  const currentCategory = serviceCategories.find(c => c.id === activeCategory)

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav
        className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/demos/haven-wellness" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center" aria-hidden="true">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
              <span className="text-xl font-light tracking-wide text-stone-800">Haven Wellness</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/demos/haven-wellness" className="text-stone-600 hover:text-teal-600 transition-colors">Home</Link>
              <Link href="/demos/haven-wellness/services" className="text-teal-600 font-medium" aria-current="page">Services</Link>
              <span className="text-stone-600 hover:text-teal-600 transition-colors cursor-pointer">Membership</span>
              <span className="text-stone-600 hover:text-teal-600 transition-colors cursor-pointer">Gift Cards</span>
            </div>
            <button className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition-colors font-medium">
              Book Now
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-stone-600 hover:text-teal-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls={mobileMenuId}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                id={mobileMenuId}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-stone-200 py-4 space-y-2"
              >
                <Link
                  href="/demos/haven-wellness"
                  className="block px-4 py-2 text-stone-600 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/demos/haven-wellness/services"
                  className="block px-4 py-2 bg-teal-50 text-teal-600 font-medium rounded-lg"
                  aria-current="page"
                >
                  Services
                </Link>
                <span className="block px-4 py-2 text-stone-600 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors cursor-pointer">
                  Membership
                </span>
                <span className="block px-4 py-2 text-stone-600 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors cursor-pointer">
                  Gift Cards
                </span>
                <button className="w-full mt-4 px-5 py-2.5 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition-colors font-medium">
                  Book Now
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-16 pb-16 bg-gradient-to-br from-stone-100 via-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <p className="text-teal-600 font-medium tracking-wide mb-2">Our Services</p>
            <h1 className="text-4xl sm:text-5xl font-light text-stone-800">Treatments & Experiences</h1>
            <p className="mt-4 text-lg text-stone-600">
              Every treatment is thoughtfully designed to provide a transformative experience. Browse our menu and book your appointment online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Menu */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Category Navigation */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-20">
                <h3 className="font-medium text-stone-800 mb-4">Categories</h3>
                <div className="space-y-2">
                  {serviceCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
                        activeCategory === category.id
                          ? 'bg-teal-50 text-teal-700 font-medium'
                          : 'text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-stone-200">
                  <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-4">
                    <p className="text-teal-800 font-medium text-sm">New Clients</p>
                    <p className="text-teal-700 text-sm mt-1">Enjoy 15% off your first visit</p>
                    <button className="mt-3 w-full py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-500 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Service List */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-8">
                    <h2 className="text-2xl font-light text-stone-800">{currentCategory?.name}</h2>
                    <p className="text-stone-600 mt-1">{currentCategory?.description}</p>
                  </div>

                  <div className="space-y-4">
                    {currentCategory?.services.map((service, index) => (
                      <motion.div
                        key={`${service.name}-${service.duration}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <h3 className="font-medium text-stone-800">{service.name}</h3>
                              <span className="text-sm text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                                {service.duration}
                              </span>
                            </div>
                            <p className="mt-2 text-stone-600 text-sm">{service.description}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-2xl font-light text-stone-800">${service.price}</span>
                            <button
                              onClick={() => setSelectedService(service)}
                              className="px-5 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition-colors text-sm font-medium whitespace-nowrap"
                            >
                              Book
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={() => setSelectedService(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 id="booking-modal-title" className="text-xl font-medium text-stone-800">Book Appointment</h3>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 text-stone-400 hover:text-stone-600 transition-colors"
                  aria-label="Close booking modal"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="bg-teal-50 rounded-xl p-4 mb-6">
                <p className="font-medium text-stone-800">{selectedService.name}</p>
                <p className="text-sm text-teal-600">{selectedService.duration} · ${selectedService.price}</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="booking-name" className="block text-sm font-medium text-stone-700 mb-1">Your Name</label>
                  <input
                    id="booking-name"
                    type="text"
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="booking-email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                  <input
                    id="booking-email"
                    type="email"
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="booking-phone" className="block text-sm font-medium text-stone-700 mb-1">Phone</label>
                  <input
                    id="booking-phone"
                    type="tel"
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="booking-date" className="block text-sm font-medium text-stone-700 mb-1">Preferred Date</label>
                  <input
                    id="booking-date"
                    type="date"
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label htmlFor="booking-time" className="block text-sm font-medium text-stone-700 mb-1">Preferred Time</label>
                  <select
                    id="booking-time"
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option>Morning (9am - 12pm)</option>
                    <option>Afternoon (12pm - 4pm)</option>
                    <option>Evening (4pm - 8pm)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition-colors font-medium"
                >
                  Request Appointment
                </button>
                <p className="text-xs text-stone-500 text-center">
                  We will contact you to confirm your appointment time.
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Policies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-light text-stone-800 mb-8 text-center">Spa Policies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Arrival',
                description: 'Please arrive 15 minutes before your appointment to enjoy our relaxation lounge and complete any necessary forms.',
              },
              {
                title: 'Cancellation',
                description: 'We require 24-hour notice for cancellations. Late cancellations may incur a fee of 50% of the service price.',
              },
              {
                title: 'Gratuity',
                description: 'Gratuity is not included in service prices and is always appreciated for our dedicated therapists.',
              },
            ].map((policy) => (
              <div key={policy.title} className="text-center">
                <h3 className="font-medium text-stone-800 mb-2">{policy.title}</h3>
                <p className="text-stone-600 text-sm">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
              <span className="font-light tracking-wide">Haven Wellness Spa</span>
            </div>
            <p className="text-stone-500 text-sm">
              © {new Date().getFullYear()} Haven Wellness Spa
            </p>
            <div className="flex items-center gap-4 text-stone-400 text-sm">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
