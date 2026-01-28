'use client'

import Link from 'next/link'

interface FooterLink {
  label: string
  href?: string
  onClick?: () => void
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface DemoFooterProps {
  brandName: string
  icon: React.ReactNode
  description: string
  sections: FooterSection[]
  contactInfo?: {
    email?: string
    phone?: string
    address?: string[]
  }
  colorScheme?: 'dark' | 'light'
}

export default function DemoFooter({
  brandName,
  icon,
  description,
  sections,
  contactInfo,
  colorScheme = 'dark',
}: DemoFooterProps) {
  const isDark = colorScheme === 'dark'
  const bgColor = isDark ? 'bg-stone-900' : 'bg-stone-50'
  const textColor = isDark ? 'text-white' : 'text-stone-900'
  const mutedColor = isDark ? 'text-stone-400' : 'text-stone-600'
  const borderColor = isDark ? 'border-stone-800' : 'border-stone-200'
  const hoverColor = isDark ? 'hover:text-white' : 'hover:text-stone-900'
  const fontWeight = isDark ? 'font-bold' : 'font-light'
  const sectionFontWeight = isDark ? 'font-semibold' : 'font-medium'

  return (
    <footer className={`${bgColor} ${textColor} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                {icon}
              </div>
              <span className={`text-lg ${fontWeight} tracking-wide`}>
                {brandName}
              </span>
            </div>
            <p className={`${mutedColor} text-sm leading-relaxed`}>
              {description}
            </p>
          </div>

          {/* Dynamic Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className={`${sectionFontWeight} mb-4`}>{section.title}</h3>
              <ul className={`space-y-3 ${mutedColor} text-sm`}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      typeof link.href === 'string' && link.href.startsWith('#') ? (
                        <a href={link.href} className={`${hoverColor} transition-colors`}>
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className={`${hoverColor} transition-colors`}>
                          {link.label}
                        </Link>
                      )
                    ) : (
                      <span
                        className={`${hoverColor} transition-colors cursor-pointer`}
                        role="button"
                        tabIndex={0}
                        onClick={link.onClick}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') link.onClick?.() }}
                      >
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section (if provided) */}
          {contactInfo && (
            <div>
              <h3 className={`${sectionFontWeight} mb-4`}>Contact</h3>
              <address className={`space-y-3 ${mutedColor} text-sm not-italic`}>
                {contactInfo.email && <p>{contactInfo.email}</p>}
                {contactInfo.phone && <p>{contactInfo.phone}</p>}
                {contactInfo.address && (
                  <p className="pt-1">
                    {contactInfo.address.map((line, idx) => (
                      <span key={idx}>
                        {line}
                        {idx < contactInfo.address!.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                )}
              </address>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t ${borderColor} flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <p className={`${isDark ? 'text-stone-500' : 'text-stone-400'} text-sm`}>
            © {new Date().getFullYear()} {brandName}. All rights reserved.
          </p>
          <div className={`flex items-center gap-6 ${mutedColor} text-sm`}>
            <span className={`${hoverColor} transition-colors`}>Privacy Policy</span>
            <span className={`${hoverColor} transition-colors`}>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
