'use client'

import { useRef, useState } from 'react'
import Script from 'next/script'
import { BUDGETS, enquirySchema, type EnquiryField } from '@/lib/enquiry'
import { PROFILE } from '@/lib/site'

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

// Existing EmailJS account: used only while RESEND_API_KEY isn't set on the server.
const EMAILJS = { serviceId: 'service_0p0pqo8', templateId: 'template_cj4w12m', publicKey: 'hpU620eDCVjRQxRai' }

type Status = 'idle' | 'sending' | 'sent' | 'failed' | 'rate_limited'
const FIELD_ORDER: EnquiryField[] = ['name', 'email', 'budget', 'message']

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Partial<Record<EnquiryField, string>>>({})

  const focusFirstError = (fieldErrors: Partial<Record<EnquiryField, string>>) => {
    const first = FIELD_ORDER.find((field) => fieldErrors[field])
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
  }

  async function sendViaEmailJS(data: { name: string; email: string; budget: string; message: string }) {
    const emailjs = (await import('@emailjs/browser')).default
    await emailjs.send(
      EMAILJS.serviceId,
      EMAILJS.templateId,
      {
        from_name: data.name,
        from_email: data.email,
        message: `Budget: ${data.budget}\n\n${data.message}`,
        to_email: PROFILE.email,
      },
      EMAILJS.publicKey,
    )
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const payload = {
      name: String(form.get('name') ?? ''),
      email: String(form.get('email') ?? ''),
      budget: String(form.get('budget') ?? ''),
      message: String(form.get('message') ?? ''),
      website: String(form.get('website') ?? ''),
      turnstileToken: form.get('cf-turnstile-response')?.toString(),
    }

    const parsed = enquirySchema.safeParse(payload)
    if (!parsed.success) {
      const fieldErrors = Object.fromEntries(parsed.error.issues.map((i) => [String(i.path[0]), i.message]))
      setErrors(fieldErrors)
      focusFirstError(fieldErrors)
      return
    }

    setErrors({})
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const body = (await res.json().catch(() => ({}))) as { error?: string; fields?: Record<string, string> }

      if (res.ok) {
        setStatus('sent')
      } else if (body.error === 'not_configured') {
        await sendViaEmailJS(parsed.data)
        setStatus('sent')
      } else if (body.error === 'invalid' && body.fields) {
        setErrors(body.fields)
        focusFirstError(body.fields)
        setStatus('idle')
        return
      } else {
        setStatus(res.status === 429 ? 'rate_limited' : 'failed')
        return
      }
      formRef.current?.reset()
    } catch (err) {
      console.error('Contact form failed', err)
      setStatus('failed')
    }
  }

  const fieldProps = (name: EnquiryField) => ({
    id: `contact-${name}`,
    name,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
  })

  const errorFor = (name: EnquiryField) =>
    errors[name] ? (
      <span id={`contact-${name}-error`} className="field__error">
        {errors[name]}
      </span>
    ) : null

  if (status === 'sent') {
    return (
      <div className="form__done" role="status">
        <span className="eyebrow">Message sent</span>
        <p className="form__done-title">
          Thanks — I&apos;ll reply within 24 hours<span className="dot">.</span>
        </p>
        <button type="button" className="btn btn--ghost" onClick={() => setStatus('idle')}>
          Send another
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <label className="field" htmlFor="contact-name">
          Name
          <input {...fieldProps('name')} type="text" autoComplete="name" placeholder="Your name" />
          {errorFor('name')}
        </label>
        <label className="field" htmlFor="contact-email">
          Email
          <input {...fieldProps('email')} type="email" autoComplete="email" placeholder="you@company.com" />
          {errorFor('email')}
        </label>
      </div>

      <label className="field" htmlFor="contact-budget">
        Budget (optional)
        <select {...fieldProps('budget')} defaultValue={BUDGETS[0]}>
          {BUDGETS.map((budget) => (
            <option key={budget} value={budget}>
              {budget}
            </option>
          ))}
        </select>
        {errorFor('budget')}
      </label>

      <label className="field" htmlFor="contact-message">
        Project details
        <textarea {...fieldProps('message')} rows={6} placeholder="What are you building, and when do you need it?" />
        {errorFor('message')}
      </label>

      {/* Honeypot: hidden from people and assistive tech, tempting to bots. */}
      <div className="hp" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {TURNSTILE_SITE_KEY && (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />
          <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-theme="dark" />
        </>
      )}

      <button type="submit" className="btn btn--primary btn--full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
        {status !== 'sending' && (
          <span className="arrow" aria-hidden="true">
            →
          </span>
        )}
      </button>

      <div aria-live="polite">
        {status === 'failed' && (
          <p className="form__status form__status--error">
            Something went wrong sending that. Your message is still here — try again, or email me directly at{' '}
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>.
          </p>
        )}
        {status === 'rate_limited' && (
          <p className="form__status form__status--error">
            Too many messages from this connection. Please email me at{' '}
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>.
          </p>
        )}
      </div>
    </form>
  )
}
