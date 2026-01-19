import clsx from 'clsx'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray' | 'navy'
}

const backgrounds = {
  white: 'bg-white',
  gray: 'bg-slate-50',
  navy: 'gradient-bg text-white',
}

export default function Section({
  children,
  className,
  id,
  background = 'white',
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx('section-padding', backgrounds[background], className)}
    >
      <div className="container-wide">{children}</div>
    </section>
  )
}
