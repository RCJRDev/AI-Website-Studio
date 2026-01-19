'use client'

import { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to error reporting service in production
    // Example: Sentry.captureException(error)
    if (process.env.NODE_ENV === 'development') {
      console.error('Application error:', error)
    }
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-slate-600 mb-8">
          We apologize for the inconvenience. An unexpected error has occurred.
          Please try again or contact us if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="btn-primary w-full sm:w-auto"
          >
            Try again
          </button>
          <a
            href="/"
            className="btn-secondary w-full sm:w-auto"
          >
            Go back home
          </a>
        </div>
        {error.digest && (
          <p className="mt-8 text-xs text-slate-400">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </main>
  )
}
