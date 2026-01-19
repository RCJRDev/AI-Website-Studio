import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-electric-500 font-semibold text-sm uppercase tracking-wider mb-4">
          404 Error
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
          Page not found
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It may have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="btn-primary w-full sm:w-auto"
          >
            Go back home
          </Link>
          <Link
            href="/contact"
            className="btn-secondary w-full sm:w-auto"
          >
            Contact support
          </Link>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          Looking for something specific?{' '}
          <Link href="/services" className="text-electric-500 hover:underline">
            View our services
          </Link>{' '}
          or{' '}
          <Link href="/portfolio" className="text-electric-500 hover:underline">
            browse our portfolio
          </Link>
          .
        </p>
      </div>
    </main>
  )
}
