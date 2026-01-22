'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NavLink {
  label: string
  href: string
}

interface DemoHeaderProps {
  brandName: string
  icon: React.ReactNode
  baseHref: string
  navLinks: NavLink[]
  ctaText?: string
  ctaHref?: string
  colorScheme: 'dark' | 'light'
  accentColor?: string
}

export default function DemoHeader({
  brandName,
  icon,
  baseHref,
  navLinks,
  ctaText = 'Get Started',
  ctaHref,
  colorScheme = 'dark',
  accentColor,
}: DemoHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isDark = colorScheme === 'dark'
  const navBg = isDark ? 'bg-stone-900/95' : 'bg-white/90'
  const navBorder = isDark ? 'border-stone-800' : 'border-stone-200/80'
  const textColor = isDark ? 'text-white' : 'text-stone-800'
  const textHover = accentColor || (isDark ? 'text-amber-400' : 'text-teal-600')
  const activeColor = accentColor || (isDark ? 'text-amber-400' : 'text-teal-600')
  const buttonBg = accentColor || (isDark ? 'bg-amber-600 hover:bg-amber-500' : 'bg-teal-600 hover:bg-teal-500')

  return (
    <nav className={`sticky top-0 z-40 ${navBg} backdrop-blur-md ${textColor} border-b ${navBorder}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={baseHref} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              {icon}
            </div>
            <span className={`text-xl font-${isDark ? 'bold' : 'light'} tracking-${isDark ? 'tight' : 'wide'}`}>
              {brandName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${link.href === baseHref ? activeColor : isDark ? 'text-stone-300' : 'text-stone-600'} hover:${textHover} transition-colors font-medium`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {ctaHref && (
              <Link
                href={ctaHref}
                className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 ${buttonBg} text-white rounded-${isDark ? 'lg' : 'full'} transition-colors font-medium`}
              >
                {ctaText}
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              type="button"
              className={`md:hidden p-2 ${isDark ? 'text-stone-300 hover:text-white' : 'text-stone-600 hover:text-stone-900'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t ${navBorder}`}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${link.href === baseHref ? activeColor : isDark ? 'text-stone-300' : 'text-stone-600'} hover:${textHover} transition-colors font-medium`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {ctaHref && (
                <Link
                  href={ctaHref}
                  className={`inline-flex items-center justify-center px-5 py-2.5 ${buttonBg} text-white rounded-${isDark ? 'lg' : 'full'} transition-colors font-medium mt-2`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {ctaText}
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
