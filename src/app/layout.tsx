import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6',
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://buildwise.dev'),
  title: {
    default: 'Buildwise | Custom Websites for Small Businesses',
    template: '%s | Buildwise',
  },
  description:
    'Professional website design and ongoing support for small businesses. Get a custom-built website with monthly maintenance starting at $49/month.',
  keywords: [
    'web design',
    'small business website',
    'website development',
    'web development agency',
    'custom websites',
    'business website',
    'professional web design',
    'website maintenance',
    'web design services',
  ],
  authors: [{ name: 'Buildwise', url: 'https://buildwise.dev' }],
  creator: 'Buildwise',
  publisher: 'Buildwise',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://buildwise.dev',
    siteName: 'Buildwise',
    title: 'Buildwise | Custom Websites for Small Businesses',
    description:
      'Professional website design and ongoing support for small businesses. Get a custom-built website with monthly maintenance starting at $49/month.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Buildwise - Websites that work. Support that lasts.',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buildwise | Custom Websites for Small Businesses',
    description: 'Professional website design and ongoing support for small businesses.',
    images: ['/og-image.png'],
    creator: '@buildwise',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://buildwise.dev',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
