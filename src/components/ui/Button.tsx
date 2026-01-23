import Link from 'next/link'
import clsx from 'clsx'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
}

const sizes = {
  sm: 'px-4 py-2.5 text-sm min-h-[40px]',
  md: 'px-6 py-3 text-base min-h-[44px]',
  lg: 'px-8 py-4 text-lg min-h-[52px]',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseClasses = clsx(
    variants[variant],
    sizes[size],
    disabled && 'opacity-60 cursor-not-allowed pointer-events-none',
    className
  )

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={baseClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
