import { NextRequest, NextResponse } from 'next/server'

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
    const { name, email, phone, company, projectType, budget, timeline, message, website } = body

    // Honeypot check - if filled, silently reject (bot detected)
    if (website) {
      return NextResponse.json(
        { success: true, message: 'Thank you for your message!' },
        { status: 200 }
      )
    }

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
          'An error occurred. Please try again or email us directly at buildwisedev@gmail.com',
      },
      { status: 500 }
    )
  }
}

// Handle non-POST requests
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
