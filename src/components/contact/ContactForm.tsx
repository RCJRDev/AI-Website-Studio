'use client'

import { useState, useCallback } from 'react'
import clsx from 'clsx'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  projectType: string
  budget: string
  timeline: string
  message: string
  // Honeypot field for bot detection (should remain empty for real users)
  website: string
}

interface FormErrors {
  name?: string
  email?: string
  projectType?: string
  message?: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: '',
  website: '', // Honeypot - bots will fill this
}

const projectTypes = [
  { value: '', label: 'What do you need?' },
  { value: 'new-website', label: 'I need a new website' },
  { value: 'redesign', label: 'I want to redesign my current site' },
  { value: 'ecommerce', label: 'I need an online store' },
  { value: 'landing-page', label: 'I need a landing page' },
  { value: 'not-sure', label: 'I\'m not sure yet (let\'s talk!)' },
] as const

const budgetRanges = [
  { value: '', label: 'What fits your budget?' },
  { value: 'starter', label: 'Starter ($500) - Perfect for getting started' },
  { value: 'growth', label: 'Growth ($1,000) - Most popular choice' },
  { value: 'pro', label: 'Pro ($2,000) - Full featured solution' },
  { value: 'unsure', label: 'Help me decide (no pressure!)' },
] as const

const timelines = [
  { value: '', label: 'When do you want to launch?' },
  { value: 'asap', label: 'As soon as possible' },
  { value: '1-month', label: 'Within a month' },
  { value: '2-3-months', label: 'In the next few months' },
  { value: 'flexible', label: 'Just exploring options' },
] as const

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[\d\s\-+()]{7,}$/

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Name is required'
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!data.projectType) {
    errors.projectType = 'Please select a project type'
  }

  if (!data.message.trim()) {
    errors.message = 'Please tell us about your project'
  } else if (data.message.trim().length < 10) {
    errors.message = 'Please provide a few more details (at least 10 characters)'
  }

  return errors
}

