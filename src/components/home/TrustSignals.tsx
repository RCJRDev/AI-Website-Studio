'use client'

import { motion } from 'framer-motion'

const trustStats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '<24h', label: 'Avg Response Time' },
  { value: '100%', label: 'On-Time Delivery' },
]

const trustBadges = [
  { icon: '⚡', label: 'Lightning Fast' },
  { icon: '🔒', label: 'Bank-Level Security' },
  { icon: '📱', label: 'Mobile Optimized' },
  { icon: '🎯', label: 'SEO Ready' },
]

export default function TrustSignals() {
  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="container-wide">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8 border-b border-slate-200">
          {trustStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-electric-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 border border-slate-200"
            >
              <span className="text-xl">{badge.icon}</span>
              <span className="text-sm font-semibold text-slate-700">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
