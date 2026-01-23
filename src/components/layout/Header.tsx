'use client'

import { useState, useEffect, useCallback, useRef, memo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import Logo from '@/components/ui/Logo'
import clsx from 'clsx'

// Dynamically import framer-motion components for mobile menu only
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
)

const AnimatePresence = dynamic(
  () => import('framer-motion').then((mod) => mod.AnimatePresence),
  { ssr: false }
)

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Process', href: '/process' },
  { name: 'About', href: '/about' },
] as const

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Throttled scroll handler
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
      menuButtonRef.current?.focus()
    }
  }, [isMobileMenuOpen])

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen || !mobileMenuRef.current) return

    const focusableElements = mobileMenuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault()
        lastElement?.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault()
        firstElement?.focus()
      }
    }

    document.addEventListener('keydown', handleTabKey)
    firstElement?.focus()

    return () => document.removeEventListener('keydown', handleTabKey)
  }, [isMobileMenuOpen])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/50'
          : 'bg-transparent'
      )}
      onKeyDown={handleKeyDown}
    >
      <nav className="container-wide" aria-label="Main navigation">
        <div className="flex items-center justify-between h-18 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="relative flex-shrink-0 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2"
            aria-label="Buildwise - Home"
          >
            <Logo variant="dark" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" role="menubar">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  role="menuitem"
                  className={clsx(
                    'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2',
                    isActive
                      ? 'text-electric-600'
                      : 'text-slate-700 hover:text-electric-600 hover:bg-slate-100/80'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-electric-500 rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-primary text-sm"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            className={clsx(
              'lg:hidden relative p-2 -mr-2 rounded-lg transition-colors duration-200',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-500',
              'text-slate-700 hover:bg-slate-100/80'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            <div className="w-6 h-6 flex flex-col items-center justify-center">
              <span
                className={clsx(
                  'block h-0.5 w-5 bg-current rounded-full transition-all duration-300 ease-out',
                  isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                )}
              />
              <span
                className={clsx(
                  'block h-0.5 w-5 bg-current rounded-full transition-all duration-300 ease-out',
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'
                )}
              />
              <span
                className={clsx(
                  'block h-0.5 w-5 bg-current rounded-full transition-all duration-300 ease-out',
                  isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 top-18 sm:top-20 bg-slate-900/20 backdrop-blur-sm z-40"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <MotionDiv
              ref={mobileMenuRef}
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl z-50"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <nav className="container-wide py-3" aria-label="Mobile navigation">
                <ul className="space-y-1" role="menu">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <li key={item.name} role="none">
                        <Link
                          href={item.href}
                          role="menuitem"
                          className={clsx(
                            'flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors duration-150',
                            'focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric-500',
                            isActive
                              ? 'bg-electric-50 text-electric-600'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                          )}
                          aria-current={isActive ? 'page' : undefined}
                          onClick={closeMobileMenu}
                        >
                          {item.name}
                          {isActive && (
                            <svg
                              className="ml-auto w-5 h-5 text-electric-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </Link>
                      </li>
                    )
                  })}
                </ul>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center"
                    onClick={closeMobileMenu}
                  >
                    Free Consultation
                  </Link>
                </div>
              </nav>
            </MotionDiv>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default memo(Header)
