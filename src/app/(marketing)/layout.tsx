import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { OrganizationSchema, ProfessionalServiceSchema, WebsiteSchema } from '@/components/seo/StructuredData'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <OrganizationSchema />
      <ProfessionalServiceSchema />
      <WebsiteSchema />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-electric-500 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}
