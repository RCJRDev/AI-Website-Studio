'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="cta-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#cta-grid)" />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-electric-500 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent-500 rounded-full filter blur-3xl opacity-20" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading-2 text-white text-balance">
            Ready to get a website that actually works for your business?
          </h2>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
            Book a free 30-minute consultation. We'll discuss your goals, answer your questions, and see if we're a good fit. No pressure, no hard sell.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-navy-900 bg-white rounded-lg hover:bg-slate-100 transition-colors shadow-lg"
            >
              Book Your Free Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            Typically respond within 24 hours • No commitment required
          </p>
        </motion.div>
      </div>
    </section>
  )
}
