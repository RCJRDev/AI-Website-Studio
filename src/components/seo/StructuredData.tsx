interface SchemaProps {
  children?: never
}

const getBaseUrl = () => process.env.NEXT_PUBLIC_SITE_URL || 'https://buildwise.dev'

export function OrganizationSchema(_props: SchemaProps) {
  const baseUrl = getBaseUrl()
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Buildwise',
    url: baseUrl,
    logo: `${baseUrl}/newlogo1.svg`,
    description: 'Custom websites for small businesses with ongoing expert support.',
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'buildwisedev@gmail.com',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ProfessionalServiceSchema(_props: SchemaProps) {
  const baseUrl = getBaseUrl()
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Buildwise',
    url: baseUrl,
    logo: `${baseUrl}/newlogo1.svg`,
    image: `${baseUrl}/og-image.png`,
    description: 'Professional website design and development services for small businesses. Custom-built websites with ongoing support.',
    email: 'buildwisedev@gmail.com',
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    serviceType: 'Website Design and Development',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Website Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Website Builds',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Starter Website',
                description: 'Perfect for new businesses and simple online presence needs. Up to 5 pages with mobile-responsive design.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Growth Website',
                description: 'For established businesses ready to expand their online reach. Up to 10 pages with blog and advanced SEO.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Pro Website',
                description: 'Full-featured websites for businesses with complex needs. Unlimited pages with e-commerce and custom features.',
              },
            },
          ],
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema(_props: SchemaProps) {
  const baseUrl = getBaseUrl()
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Website Design and Development',
    provider: {
      '@type': 'Organization',
      name: 'Buildwise',
      url: baseUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    description: 'Custom website design and development services for small businesses, including e-commerce, landing pages, and ongoing maintenance.',
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter Website Package',
        description: 'Perfect for new businesses and simple online presence needs.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '750',
          maxPrice: '1000',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'Offer',
        name: 'Growth Website Package',
        description: 'For established businesses ready to expand their online reach.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '1500',
          maxPrice: '2500',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'Offer',
        name: 'Pro Website Package',
        description: 'Full-featured websites for businesses with complex needs.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '3000',
          maxPrice: '5000',
          priceCurrency: 'USD',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface WebPageSchemaProps {
  title: string
  description: string
  url: string
}

export function WebPageSchema({ title, description, url }: WebPageSchemaProps) {
  const baseUrl = getBaseUrl()
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Buildwise',
      url: baseUrl,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema(_props: SchemaProps) {
  const baseUrl = getBaseUrl()
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Buildwise',
    url: baseUrl,
    description: 'Custom websites for small businesses with ongoing expert support.',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
