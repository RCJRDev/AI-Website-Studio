'use client'

import { useState, useCallback, useId } from 'react'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedElement from '@/components/ui/AnimatedElement'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'Why is a monthly service plan required?',
    answer:
      'Your website needs ongoing care to stay secure, fast, and up-to-date. Our monthly plans cover hosting, security updates, backups, minor edits, and priority support. This ensures your site keeps working for your business long after launch—and means you always have someone to call when you need help.',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      "Most projects launch within 2-4 weeks from kickoff. Starter sites are typically faster, while Pro sites with custom features may take a bit longer. We'll give you a clear timeline during our discovery call based on your specific needs.",
  },
  {
    question: 'What if I need changes after my site launches?',
    answer:
      "That's exactly what our monthly plans are for. Basic content updates are included in all plans. For larger changes or new features, we'll provide a clear quote. Our goal is to be your long-term web partner, not just a one-time vendor.",
  },
  {
    question: 'Do I own my website?',
    answer:
      "You own all the content, images, and branding. The code we build for you is yours as well. If you ever decide to leave, we'll help you transition smoothly—no hostage situations.",
  },
  {
    question: 'What technologies do you use?',
    answer:
      "We use modern, reliable technologies like Next.js and Tailwind CSS. These aren't trendy experiments—they're battle-tested tools used by companies like Netflix and Airbnb. The result is a fast, secure, and maintainable website.",
  },
  {
    question: 'Can you help with content and copywriting?',
    answer:
      'Yes. We can provide guidance on content structure and best practices. For clients who need hands-on help, we offer copywriting services as an add-on. Great design deserves great words.',
  },
] as const

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  id: string
}

function FAQItem({ question, answer, isOpen, onToggle, id }: FAQItemProps) {
  const buttonId = `faq-button-${id}`
  const panelId = `faq-panel-${id}`

  return (
    <div className="border-b border-slate-200 last:border-0">
      <h3>
        <button
          id={buttonId}
          onClick={onToggle}
          className="flex items-center justify-between w-full py-6 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-electric-500 rounded-sm"
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="text-lg font-semibold text-navy-900 pr-4">
            {question}
          </span>
          <span
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isOpen
                ? 'bg-electric-500 text-white'
                : 'bg-slate-100 text-slate-600'
            }`}
            aria-hidden="true"
          >
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }, [])

  return (
    <Section background="gray">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-32">
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions, straight answers"
            description="We believe in transparency. If you have a question we haven't covered, just ask."
            align="left"
          />
        </div>

        <AnimatedElement>
          <div
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200"
            role="region"
            aria-label="Frequently asked questions"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                id={`${baseId}-${index}`}
              />
            ))}
          </div>
        </AnimatedElement>
      </div>
    </Section>
  )
}
