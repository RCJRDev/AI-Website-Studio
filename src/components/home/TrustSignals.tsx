import AnimatedElement from '@/components/ui/AnimatedElement'

const trustStats = [
  { value: '50+', label: 'Businesses Helped' },
  { value: '98%', label: 'Would Recommend Us' },
  { value: '2-4 Wks', label: 'Average Launch Time' },
  { value: '30 Days', label: 'Money-Back Guarantee' },
]

const trustBadges = [
  { icon: '✓', label: 'No Hidden Fees' },
  { icon: '✓', label: 'Free Consultation' },
  { icon: '✓', label: 'You Own Your Site' },
  { icon: '✓', label: 'Cancel Anytime' },
]

export default function TrustSignals() {
  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="container-wide">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8 border-b border-slate-200">
          {trustStats.map((stat, index) => (
            <AnimatedElement
              key={stat.label}
              delay={index * 0.1}
              className="text-center"
            >
              <div className="text-3xl font-bold text-electric-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {trustBadges.map((badge, index) => (
            <AnimatedElement
              key={badge.label}
              delay={index * 0.1}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 border border-slate-200"
            >
              <span className="text-xl text-electric-500" aria-hidden="true">{badge.icon}</span>
              <span className="text-sm font-semibold text-slate-700">
                {badge.label}
              </span>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}
