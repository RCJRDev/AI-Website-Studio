'use client'

import Link from 'next/link'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedElement from '@/components/ui/AnimatedElement'

const projects = [
  {
    title: 'Bloom Floral Design',
    category: 'E-commerce',
    description: 'A stunning online storefront for a boutique florist, featuring real-time inventory and local delivery scheduling.',
    image: '/portfolio/bloom-floral.jpg',
    tags: ['E-commerce', 'Custom Design', 'Booking System'],
  },
  {
    title: 'Summit Fitness Studio',
    category: 'Service Business',
    description: 'A high-converting website with class scheduling, membership signups, and trainer profiles.',
    image: '/portfolio/summit-fitness.jpg',
    tags: ['Scheduling', 'Memberships', 'Mobile-First'],
  },
  {
    title: 'Bright Path Consulting',
    category: 'Professional Services',
    description: 'A professional online presence that establishes authority and generates qualified leads.',
    image: '/portfolio/bright-path.jpg',
    tags: ['Lead Generation', 'Blog', 'SEO Optimized'],
  },
]

export default function PortfolioPreview() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Our Work"
        title="Websites that deliver results"
        description="Every project is unique, but they all have one thing in common: they help our clients succeed."
      />

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <AnimatedElement key={project.title} delay={index * 0.1}>
            <div className="group rounded-2xl overflow-hidden border border-slate-200 hover:border-electric-300 transition-all duration-300 hover:shadow-2xl hover:shadow-electric-500/10 hover:-translate-y-1 bg-white">
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-electric-50 via-slate-50 to-accent-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-electric-500 to-electric-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="text-sm font-medium text-electric-500 mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/portfolio"
          className="btn-secondary"
        >
          View All Projects
        </Link>
      </div>
    </Section>
  )
}
