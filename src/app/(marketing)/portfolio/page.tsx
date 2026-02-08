import { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedElement from '@/components/ui/AnimatedElement'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'View our portfolio of custom websites built for small businesses. See real examples of our design and development work.',
  openGraph: {
    title: 'Portfolio | Buildwise',
    description: 'View our portfolio of custom websites built for small businesses.',
  },
}

const projects = [
  {
    id: 'northstar-vocational',
    title: 'NorthStar Vocational & Life Services',
    subtitle: 'Life Coaching & Vocational Counseling',
    category: 'Professional Services',
    type: 'Client Project',
    url: 'https://www.northstarvocationallifecoach.online',
    description: 'A professional, bilingual website for a life coaching and vocational counseling practice in Connecticut with 22+ years of experience serving individuals seeking clarity, career guidance, and personal growth.',
    challenge: 'NorthStar needed a professional online presence that conveyed credibility, showcased their bilingual services (English/Spanish), and made it easy for prospective clients to schedule consultations.',
    solution: 'We built an accessible, mobile-first website with integrated Cal.com scheduling, Web3Forms contact handling, structured data for local SEO, and WCAG-compliant design. The site emphasizes the practitioner\'s extensive experience and warm, professional approach.',
    results: [
      'Professional online presence established for the first time',
      'Online consultation booking reduces phone tag',
      'Bilingual content reaches broader audience in Connecticut',
    ],
    techStack: ['HTML/CSS/JS', 'Cal.com', 'Web3Forms', 'Vercel'],
    tags: ['Bilingual', 'Accessibility', 'Scheduling', 'Local SEO'],
    color: 'from-blue-600 to-indigo-500',
  },
  {
    id: 'gentle-path-counseling',
    title: 'Gentle Path Counseling',
    subtitle: 'Compassionate Counseling Services',
    category: 'Service Business',
    type: 'Client Project',
    url: 'https://suki-handley.vercel.app',
    description: 'A warm, inviting therapy practice website designed to reduce the barrier to seeking help. Features evidence-based branding, trauma-informed copy, and a calming user experience that reflects the therapeutic relationship.',
    challenge: 'Gentle Path Counseling needed a website that felt approachable and safe for potential clients who may be hesitant about starting therapy, while maintaining professional credibility and optimizing for local search.',
    solution: 'We created a Next.js site with a carefully crafted sage-green and terracotta color palette evoking nature and warmth. The copy uses trauma-informed language, validates the courage it takes to seek help, and gently guides visitors toward booking a consultation.',
    results: [
      'Professional therapy practice website launched',
      'SEO-optimized for local therapy searches',
      'Config-driven content for easy updates',
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    tags: ['Healthcare', 'SEO Optimized', 'Mobile-First', 'Accessibility'],
    color: 'from-emerald-600 to-teal-500',
  },
  {
    id: 'bright-path',
    title: 'Bright Path Consulting',
    subtitle: 'Business Strategy & Executive Coaching',
    category: 'Professional Services',
    type: 'Client Project',
    description: 'A professional online presence for a consulting firm that needed to establish authority, attract high-value clients, and generate qualified leads.',
    challenge: 'Bright Path had no web presence and was relying entirely on referrals. They needed a site that would position them as industry leaders and capture leads from organic search.',
    solution: 'We created a content-rich website with case studies, thought leadership articles, and strategic CTAs throughout. The site includes a resource library, newsletter signup, and consultation booking system.',
    results: [
      'Page 1 rankings for 12 target keywords',
      '35 qualified leads per month from organic search',
      '400% increase in newsletter subscribers',
    ],
    techStack: ['Next.js', 'Contentful', 'Mailchimp', 'Calendly', 'Vercel'],
    tags: ['Lead Generation', 'Blog', 'SEO Optimized', 'Content Strategy'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'craft-coffee',
    title: 'Craft Coffee Roasters',
    subtitle: 'Artisan Coffee Subscription Service',
    category: 'E-commerce',
    type: 'Concept Project',
    conceptNote: 'This is a sample build demonstrating our e-commerce capabilities.',
    description: 'A subscription-based e-commerce platform for an artisan coffee roaster, featuring product customization, subscription management, and educational content about coffee origins.',
    challenge: 'Design a subscription e-commerce experience that educates customers about specialty coffee while making it easy to customize and manage their orders.',
    solution: 'We created a rich product experience with detailed origin stories, flavor profiles, and brewing guides. The subscription system allows customers to customize their delivery frequency, grind preference, and explore new roasts.',
    results: [
      'Concept demonstrates full subscription functionality',
      'Mobile-optimized checkout flow',
      'Integrated content and commerce experience',
    ],
    techStack: ['Next.js', 'Shopify Storefront API', 'Sanity CMS', 'Vercel'],
    tags: ['E-commerce', 'Subscriptions', 'Content Marketing', 'Custom Design'],
    color: 'from-amber-600 to-yellow-500',
  },
  {
    id: 'haven-wellness',
    title: 'Haven Wellness Spa',
    subtitle: 'Luxury Day Spa & Wellness Center',
    category: 'Service Business',
    type: 'Concept Project',
    conceptNote: 'This is a sample build demonstrating our booking system capabilities.',
    description: 'An elegant website for a luxury spa that emphasizes relaxation from the first click. Features online booking, gift card purchases, and membership management.',
    challenge: 'Create a serene digital experience that matches the luxury spa atmosphere while handling complex service bookings and package deals.',
    solution: 'We designed a calming, sophisticated interface with smooth animations and a streamlined booking flow. Customers can easily browse services, book appointments, purchase gift cards, and manage memberships.',
    results: [
      'Concept demonstrates multi-service booking flow',
      'Gift card and package purchase integration',
      'Member portal with booking history',
    ],
    techStack: ['Next.js', 'Square Appointments', 'Stripe', 'Vercel'],
    tags: ['Booking System', 'E-commerce', 'Memberships', 'Luxury Design'],
    color: 'from-teal-500 to-emerald-500',
  },
]

const categories = ['All', 'E-commerce', 'Service Business', 'Professional Services']

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h1 className="heading-1 text-white">Our Work</h1>
            </AnimatedElement>
            <AnimatedElement delay={0.1}>
              <p className="mt-6 text-xl text-slate-300">
                Every project tells a story. See how we've helped businesses establish their online presence and achieve real results.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <Section>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <AnimatedElement key={project.id} delay={0.1}>
              <article
                id={project.id}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Image Placeholder */}
                  <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    {(project.type === 'Concept Project' || project.url) ? (
                      <a
                        href={project.url || `/demos/${project.id}`}
                        target={project.url ? '_blank' : undefined}
                        rel={project.url ? 'noopener noreferrer' : undefined}
                        className="block group"
                      >
                        <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.color} relative overflow-hidden transition-transform group-hover:scale-[1.02]`}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                              <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </div>
                              <p className="text-lg font-medium">{project.title}</p>
                              <p className="text-sm text-white/80 mt-1">{project.url ? 'Visit live site' : 'Click to view demo'}</p>
                            </div>
                          </div>
                          <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                            {project.url ? 'Live Site' : 'Live Demo'}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <p className="text-lg font-medium">{project.title}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-medium text-electric-500">{project.category}</span>
                      {project.type === 'Concept Project' && (
                        <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full">
                          Concept Project
                        </span>
                      )}
                    </div>

                    <h2 className="heading-3 text-navy-900 mb-2">{project.title}</h2>
                    <p className="text-lg text-slate-500 mb-4">{project.subtitle}</p>

                    {project.conceptNote && (
                      <p className="text-sm text-amber-700 bg-amber-50 px-4 py-2 rounded-lg mb-4 border border-amber-100">
                        {project.conceptNote}
                      </p>
                    )}

                    <p className="text-slate-600 mb-6">{project.description}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-semibold text-navy-900 mb-1">The Challenge</h3>
                        <p className="text-sm text-slate-600">{project.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-900 mb-1">Our Solution</h3>
                        <p className="text-sm text-slate-600">{project.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-navy-900 mb-2">
                        {project.type === 'Concept Project' ? 'Features Demonstrated' : 'Results'}
                      </h3>
                      <ul className="space-y-1">
                        {project.results.map((result) => (
                          <li key={result} className="flex items-start gap-2 text-sm">
                            <svg
                              className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-slate-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="font-medium">Built with:</span>
                      {project.techStack.join(' • ')}
                    </div>

                    {(project.type === 'Concept Project' || project.url) && (
                      <div className="mt-6 pt-6 border-t border-slate-200">
                        <a
                          href={project.url || `/demos/${project.id}`}
                          target={project.url ? '_blank' : undefined}
                          rel={project.url ? 'noopener noreferrer' : undefined}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-electric-500 text-white rounded-lg hover:bg-electric-600 transition-colors font-medium"
                        >
                          {project.url ? 'Visit Website' : 'View Live Demo'}
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="navy">
        <div className="text-center">
          <AnimatedElement>
            <h2 className="heading-2 text-white">
              Ready to see your business here?
            </h2>
            <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
              Let's discuss your project and create something that drives real results for your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-navy-900 bg-white rounded-lg hover:bg-slate-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
              >
                See Our Process
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
