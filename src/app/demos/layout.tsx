import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function DemosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Demo Site Indicator Banner */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-slate-900/95 backdrop-blur-sm text-white py-2.5 px-4 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-400 text-slate-900 rounded-md text-xs font-bold tracking-wide">
              DEMO SITE
            </span>
            <span className="text-slate-300 text-sm hidden sm:inline">
              This is a concept project demonstrating our capabilities
            </span>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="hidden sm:inline">Back to Portfolio</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </div>
      {/* Main Content with top padding for fixed banner */}
      <div className="pt-12">
        {children}
      </div>
    </>
  )
}
