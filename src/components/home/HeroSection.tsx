import Link from 'next/link'

const stats = [
  { value: '50+', label: 'Happy Clients' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '2-4', label: 'Weeks to Launch' },
] as const

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center gradient-bg overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern - Decorative */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          role="presentation"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Gradient Orbs - Decorative */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric-500 rounded-full filter blur-3xl opacity-20"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl opacity-10"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-electric-200 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <span
                className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
                aria-hidden="true"
              />
              <span>Now accepting January projects - 3 spots left</span>
            </span>
          </div>

          {/* Main Heading */}
          <h1
            id="hero-heading"
            className="heading-1 text-white text-balance animate-fade-in-up [animation-delay:100ms]"
          >
            Turn visitors into customers{' '}
            <span className="text-electric-300">with a website that works</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto text-balance leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Get a professional, custom-designed website in 2-4 weeks.
            Starting at $500 with ongoing support for just $19/month.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:300ms]">
            <Link
              href="/contact"
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto group"
            >
              Get My Free Consultation
              <svg
                className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/40 rounded-lg hover:bg-white/10 hover:border-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 transition-all w-full sm:w-auto min-h-[52px]"
            >
              See Our Work
            </Link>
          </div>

          {/* Trust Line */}
          <p className="mt-6 text-sm text-slate-300 animate-fade-in [animation-delay:400ms]">
            No credit card required. Get personalized advice in your free 30-minute call.
          </p>

          {/* Stats Grid - Fixed for mobile */}
          <div
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-lg mx-auto animate-fade-in [animation-delay:500ms]"
            role="list"
            aria-label="Company statistics"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 sm:p-0"
                role="listitem"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator - using CSS animation */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block animate-fade-in [animation-delay:1000ms]"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <span className="text-sm">Scroll to explore</span>
            <div className="animate-bounce">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
