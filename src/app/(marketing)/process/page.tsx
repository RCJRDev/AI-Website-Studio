import { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedElement from '@/components/ui/AnimatedElement'

export const metadata: Metadata = {
  title: 'Our Process',
  description: 'Learn how we build websites that work. From discovery to launch and beyond, our proven process ensures a smooth experience and great results.',
  openGraph: {
    title: 'Our Process | Buildwise',
    description: 'Learn how we build websites that work. Our proven process from discovery to launch.',
  },
}

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    duration: '1-2 days',
    description: 'We start with a conversation. No technical jargon—just questions about your business, your goals, and your vision.',
    details: [
      'Free 30-minute consultation call',
      'Learn about your business and target audience',
      'Discuss your goals and success metrics',
      'Review your current online presence',
      'Understand your timeline and budget',
    ],
    outcome: 'By the end, we both know if we\'re a good fit. If so, you\'ll receive a detailed proposal with scope, timeline, and pricing.',
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    duration: '3-5 days',
    description: 'Before we design anything, we map out the structure and strategy for your site. This ensures we build something that actually achieves your goals.',
    details: [
      'Site map and page structure',
      'User journey mapping',
      'Content requirements outline',
      'SEO keyword research',
      'Technical requirements review',
    ],
    outcome: 'You\'ll receive a comprehensive project plan that shows exactly what we\'re building and why.',
  },
  {
    number: '03',
    title: 'Design',
    duration: '5-10 days',
    description: 'We create visual mockups of your key pages. You\'ll see exactly what your site will look like before we write a single line of code.',
    details: [
      'Homepage and key page designs',
      'Mobile and desktop layouts',
      'Brand color and typography refinement',
      'Interactive prototype for review',
      'Up to 3 rounds of revisions',
    ],
    outcome: 'Approved designs that you\'re excited about. No surprises when we build.',
  },
  {
    number: '04',
    title: 'Development',
    duration: '7-14 days',
    description: 'We build your site using modern, reliable technology. Regular check-ins keep you informed of progress.',
    details: [
      'Clean, maintainable code',
      'Mobile-first responsive development',
      'Performance optimization',
      'SEO implementation',
      'Integration of third-party tools',
      'Staging site for your review',
    ],
    outcome: 'A fully functional website on a staging URL for you to test and review.',
  },
  {
    number: '05',
    title: 'Testing & Refinement',
    duration: '2-3 days',
    description: 'We thoroughly test everything—across devices, browsers, and scenarios. Your feedback drives final refinements.',
    details: [
      'Cross-browser testing',
      'Mobile device testing',
      'Performance testing',
      'Form and functionality testing',
      'Content review and proofreading',
      'Final revisions',
    ],
    outcome: 'A polished, tested website ready for launch.',
  },
  {
    number: '06',
    title: 'Launch',
    duration: '1 day',
    description: 'The big day. We handle all the technical details of going live and ensure everything works perfectly.',
    details: [
      'Domain and DNS configuration',
      'SSL certificate setup',
      'Final production deployment',
      'Analytics and tracking setup',
      'Search engine submission',
      'Post-launch monitoring',
    ],
    outcome: 'Your website is live and working. Time to celebrate.',
  },
  {
    number: '07',
    title: 'Ongoing Partnership',
    duration: 'Ongoing',
    description: 'Launch isn\'t the end—it\'s the beginning. Your monthly plan kicks in, and we become your dedicated web team.',
    details: [
      'Regular backups and security updates',
      'Performance monitoring',
      'Content updates as needed',
      'Priority support access',
      'Quarterly check-ins',
      'Continuous improvement recommendations',
    ],
    outcome: 'A website that keeps working for you, with a team that has your back.',
  },
]

const faqs = [
  {
    question: 'How long does the whole process take?',
    answer: 'Most projects launch within 2-4 weeks from kickoff. Starter sites are typically faster (1-2 weeks), while Pro sites with complex features may take 4-6 weeks. We\'ll give you a clear timeline during discovery.',
  },
  {
    question: 'How involved do I need to be?',
    answer: 'As involved as you want to be. At minimum, we need your input during discovery, design review, and final approval. Some clients prefer to be hands-on throughout; others trust us to handle the details. Both approaches work.',
  },
  {
    question: 'What do you need from me to get started?',
    answer: 'For the discovery call, just come ready to talk about your business. After that, we\'ll need your logo, brand colors (if you have them), any existing content you want to use, and access to any current accounts (domain, hosting) if applicable.',
  },
  {
    question: 'What if I want changes after launch?',
    answer: 'That\'s what your monthly plan is for. Content updates are included. For larger changes or new features, we\'ll provide a clear quote before starting any work.',
  },
  {
    question: 'Do you write the content for the website?',
    answer: 'We provide guidance on content structure and what to include on each page. Many clients write their own content with our templates, or you can hire a copywriter separately.',
  },
]

export default function ProcessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h1 className="heading-1 text-white">How We Work</h1>
            </AnimatedElement>
            <AnimatedElement delay={0.1}>
              <p className="mt-6 text-xl text-slate-300">
                A straightforward process designed to get your website live quickly—without the headaches.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <AnimatedElement key={step.number} delay={index * 0.05}>
                <div className="relative pl-8 md:pl-12 pb-12 border-l-2 border-slate-200 last:border-l-0 last:pb-0">
                  {/* Step Number */}
                  <div className="absolute -left-6 md:-left-8 top-0 w-12 md:w-16 h-12 md:h-16 rounded-full bg-electric-500 text-white flex items-center justify-center font-bold text-lg md:text-xl">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="ml-8 md:ml-12">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h2 className="text-2xl font-bold text-navy-900">{step.title}</h2>
                      <span className="text-sm px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-lg text-slate-600 mb-6">{step.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-navy-900 mb-3">What happens:</h3>
                        <ul className="space-y-2">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-2 text-sm text-slate-600">
                              <svg
                                className="w-4 h-4 text-electric-500 flex-shrink-0 mt-0.5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-navy-900 mb-2">Outcome:</h3>
                        <p className="text-sm text-slate-600">{step.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </Section>

      {/* What Sets Us Apart */}
      <Section background="gray">
        <SectionHeader
          eyebrow="Our Approach"
          title="What makes us different"
          description="We've refined our process based on years of experience building websites for small businesses."
        />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Clear Communication',
              description: 'No disappearing acts. You\'ll always know what\'s happening with your project and can reach us when you need to.',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              ),
            },
            {
              title: 'No Surprises',
              description: 'Fixed pricing, clear timelines, and you see designs before we build. What you approve is what you get.',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
            {
              title: 'Built to Last',
              description: 'We use proven technology and write clean code. Your site won\'t be a mess that breaks constantly.',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              ),
            },
            {
              title: 'Long-Term Partners',
              description: 'We don\'t just build and disappear. Your success is our success, and we\'re here for the long haul.',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
            },
          ].map((item, index) => (
            <AnimatedElement key={item.title} delay={index * 0.1}>
              <div className="h-full p-6 bg-white rounded-xl border border-slate-200 hover:border-electric-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-electric-100 text-electric-600 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <SectionHeader
          title="Common Questions"
          description="Everything you need to know about working with us."
        />

        <div className="mt-12 max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <AnimatedElement key={faq.question} delay={index * 0.05}>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold text-navy-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="navy">
        <div className="text-center">
          <AnimatedElement>
            <h2 className="heading-2 text-white">Ready to get started?</h2>
            <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
              Book a free discovery call and let's talk about your project. No pressure, no obligation.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-navy-900 bg-white rounded-lg hover:bg-slate-100 transition-colors"
              >
                Book Your Free Consultation
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
