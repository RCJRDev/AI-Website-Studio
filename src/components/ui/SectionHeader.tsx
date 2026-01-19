import clsx from 'clsx'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  dark?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            'text-sm font-semibold uppercase tracking-wider mb-3',
            dark ? 'text-electric-400' : 'text-electric-500'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          'heading-2',
          dark ? 'text-white' : 'text-navy-900'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            'mt-4 body-large',
            dark ? 'text-slate-300' : 'text-slate-600'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