function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, '')
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    if (name === 'phone') {
      setFormData(prev => ({ ...prev, [name]: formatPhoneNumber(value) }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }, [errors])

  const handleBlur = useCallback((
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))

    // Validate single field on blur
    const fieldErrors = validateForm(formData)
    if (fieldErrors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: fieldErrors[name as keyof FormErrors] }))
    }
  }, [formData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')

    // Honeypot check - if filled, silently reject (bot detected)
    if (formData.website) {
      // Pretend success to not alert the bot
      setIsSubmitted(true)
      return
    }

    // Validate all fields
    const formErrors = validateForm(formData)
    setErrors(formErrors)
    setTouched({ name: true, email: true, projectType: true, message: true })

    if (Object.keys(formErrors).length > 0) {
      // Focus first error field
      const firstErrorField = Object.keys(formErrors)[0]
      const element = document.getElementById(firstErrorField)
      element?.focus()
      return
    }

    setIsSubmitting(true)

    try {
      // Web3Forms - Simple email delivery
      // API key from environment variable for security
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
      if (!accessKey) {
        throw new Error('Form configuration error')
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          subject: `New Contact: ${formData.name} - ${formData.projectType}`,
          // Web3Forms honeypot field (built-in spam protection)
          botcheck: '',
          message: `
Project Type: ${formData.projectType}
Budget: ${formData.budget || 'Not provided'}
Timeline: ${formData.timeline || 'Not provided'}

Message:
${formData.message}
          `.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong')
      }

      setIsSubmitted(true)
      setFormData(initialFormData)
      setTouched({})
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong'
      setSubmitError(errorMessage + ' Please try again or email us directly at buildwisedev@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12" role="status" aria-live="polite">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-lg">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-navy-900 mb-3">
          You're one step closer to a website that works!
        </h3>
        <p className="text-lg text-slate-600 mb-2">
          We'll reach out within 24 hours (usually much sooner) to schedule your free consultation.
        </p>
        <p className="text-sm text-slate-500 mb-8">
          Check your inbox for a confirmation email from us.
        </p>
        <div className="space-y-3">
          <p className="text-sm font-medium text-navy-900">Here's what happens next:</p>
          <div className="inline-flex flex-col text-left text-sm text-slate-600 space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-electric-500 font-bold">1.</span>
              <span>We review your project and prepare personalized recommendations</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-electric-500 font-bold">2.</span>
              <span>We schedule a 30-minute call at your convenience</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-electric-500 font-bold">3.</span>
              <span>You get a custom proposal - zero pressure, zero obligation</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const getFieldError = (fieldName: keyof FormErrors) => {
    return touched[fieldName] && errors[fieldName]
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot field - hidden from users, bots will fill it */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">
            Name <span className="text-red-500" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required="true"
            aria-invalid={!!getFieldError('name')}
            aria-describedby={getFieldError('name') ? 'name-error' : undefined}
            className={clsx(
              'w-full px-4 py-3 rounded-lg border transition-colors min-h-[48px]',
              'focus:outline-none focus:ring-2 focus:ring-offset-2',
              getFieldError('name')
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
                : 'border-slate-300 focus:border-electric-500 focus:ring-electric-500/30'
            )}
            placeholder="Your name"
          />
          {getFieldError('name') && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">
            Email <span className="text-red-500" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required="true"
            aria-invalid={!!getFieldError('email')}
            aria-describedby={getFieldError('email') ? 'email-error' : undefined}
            className={clsx(
              'w-full px-4 py-3 rounded-lg border transition-colors min-h-[48px]',
              'focus:outline-none focus:ring-2 focus:ring-offset-2',
              getFieldError('email')
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
                : 'border-slate-300 focus:border-electric-500 focus:ring-electric-500/30'
            )}
            placeholder="you@company.com"
          />
          {getFieldError('email') && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-2">
            Phone <span className="text-slate-400">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-electric-500 focus:ring-2 focus:ring-electric-500/30 focus:ring-offset-2 outline-none transition-colors min-h-[48px]"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-navy-900 mb-2">
            Company <span className="text-slate-400">(optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-electric-500 focus:ring-2 focus:ring-electric-500/30 focus:ring-offset-2 outline-none transition-colors min-h-[48px]"
            placeholder="Your business name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-navy-900 mb-2">
          Project Type <span className="text-red-500" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-required="true"
          aria-invalid={!!getFieldError('projectType')}
          aria-describedby={getFieldError('projectType') ? 'projectType-error' : undefined}
          className={clsx(
            'w-full px-4 py-3 rounded-lg border transition-colors bg-white min-h-[48px]',
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            getFieldError('projectType')
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
              : 'border-slate-300 focus:border-electric-500 focus:ring-electric-500/30'
          )}
        >
          {projectTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {getFieldError('projectType') && (
          <p id="projectType-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.projectType}
          </p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-navy-900 mb-2">
            Budget Range <span className="text-slate-400">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-electric-500 focus:ring-2 focus:ring-electric-500/30 focus:ring-offset-2 outline-none transition-colors bg-white min-h-[48px]"
          >
            {budgetRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-navy-900 mb-2">
            Timeline <span className="text-slate-400">(optional)</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-electric-500 focus:ring-2 focus:ring-electric-500/30 focus:ring-offset-2 outline-none transition-colors bg-white min-h-[48px]"
          >
            {timelines.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">
          Tell us about your project <span className="text-red-500" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-required="true"
          aria-invalid={!!getFieldError('message')}
          aria-describedby={getFieldError('message') ? 'message-error' : undefined}
          className={clsx(
            'w-full px-4 py-3 rounded-lg border transition-colors resize-none min-h-[120px]',
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            getFieldError('message')
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
              : 'border-slate-300 focus:border-electric-500 focus:ring-electric-500/30'
          )}
          placeholder="What are you looking to build? What problems are you trying to solve? Any specific features or requirements?"
        />
        {getFieldError('message') && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {submitError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm" role="alert">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={clsx(
          'w-full btn-primary text-lg py-4 font-bold group',
          isSubmitting && 'opacity-70 cursor-not-allowed'
        )}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Sending Your Message...</span>
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            Get My Free Consultation
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        )}
      </button>

      <div className="text-center space-y-2">
        <p className="text-sm text-slate-600">
          No spam, no pressure. Just helpful advice for your business.
        </p>
        <p className="text-xs text-slate-500">
          By submitting, you agree to our{' '}
          <a href="/privacy" className="text-electric-500 hover:underline focus:outline-none focus:ring-2 focus:ring-electric-500 rounded">
            Privacy Policy
          </a>
          . We respond within 24 hours.
        </p>
      </div>
    </form>
  )
}
