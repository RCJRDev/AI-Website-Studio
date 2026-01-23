'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'

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
  const sectionRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Animate progress from 0 to 100 over 2 seconds
            let start: number | null = null
            const duration = 2000

            const animate = (timestamp: number) => {
              if (!start) start = timestamp
              const elapsed = timestamp - start
              const newProgress = Math.min((elapsed / duration) * 100, 100)
              setProgress(newProgress)

              if (elapsed < duration) {
                requestAnimationFrame(animate)
              }
            }

            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  // Calculate which step is active based on progress
  const getStepState = (index: number) => {
    const stepProgress = (progress / 100) * steps.length
    if (stepProgress >= index + 1) return 'completed'
    if (stepProgress > index) return 'active'
    return 'pending'
  }

  return (
    <Section>
      <SectionHeader
        eyebrow="How It Works"
        title="From idea to launch in four steps"
        description="A straightforward process designed to get your website live quickly—without the headaches."
      />

      <div className="mt-16" ref={sectionRef}>
        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          {/* Progress Line Background */}
          <div
            className="absolute top-8 left-[calc(12.5%)] right-[calc(12.5%)] h-1 bg-slate-200 rounded-full"
            aria-hidden="true"
          />

          {/* Animated Progress Line */}
          <div
            className="absolute top-8 left-[calc(12.5%)] h-1 bg-gradient-to-r from-electric-500 via-electric-400 to-electric-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress * 0.75}%` }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const state = getStepState(index)
              return (
                <div
                  key={step.number}
                  className={`text-center transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Step Circle */}
                  <div className="relative mb-6 flex justify-center">
                    <div
                      className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full text-xl font-bold transition-all duration-500 ${
                        state === 'completed' || state === 'active'
                          ? 'bg-electric-500 text-white scale-110 shadow-lg shadow-electric-500/30'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {state === 'completed' ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        step.number
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                    state === 'completed' || state === 'active' ? 'text-navy-900' : 'text-slate-400'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`transition-colors duration-500 ${
                    state === 'completed' || state === 'active' ? 'text-slate-600' : 'text-slate-400'
                  }`}>
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Progress Line */}
            <div
              className="absolute left-8 top-8 bottom-8 w-1 bg-slate-200 rounded-full"
              aria-hidden="true"
            />
            <div
              className="absolute left-8 top-8 w-1 bg-gradient-to-b from-electric-500 to-electric-400 rounded-full transition-all duration-300 ease-out"
              style={{ height: `${progress * 0.85}%` }}
              aria-hidden="true"
            />

            <div className="space-y-12">
              {steps.map((step, index) => {
                const state = getStepState(index)
                return (
                  <div
                    key={step.number}
                    className={`flex gap-6 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Step Circle */}
                    <div
                      className={`relative z-10 flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full text-xl font-bold transition-all duration-500 ${
                        state === 'completed' || state === 'active'
                          ? 'bg-electric-500 text-white shadow-lg shadow-electric-500/30'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {state === 'completed' ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        step.number
                      )}
                    </div>

                    {/* Content */}
                    <div className="pt-2">
                      <h3 className={`text-xl font-bold mb-2 transition-colors duration-500 ${
                        state === 'completed' || state === 'active' ? 'text-navy-900' : 'text-slate-400'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`transition-colors duration-500 ${
                        state === 'completed' || state === 'active' ? 'text-slate-600' : 'text-slate-400'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/process"
          className="inline-flex items-center gap-2 text-electric-600 font-semibold hover:text-electric-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2 rounded-md px-2 py-1"
        >
          Learn more about our process
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </Section>
  )
}
