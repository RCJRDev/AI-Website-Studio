import clsx from 'clsx'

interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <div
      className={clsx(
        'flex items-center',
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logonew.svg"
        alt="Buildwise"
        className="h-20 w-auto max-w-[400px] md:h-24 lg:h-28"
        width={80}
        height={80}
        style={{
          maxHeight: 'clamp(5rem, 10vw, 7rem)',
          width: 'auto',
          height: 'auto'
        }}
      />
    </div>
  )
}
