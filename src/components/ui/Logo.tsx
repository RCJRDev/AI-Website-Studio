import clsx from 'clsx'

interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
}

export default function Logo({ variant = 'dark', className }: LogoProps) {
  const textColor = variant === 'dark' ? 'text-navy-900' : 'text-white'

  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <rect width="36" height="36" rx="8" fill="#3b82f6" />
        <path
          d="M10 26V10h6c1.5 0 2.75.5 3.75 1.5S21 13.5 21 15c0 1-.25 1.875-.75 2.625S19 18.75 18 19.25L22 26h-3.5l-3.5-6h-2v6h-3zm3-9h3c.55 0 1-.175 1.35-.525.35-.35.525-.8.525-1.35 0-.55-.175-1-.525-1.35-.35-.35-.8-.525-1.35-.525h-3v3.75z"
          fill="white"
        />
        <path
          d="M24 12v14"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="10" r="1.5" fill="#f97316" />
      </svg>
      <span className={clsx('text-xl font-bold tracking-tight', textColor)}>
        Buildwise
      </span>
    </div>
  )
}
