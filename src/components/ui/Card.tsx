import clsx from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'bordered'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const variants = {
  default: 'bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-300',
  elevated: 'bg-white rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300',
  bordered: 'bg-white rounded-2xl border-2 border-slate-200 hover:border-slate-300 transition-colors duration-300',
}

const paddings = {
  none: '',
  sm: 'p-4 sm:p-5',
  md: 'p-5 sm:p-6',
  lg: 'p-6 sm:p-8',
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
