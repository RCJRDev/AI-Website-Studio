'use client'

import { motion } from 'framer-motion'

const trustItems = [
  'Fast Turnaround',
  'Transparent Pricing',
  'Ongoing Support',
  'Mobile-First Design',
  'SEO Optimized',
  'Secure & Reliable',
]

export default function TrustSignals() {
  return (
    <section className="py-8 bg-slate-50 border-y border-slate-200">
      <div className="container-wide">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {trustItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-slate-600"
            >
              <svg
                className="w-5 h-5 text-electric-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
