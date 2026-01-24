import clsx from 'clsx'
import Image from 'next/image'

interface LogoProps {
  className?: string
  variant?: 'dark' | 'light'
}

export default function Logo({ className, variant = 'dark' }: LogoProps) {
  return (
    <div className={clsx('flex items-center', className)}>
      <Image
        src="/newlogo1.svg"
        alt="Buildwise"
        width={240}
        height={72}
        className="h-14 sm:h-16 lg:h-18 w-auto"
        priority
      />
    </div>
  )
}
