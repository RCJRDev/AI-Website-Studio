import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import AnimatedElement from '@/components/ui/AnimatedElement'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Buildwise. Learn how we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-slate-50">
        <div className="container-wide">
          <div className="max-w-3xl">
            <AnimatedElement>
              <h1 className="heading-2 text-navy-900">Privacy Policy</h1>
              <p className="mt-4 text-slate-600">
                Last updated: January 2025
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="max-w-3xl">
          <AnimatedElement>
            <div className="prose prose-slate max-w-none">
              <p className="lead">
                At Buildwise ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2>Information We Collect</h2>

              <h3>Information You Provide</h3>
              <p>We collect information you voluntarily provide when you:</p>
              <ul>
                <li>Fill out our contact or inquiry forms</li>
                <li>Subscribe to our newsletter</li>
                <li>Request a consultation</li>
                <li>Enter into a service agreement with us</li>
                <li>Communicate with us via email, phone, or other channels</li>
              </ul>
              <p>This information may include:</p>
              <ul>
                <li>Name and contact information (email address, phone number)</li>
                <li>Business name and website URL</li>
                <li>Project details and requirements</li>
                <li>Payment and billing information</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3>Information Collected Automatically</h3>
              <p>When you visit our website, we automatically collect certain information, including:</p>
              <ul>
                <li>IP address and approximate location</li>
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website or source</li>
                <li>Other usage data and analytics</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver the services you request</li>
                <li>Send you relevant communications about our services</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and trends</li>
                <li>Protect against fraud and unauthorized access</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us:
              </p>
              <ul>
                <li>Remember your preferences</li>
                <li>Understand how you use our website</li>
                <li>Improve our website's performance</li>
                <li>Deliver relevant content</li>
              </ul>
              <p>
                You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
              </p>

              <h2>Third-Party Services</h2>
              <p>We may use third-party services that collect, monitor, and analyze information to help us improve our services. These may include:</p>
              <ul>
                <li>Google Analytics for website analytics</li>
                <li>Payment processors for transactions</li>
                <li>Email service providers for communications</li>
                <li>Customer relationship management (CRM) tools</li>
              </ul>
              <p>
                These third parties have their own privacy policies governing their use of your information.
              </p>

              <h2>Information Sharing</h2>
              <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
              <ul>
                <li><strong>Service Providers:</strong> With trusted third parties who assist us in operating our business</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>

              <h2>Data Retention</h2>
              <p>
                We retain your personal information only as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. When we no longer need your information, we will securely delete or anonymize it.
              </p>

              <h2>Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Request portability of your information</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the information provided below.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <ul>
                <li>Email: <a href="mailto:privacy@buildwise.dev">privacy@buildwise.dev</a></li>
                <li>Phone: (516) 847-2902</li>
              </ul>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
