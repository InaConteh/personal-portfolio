import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { enquirySchema } from '@/lib/enquiry'
import { PROFILE } from '@/lib/site'

// Best-effort limit of 5 enquiries per IP per hour. It is per server instance;
// swap in Upstash/Vercel KV if spam ever gets past Turnstile and the honeypot.
const WINDOW_MS = 60 * 60 * 1000
const LIMIT = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > LIMIT
}

async function verifyTurnstile(token: string | undefined, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return true // Turnstile not configured
  if (!token) return false
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
  })
  const data = (await res.json()) as { success: boolean }
  return data.success
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'rate_limited' }, { status: 429 })
  }

  const parsed = enquirySchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) {
    const fields = Object.fromEntries(parsed.error.issues.map((i) => [String(i.path[0]), i.message]))
    return NextResponse.json({ error: 'invalid', fields }, { status: 400 })
  }

  const enquiry = parsed.data
  // Honeypot filled: pretend success so bots don't retry.
  if (enquiry.website) return NextResponse.json({ ok: true })

  if (!(await verifyTurnstile(enquiry.turnstileToken, ip))) {
    return NextResponse.json({ error: 'verification_failed' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // Lets the client fall back to EmailJS until Resend is set up.
    return NextResponse.json({ error: 'not_configured' }, { status: 503 })
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL || PROFILE.email,
      replyTo: enquiry.email,
      subject: `New enquiry from ${enquiry.name}`,
      text: `Name: ${enquiry.name}\nEmail: ${enquiry.email}\nBudget: ${enquiry.budget}\n\n${enquiry.message}`,
      html: `<p><b>Name:</b> ${escapeHtml(enquiry.name)}<br><b>Email:</b> ${escapeHtml(enquiry.email)}<br><b>Budget:</b> ${escapeHtml(enquiry.budget)}</p><p style="white-space:pre-wrap">${escapeHtml(enquiry.message)}</p>`,
    })
    if (error) throw new Error(error.message)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/contact] send failed', err)
    return NextResponse.json({ error: 'send_failed' }, { status: 502 })
  }
}
