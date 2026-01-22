import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import AnimatedElement from '@/components/ui/AnimatedElement'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Buildwise. Read our terms and conditions for website design and development services.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-slate-50">
        <div className="container-wide">
          <div className="max-w-3xl">
            <AnimatedElement>
              <h1 className="heading-2 text-navy-900">Terms of Service</h1>
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
                These Terms of Service ("Terms") govern your use of the Buildwise website and services. By using our services, you agree to these Terms. Please read them carefully.
              </p>

              <h2>1. Services</h2>
              <p>
                Buildwise provides website design, development, and ongoing maintenance services for businesses. Our services include, but are not limited to:
              </p>
              <ul>
                <li>Custom website design and development</li>
                <li>Website hosting and maintenance</li>
                <li>Content updates and modifications</li>
                <li>Technical support and troubleshooting</li>
                <li>Search engine optimization (SEO)</li>
                <li>Third-party integrations</li>
              </ul>

              <h2>2. Client Responsibilities</h2>
              <p>As a client, you agree to:</p>
              <ul>
                <li>Provide accurate and complete information necessary for your project</li>
                <li>Respond to requests for feedback and approvals in a timely manner</li>
                <li>Ensure you have the rights to all content (text, images, logos) you provide</li>
                <li>Make payments according to the agreed schedule</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>

              <h2>3. Project Process</h2>

              <h3>3.1 Proposals and Agreements</h3>
              <p>
                All projects begin with a written proposal that outlines the scope, timeline, and pricing. Work begins only after you accept the proposal and make the required initial payment.
              </p>

              <h3>3.2 Design and Development</h3>
              <p>
                We will create designs for your approval before development begins. The number of revision rounds is specified in your project agreement. Additional revisions beyond the agreed scope may incur extra charges.
              </p>

              <h3>3.3 Content</h3>
              <p>
                Unless otherwise agreed, you are responsible for providing all content (text, images, videos) for your website. We can provide copywriting and content creation services as an add-on.
              </p>

              <h3>3.4 Launch and Delivery</h3>
              <p>
                Your website will be launched after final approval and completion of all payments. We will provide necessary training and documentation for managing your website.
              </p>

              <h2>4. Payment Terms</h2>

              <h3>4.1 Website Build Fees</h3>
              <p>
                Website build fees are due according to the payment schedule in your project agreement. Standard terms are:
              </p>
              <ul>
                <li>50% deposit due upon project kickoff</li>
                <li>50% balance due upon project completion and before launch</li>
              </ul>

              <h3>4.2 Monthly Service Plans</h3>
              <p>
                Monthly service plans are billed in advance on a recurring basis. Payment is due on the same day each month. We accept major credit cards and bank transfers.
              </p>

              <h3>4.3 Late Payments</h3>
              <p>
                Late payments may result in suspension of services until the account is brought current. We reserve the right to charge late fees as specified in your agreement.
              </p>

              <h2>5. Monthly Service Plans</h2>

              <h3>5.1 Requirements</h3>
              <p>
                All websites built by Buildwise require an active monthly service plan. This ensures ongoing security, maintenance, and support for your website.
              </p>

              <h3>5.2 Included Services</h3>
              <p>
                Monthly plans include services as outlined on our pricing page. Services vary by plan level.
              </p>

              <h3>5.3 Cancellation</h3>
              <p>
                You may cancel your monthly plan with 30 days written notice. Upon cancellation:
              </p>
              <ul>
                <li>We will assist with transitioning your website to another provider</li>
                <li>You will receive all website files and necessary credentials</li>
                <li>Any remaining prepaid fees will not be refunded</li>
              </ul>

              <h2>6. Intellectual Property</h2>

              <h3>6.1 Your Content</h3>
              <p>
                You retain ownership of all content you provide, including text, images, logos, and other materials.
              </p>

              <h3>6.2 Website Code</h3>
              <p>
                Upon full payment, you own the custom code developed specifically for your project. Standard components, templates, and third-party code remain subject to their respective licenses.
              </p>

              <h3>6.3 Portfolio Rights</h3>
              <p>
                Unless otherwise agreed in writing, we reserve the right to display your website in our portfolio and use it for promotional purposes.
              </p>

              <h2>7. Warranties and Limitations</h2>

              <h3>7.1 Service Warranty</h3>
              <p>
                We warrant that our services will be performed in a professional and workmanlike manner. If you're not satisfied with any deliverable, we will work to address your concerns within reason.
              </p>

              <h3>7.2 Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by law, Buildwise shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the total amount paid by you in the twelve (12) months preceding the claim.
              </p>

              <h3>7.3 No Guarantees</h3>
              <p>
                While we strive for excellence, we cannot guarantee specific results such as search engine rankings, traffic levels, or conversion rates, as these depend on many factors outside our control.
              </p>

              <h2>8. Confidentiality</h2>
              <p>
                We agree to keep confidential any proprietary information you share with us. This obligation does not apply to information that is publicly available, already known to us, or required to be disclosed by law.
              </p>

              <h2>9. Termination</h2>
              <p>
                Either party may terminate the service agreement with 30 days written notice. In the event of a material breach, the non-breaching party may terminate immediately upon written notice. Upon termination:
              </p>
              <ul>
                <li>You must pay for all services rendered up to the termination date</li>
                <li>We will provide reasonable assistance in transitioning your website</li>
                <li>Confidentiality obligations survive termination</li>
              </ul>

              <h2>10. Dispute Resolution</h2>
              <p>
                Any disputes arising from these Terms or our services shall first be addressed through good-faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>

              <h2>11. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify you of significant changes via email or through our website. Continued use of our services after changes constitutes acceptance of the updated Terms.
              </p>

              <h2>12. General Provisions</h2>
              <ul>
                <li><strong>Entire Agreement:</strong> These Terms, together with your project agreement, constitute the entire agreement between us.</li>
                <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions will continue in effect.</li>
                <li><strong>Waiver:</strong> Failure to enforce any provision does not constitute a waiver of that provision.</li>
                <li><strong>Assignment:</strong> You may not assign these Terms without our written consent.</li>
                <li><strong>Governing Law:</strong> These Terms are governed by the laws of the State of Delaware, United States.</li>
              </ul>

              <h2>13. Contact Information</h2>
              <p>
                For questions about these Terms, please contact us at:
              </p>
              <ul>
                <li>Email: <a href="mailto:legal@buildwise.dev">legal@buildwise.dev</a></li>
                <li>Phone: (516) 847-2902</li>
              </ul>
            </div>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
