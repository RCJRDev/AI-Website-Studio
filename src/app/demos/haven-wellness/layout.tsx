import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Haven Wellness Spa - Demo Site | Buildwise',
  description: 'A demonstration website for a luxury spa and wellness center. This is a portfolio showcase, not a real business.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
}

export default function HavenWellnessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
