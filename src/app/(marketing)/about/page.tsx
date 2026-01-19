import { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedElement from '@/components/ui/AnimatedElement'

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet the team behind Buildwise. We build custom websites for small businesses with ongoing support that actually works.',
  openGraph: {
    title: 'About | Buildwise',
    description: 'Meet the team behind Buildwise. We build custom websites for small businesses.',
  },
}

const values = [
  {
    title: 'Clarity Over Complexity',
    description: 'We believe the best solutions are the simplest ones. No unnecessary features, no technical jargon, no overcomplicated processes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Partnership, Not Projects',
    description: 'We don\'t build websites and disappear. We become your dedicated web team, invested in your long-term success.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Honest Communication',
    description: 'We tell you what you need to hear, not just what you want to hear. Expect straight answers and realistic expectations.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Quality Without Excess',
    description: 'We build what you need, not what sounds impressive. Every feature should serve a purpose. Every dollar should deliver value.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '50+', label: 'Websites Launched' },
  { value: '98%', label: 'Client Retention' },
  { value: '4.9', label: 'Average Rating' },
  { value: '24h', label: 'Support Response' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h1 className="heading-1 text-white">About Buildwise</h1>
            </AnimatedElement>
            <AnimatedElement delay={0.1}>
              <p className="mt-6 text-xl text-slate-300">
                We build websites that work. Support that lasts. For businesses that matter.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-electric-500 mb-3">
                Our Mission
              </p>
              <h2 className="heading-2 text-navy-900 mb-6">
                Making professional web presence accessible to every business
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Too many small businesses struggle with outdated websites, unreliable developers, or the overwhelming complexity of DIY builders. They deserve better.
                </p>
                <p>
                  We started Buildwise to provide small businesses with the same quality of web development that larger companies enjoy—without the enterprise price tag or corporate bureaucracy.
                </p>
                <p>
                  Our approach is simple: build custom websites that actually help businesses grow, then stick around to keep them running smoothly. No vanishing acts. No technical hostage situations. Just reliable partnership.
                </p>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.2} direction="left">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="p-6 bg-slate-50 rounded-xl text-center"
                >
                  <div className="text-3xl font-bold text-electric-500">{stat.value}</div>
                  <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="gray">
        <SectionHeader
          eyebrow="What We Believe"
          title="Our values in action"
          description="These aren't just words on a wall. They guide every decision we make and every project we take on."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <AnimatedElement key={value.title} delay={index * 0.1}>
              <div className="flex gap-4 p-6 bg-white rounded-xl border border-slate-200">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-electric-100 text-electric-600 flex items-center justify-center">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* Story Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <AnimatedElement>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-electric-500 mb-3">
                Our Story
              </p>
              <h2 className="heading-2 text-navy-900">
                Built from experience
              </h2>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.1}>
            <div className="prose prose-lg mx-auto text-slate-600">
              <p>
                Buildwise was founded on a simple observation: small businesses were getting a raw deal when it came to web development.
              </p>
              <p>
                On one side, you have expensive agencies that charge premium rates and treat small businesses as an afterthought. On the other, you have DIY builders that promise the world but leave business owners frustrated and stuck with mediocre results.
              </p>
              <p>
                We saw a gap in the market for something better: a team that combines professional-grade development with a genuine understanding of small business needs. A partner that doesn't disappear after launch. A service that's priced fairly and delivers real value.
              </p>
              <p>
                Today, we've helped over 50 businesses establish their online presence. We've built e-commerce stores, service business websites, professional portfolios, and everything in between. And we're just getting started.
              </p>
              <p>
                Our goal isn't to be the biggest web development company. It's to be the best partner for the businesses we work with. That means staying small enough to give personal attention, but experienced enough to deliver professional results.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* Why Small Businesses Section */}
      <Section background="navy">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedElement>
            <h2 className="heading-2 text-white mb-6">
              Why we focus on small businesses
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Small businesses are the backbone of communities. They create jobs, serve neighbors, and bring unique value that big corporations can't replicate.
            </p>
            <p className="text-lg text-slate-400">
              We believe every small business deserves a professional online presence that helps them compete and thrive. That's why we've structured our services specifically for businesses that might have been overlooked by traditional agencies.
            </p>
          </AnimatedElement>
        </div>
      </Section>

      {/* Working With Us Section */}
      <Section>
        <SectionHeader
          eyebrow="What to Expect"
          title="Working with Buildwise"
          description="Here's what our clients consistently tell us they appreciate about working with us."
        />

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'We actually respond',
              description: 'No more sending emails into the void. We respond to client messages within 24 hours, usually much faster. When you need us, we\'re here.',
            },
            {
              title: 'We speak your language',
              description: 'We translate technical concepts into plain English. You\'ll always understand what we\'re doing and why, without needing a computer science degree.',
            },
            {
              title: 'We deliver what we promise',
              description: 'Our proposals are detailed and accurate. The price we quote is the price you pay. The timeline we set is the timeline we meet.',
            },
            {
              title: 'We care about results',
              description: 'A pretty website that doesn\'t help your business is a failure. We measure success by the impact on your bottom line, not just aesthetics.',
            },
            {
              title: 'We think long-term',
              description: 'We build websites that can grow with your business. And we\'re here to support that growth for years to come.',
            },
            {
              title: 'We\'re honest',
              description: 'If something isn\'t a good fit, we\'ll tell you. If there\'s a simpler solution, we\'ll recommend it—even if it means less revenue for us.',
            },
          ].map((item, index) => (
            <AnimatedElement key={item.title} delay={index * 0.1}>
              <div className="p-6 rounded-xl bg-slate-50">
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="text-center">
          <AnimatedElement>
            <h2 className="heading-2 text-navy-900">
              Ready to work together?
            </h2>
            <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
              Book a free consultation and let's see if we're a good fit. No pressure, no sales pitch—just a conversation about your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="btn-secondary"
              >
                See Our Work
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
