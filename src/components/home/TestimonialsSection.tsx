'use client'

import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedElement from '@/components/ui/AnimatedElement'

const testimonials = [
  {
    quote: "Buildwise delivered exactly what we needed—a professional website that actually brings in customers. Their ongoing support means I never have to worry about the technical stuff.",
    author: 'Sarah Chen',
    role: 'Owner',
    company: 'Bloom Floral Design',
    image: '/testimonials/sarah.jpg',
  },
  {
    quote: "We went from an outdated site that embarrassed us to one we proudly share with everyone. The whole process was smooth, and they hit every deadline.",
    author: 'Marcus Williams',
    role: 'Founder',
    company: 'Summit Fitness Studio',
    image: '/testimonials/marcus.jpg',
  },
  {
    quote: "The monthly support is worth every penny. Any time we need a change or have a question, they respond quickly. It\'s like having a web team on staff.",
    author: 'Jennifer Park',
    role: 'Director',
    company: 'Bright Path Consulting',
    image: '/testimonials/jennifer.jpg',
  },
]

export default function TestimonialsSection() {
  return (
    <Section background="navy">
      <SectionHeader
        eyebrow="Client Success"
        title="Real results for real businesses"
        description="Don't just take our word for it. Here's what our clients have to say about working with Buildwise."
        dark
      />

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <AnimatedElement key={testimonial.author} delay={index * 0.1}>
            <article className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div
                className="flex gap-1 mb-6"
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

              <blockquote className="text-slate-200 text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-electric-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
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
