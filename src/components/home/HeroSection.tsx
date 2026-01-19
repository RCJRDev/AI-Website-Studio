'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const stats = [
  { value: '50+', label: 'Websites Launched' },
  { value: '98%', label: 'Client Retention' },
  { value: '24h', label: 'Support Response' },
] as const

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center gradient-bg overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern - Decorative */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          role="presentation"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Gradient Orbs - Decorative */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric-500 rounded-full filter blur-3xl opacity-20"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl opacity-10"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-electric-300 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
              <span
                className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
                aria-hidden="true"
              />
              <span>Now accepting new clients</span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-1 text-white text-balance"
          >
            Websites that work.{' '}
            <span className="text-electric-400">Support that lasts.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto text-balance"
          >
            Custom-built websites with ongoing expert support. We handle the
            technical details so you can focus on running your business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white/30 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-900 transition-colors w-full sm:w-auto"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Stats Grid - Fixed for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-lg mx-auto"
            role="list"
            aria-label="Company statistics"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 sm:p-0"
                role="listitem"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
