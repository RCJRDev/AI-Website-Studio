'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/ui/Logo'
import clsx from 'clsx'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Process', href: '/process' },
  { name: 'About', href: '/about' },
] as const

// Throttle function for scroll performance
function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    // Throttle scroll handler to fire max every 100ms
    const throttledScroll = throttle(handleScroll, 100)

    // Check initial scroll position
    handleScroll()

    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [handleScroll])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-slate-300/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
      onKeyDown={handleKeyDown}
    >
      <nav className="container-wide" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-500/50 focus-visible:ring-offset-2 rounded-lg"
            aria-label="Buildwise - Home"
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'text-sm font-medium transition-all duration-200 py-2 px-3 rounded-md relative',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-500/50',
                  pathname === item.href
                    ? 'text-electric-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-electric-500'
                    : 'text-navy-900 hover:text-electric-500 hover:bg-electric-50'
                )}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={clsx(
              'lg:hidden p-2 rounded-lg transition-colors',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-500/50',
              isScrolled ? 'text-navy-900' : 'text-navy-900'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 top-20 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-slate-200 border-t border-slate-400 shadow-lg z-50"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <nav className="container-wide py-4 space-y-1" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      'block px-4 py-3 text-base font-medium rounded-lg transition-colors',
                      'focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric-500/50',
                      pathname === item.href
                        ? 'bg-electric-50 text-electric-500'
                        : 'text-navy-900 hover:bg-slate-50'
                    )}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 px-4">
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book a Call
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
