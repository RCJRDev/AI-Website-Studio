'use client'

import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedElement from '@/components/ui/AnimatedElement'

const testimonials = [
  {
    quote: "Our inquiries doubled within the first month. Buildwise built us a site that actually converts visitors into paying customers.",
    author: 'Sarah Chen',
    role: 'Owner',
    company: 'Bloom Floral Design',
    result: '2x more inquiries',
    image: '/testimonials/sarah.jpg',
  },
  {
    quote: "We went from an outdated site that embarrassed us to one we proudly share with everyone. The whole process was smooth, and they hit every deadline.",
    author: 'Marcus Williams',
    role: 'Founder',
    company: 'Summit Fitness Studio',
    result: 'Launched in 3 weeks',
    image: '/testimonials/marcus.jpg',
  },
  {
    quote: "The monthly support is worth every penny. Any time we need a change or have a question, they respond quickly. It is like having a web team on staff.",
    author: 'Jennifer Park',
    role: 'Director',
    company: 'Bright Path Consulting',
    result: 'Always responsive',
    image: '/testimonials/jennifer.jpg',
  },
]

export default function TestimonialsSection() {
  return (
    <Section background="navy">
      <SectionHeader
        eyebrow="98% Would Recommend Us"
        title="Businesses like yours are growing with better websites"
        description="Join 50+ happy clients who turned their websites into growth engines."
        dark
      />

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <AnimatedElement key={testimonial.author} delay={index * 0.1}>
            <article className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <div
                  className="flex gap-1"
                  role="img"
                  aria-label="5 out of 5 stars"
                >
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                  {testimonial.result}
                </span>
              </div>

              <blockquote className="text-slate-200 text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="mt-6 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-electric-500 to-electric-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {testimonial.author.charAt(0)}
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-navy-900" aria-label="Verified customer" />
                </div>
                <div>
                  <div className="font-semibold text-white flex items-center gap-2">
                    {testimonial.author}
                    <svg className="w-4 h-4 text-electric-400" fill="currentColor" viewBox="0 0 20 20" aria-label="Verified">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-sm text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </article>
          </AnimatedElement>
        ))}
      </div>
    </Section>
  )
}
