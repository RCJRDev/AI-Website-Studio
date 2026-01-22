import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Simple in-memory rate limiting (use Redis in production for scale)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = 5 // 5 requests
  const window = 60 * 60 * 1000 // per hour

  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + window })
    return true
  }

  if (record.count >= limit) {
    return false
  }

  record.count++
  return true
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 1000) // Limit length
}

function generateEmailHTML(data: {
  name: string
  email: string
  phone: string
  company: string
  projectType: string
  budget: string
  timeline: string
  message: string
  submittedAt: string
}): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                New Contact Form Submission
              </h1>
              <p style="margin: 10px 0 0; color: #93c5fd; font-size: 14px;">
                Submitted at ${new Date(data.submittedAt).toLocaleString('en-US', {
                  dateStyle: 'full',
                  timeStyle: 'short',
                })}
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                ${[
                  { label: 'Name', value: data.name, icon: '👤' },
                  { label: 'Email', value: data.email, icon: '📧', link: `mailto:${data.email}` },
                  data.phone ? { label: 'Phone', value: data.phone, icon: '📱', link: `tel:${data.phone}` } : null,
                  data.company ? { label: 'Company', value: data.company, icon: '🏢' } : null,
                  { label: 'Project Type', value: data.projectType, icon: '📋' },
                  data.budget ? { label: 'Budget', value: data.budget, icon: '💰' } : null,
                  data.timeline ? { label: 'Timeline', value: data.timeline, icon: '⏰' } : null,
                ]
                  .filter(Boolean)
                  .map(
                    (field) => `
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="width: 140px; vertical-align: top;">
                            <strong style="color: #475569; font-size: 14px;">
                              ${field!.icon} ${field!.label}
                            </strong>
                          </td>
                          <td style="vertical-align: top;">
                            ${
                              field!.link
                                ? `<a href="${field!.link}" style="color: #3b82f6; text-decoration: none; font-size: 14px;">${field!.value}</a>`
                                : `<span style="color: #1e293b; font-size: 14px;">${field!.value}</span>`
                            }
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                `
                  )
                  .join('')}

                <!-- Message -->
                <tr>
                  <td style="padding-top: 24px;">
                    <strong style="color: #475569; font-size: 14px; display: block; margin-bottom: 12px;">
                      💬 Message
                    </strong>
                    <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 4px;">
                      <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 12px; color: #64748b; font-size: 13px;">
                This email was sent from your Buildwise contact form.
              </p>
              <a href="mailto:${data.email}?subject=Re: Your inquiry about ${data.projectType}"
                 style="display: inline-block; padding: 12px 24px; background-color: #3b82f6; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 600; margin-top: 8px;">
                Reply to ${data.name}
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown'

    // Rate limiting
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in an hour.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const { name, email, phone, company, projectType, budget, timeline, message } = body

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // Validate name length
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      )
    }

    // Validate message length
    if (message.length < 20 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be between 20 and 5000 characters' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : '',
      company: company ? sanitizeInput(company) : '',
      projectType: sanitizeInput(projectType),
      budget: budget ? sanitizeInput(budget) : '',
      timeline: timeline ? sanitizeInput(timeline) : '',
      message: sanitizeInput(message),
      submittedAt: new Date().toISOString(),
    }

    // Send email via Resend
    const emailResult = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'Buildwise Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL_TO || 'hello@buildwise.dev',
      replyTo: sanitizedData.email,
      subject: `New Contact: ${sanitizedData.name} - ${sanitizedData.projectType}`,
      html: generateEmailHTML(sanitizedData),
    })

    // Check if email was sent successfully
    if (emailResult.error) {
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact us directly.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message:
          'Thank you for your message! We will get back to you within 24 hours.',
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        error:
          'An error occurred. Please try again or email us directly at hello@buildwise.dev',
      },
      { status: 500 }
    )
  }
}

// Handle non-POST requests
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
