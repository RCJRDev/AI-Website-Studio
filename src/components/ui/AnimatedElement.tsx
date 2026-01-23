'use client'

import { useEffect, useRef, ReactNode, memo } from 'react'
import clsx from 'clsx'

interface AnimatedElementProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

// Delay classes mapping for CSS-based staggered animations
const delayClasses: Record<number, string> = {
  0: '',
  0.1: 'stagger-delay-1',
  0.15: 'stagger-delay-1',
  0.2: 'stagger-delay-2',
  0.3: 'stagger-delay-3',
  0.4: 'stagger-delay-4',
  0.5: 'stagger-delay-5',
}

function AnimatedElement({
  children,
  className,
  delay = 0,
  direction = 'up',
}: AnimatedElementProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      element.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Map delay prop to CSS class
  const delayClass = delayClasses[delay] || ''

  return (
    <div
      ref={ref}
      className={clsx('scroll-animate', delayClass, className)}
    >
      {children}
    </div>
  )
}

// Memoize to prevent unnecessary re-renders
export default memo(AnimatedElement)
