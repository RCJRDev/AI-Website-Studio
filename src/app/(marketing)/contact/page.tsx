import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import AnimatedElement from '@/components/ui/AnimatedElement'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Buildwise. Book a free consultation to discuss your website project or ask us a question.',
  openGraph: {
    title: 'Contact | Buildwise',
    description: 'Get in touch with Buildwise. Book a free consultation to discuss your website project.',
  },
}

const contactInfo = [
  {
    title: 'Email',
    value: 'buildwisedev@gmail.com',
    href: 'mailto:buildwisedev@gmail.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Phone',
    value: '(516) 847-2902',
    href: 'tel:+15168472902',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Response Time',
    value: 'Within 24 hours',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const faqs = [
  {
    question: 'What happens after I submit the form?',
    answer: 'You\'ll receive an email confirmation immediately. Within 24 hours, we\'ll reach out to schedule your free consultation call.',
  },
  {
    question: 'How long is the consultation call?',
    answer: 'Typically 30 minutes. It\'s enough time to discuss your project, answer your questions, and determine if we\'re a good fit.',
  },
  {
    question: 'Is there any obligation after the call?',
    answer: 'None at all. If we\'re a good fit, we\'ll send you a detailed proposal. If not, no hard feelings—we might even refer you to someone better suited to your needs.',
  },
  {
    question: 'I\'m not sure what I need. Can you still help?',
    answer: 'Absolutely. That\'s exactly what the consultation is for. We\'ll ask questions, understand your goals, and make recommendations.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h1 className="heading-1 text-white">Let's Talk</h1>
            </AnimatedElement>
            <AnimatedElement delay={0.1}>
              <p className="mt-6 text-xl text-slate-300">
                Ready to discuss your project? Book a free consultation or send us a message. No pressure, no obligation.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <AnimatedElement>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h2 className="text-2xl font-bold text-navy-900 mb-2">
                Book Your Free Consultation
              </h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours to schedule a call.
              </p>
              <ContactForm />
            </div>
          </AnimatedElement>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            <AnimatedElement delay={0.1}>
              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-6">
                  Other Ways to Reach Us
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-electric-100 text-electric-600 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">{item.title}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-navy-900 hover:text-electric-500 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-navy-900">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {[
                    'Confirmation email immediately after submitting',
                    'Personal response within 24 hours',
                    'A 30-minute consultation call at your convenience',
                    'Detailed proposal if we\'re a good fit',
                    'No pressure, no hard sell—ever',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg
                        className="w-4 h-4 text-electric-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.3}>
              <div>
                <h3 className="font-semibold text-navy-900 mb-4">
                  Quick Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                      <h4 className="font-medium text-navy-900 mb-1">{faq.question}</h4>
                      <p className="text-sm text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </Section>

      {/* Map/Location Section (Optional Placeholder) */}
      <Section background="gray">
        <div className="text-center">
          <AnimatedElement>
            <h2 className="heading-3 text-navy-900 mb-4">
              We work with clients everywhere
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Based in the United States, but we work with clients across the country and internationally. All consultations happen over video call, making it easy to connect no matter where you're located.
            </p>
          </AnimatedElement>
        </div>
      </Section>
    </>
  )
}
