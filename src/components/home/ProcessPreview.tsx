'use client'

import Link from 'next/link'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedElement from '@/components/ui/AnimatedElement'

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We learn about your business, goals, and vision. No technical jargon—just a conversation about what you need.',
  },
  {
    number: '02',
    title: 'Strategy & Design',
    description: 'We create a plan and design mockups for your approval. You\'ll see exactly what your site will look like before we build.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Our team builds your site with clean code and best practices. Regular updates keep you in the loop.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Your site goes live, and our partnership begins. Ongoing support keeps your site running smoothly.',
  },
]

export default function ProcessPreview() {
  return (
    <Section>
      <SectionHeader
        eyebrow="How It Works"
        title="From idea to launch in four steps"
        description="A straightforward process designed to get your website live quickly—without the headaches."
      />

      <div className="mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedElement key={step.number} delay={index * 0.15}>
              <div className="text-center lg:text-left">
                {/* Step indicator with connection line */}
                <div className="relative mb-6">
                  {/* Connection line - positioned at vertical center of circle, behind it */}
                  {index < steps.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-1/2 left-1/2 w-[calc(100%+2rem)] h-0.5 -translate-y-1/2 bg-gradient-to-r from-electric-500 to-electric-400 -z-10"
                      aria-hidden="true"
                    />
                  )}
                  {/* Step circle - elevated above the line */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-electric-500 text-white text-xl font-bold relative z-10">
                    {step.number}
                  </div>
                </div>
                {/* Content - completely separate from the line layer */}
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600">
                  {step.description}
                </p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/process"
          className="inline-flex items-center gap-2 text-electric-500 font-semibold hover:text-electric-600 transition-colors"
        >
          Learn more about our process
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </Section>
  )
}
