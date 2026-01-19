'use client'

import { motion } from 'framer-motion'
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

export default function StatsGrid({
  stats,
  variant = 'light',
  columns = 3,
  className,
  animated = true,
}: StatsGridProps) {
  const styles = variantStyles[variant]

  const Container = animated ? motion.div : 'div'
  const containerProps = animated
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
      }
    : {}

  return (
    <Container
      className={clsx('grid gap-4 sm:gap-6', columnClasses[columns], className)}
      role="list"
      aria-label="Statistics"
      {...containerProps}
    >
      {stats.map((stat, index) => {
        const Item = animated ? motion.div : 'div'
        const itemProps = animated
          ? {
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.3, delay: index * 0.1 },
            }
          : {}

        return (
          <Item
            key={stat.label}
            className={clsx(
              'text-center p-4 sm:p-6 rounded-xl',
              variant === 'muted' && styles.bg
            )}
            role="listitem"
            {...itemProps}
          >
            <div className={clsx('text-3xl sm:text-4xl font-bold', styles.value)}>
              {stat.value}
            </div>
            <div className={clsx('text-sm mt-1', styles.label)}>{stat.label}</div>
          </Item>
        )
      })}
    </Container>
  )
}
