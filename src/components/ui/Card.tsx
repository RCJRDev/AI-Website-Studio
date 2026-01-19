import clsx from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'bordered'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const variants = {
  default: 'bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300',
  elevated: 'bg-white rounded-2xl shadow-xl border border-slate-100',
  bordered: 'bg-white rounded-2xl border-2 border-slate-200',
}

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export default function Card({
  children,
  className,
  variant = 'default',
  padding = 'md',
}: CardProps) {
  return (
    <div className={clsx(variants[variant], paddings[padding], className)}>
      {children}
    </div>
  )
}
