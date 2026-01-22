import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Craft Coffee Roasters - Demo Site | Buildwise',
  description: 'A demonstration e-commerce website for a specialty coffee roaster. This is a portfolio showcase, not a real business.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
}

export default function CraftCoffeeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
