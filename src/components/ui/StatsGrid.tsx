'use client'

import { useEffect, useRef, memo } from 'react'
import clsx from 'clsx'

interface Stat {
  value: string
  label: string
}

interface StatsGridProps {
  stats: readonly Stat[] | Stat[]
  variant?: 'light' | 'dark' | 'muted'
  columns?: 2 | 3 | 4
  className?: string
  animated?: boolean
}

const variantStyles = {
  light: {
    value: 'text-navy-900',
    label: 'text-slate-600',
    bg: 'bg-white',
  },
  dark: {
    value: 'text-white',
    label: 'text-slate-400',
    bg: 'bg-transparent',
  },
  muted: {
    value: 'text-electric-500',
    label: 'text-slate-600',
    bg: 'bg-slate-50',
  },
}

const columnClasses = {
  2: 'grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-3',
  4: 'grid-cols-2 lg:grid-cols-4',
}

const delayClasses = ['', 'stagger-delay-1', 'stagger-delay-2', 'stagger-delay-3', 'stagger-delay-4', 'stagger-delay-5']

function StatsGrid({
  stats,
  variant = 'light',
  columns = 3,
  className,
  animated = true,
}: StatsGridProps) {
  const styles = variantStyles[variant]
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!animated) return

    const container = containerRef.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      container.querySelectorAll('.scroll-animate').forEach((el) => {
        el.classList.add('is-visible')
      })
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

    container.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [animated])

  return (
    <div
      ref={containerRef}
      className={clsx('grid gap-4 sm:gap-6', columnClasses[columns], className)}
      role="list"
      aria-label="Statistics"
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={clsx(
            'text-center p-4 sm:p-6 rounded-xl',
            variant === 'muted' && styles.bg,
            animated && 'scroll-animate',
            animated && delayClasses[Math.min(index, delayClasses.length - 1)]
          )}
          role="listitem"
        >
          <div className={clsx('text-3xl sm:text-4xl font-bold', styles.value)}>
            {stat.value}
          </div>
          <div className={clsx('text-sm mt-1', styles.label)}>{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export default memo(StatsGrid)
