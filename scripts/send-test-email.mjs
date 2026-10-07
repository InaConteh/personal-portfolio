// Sends one test email through Resend to confirm RESEND_API_KEY works.
// Usage: npm run email:test   (reads RESEND_API_KEY from .env.local)
import { Resend } from 'resend'

const apiKey = process.env.RESEND_API_KEY
if (!apiKey) {
  console.error('RESEND_API_KEY is not set. Add it to .env.local (see .env.example).')
  process.exit(1)
}

const resend = new Resend(apiKey)

const { data, error } = await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: process.env.CONTACT_TO_EMAIL || 'inaconteh001@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
})

if (error) {
  console.error('Resend error:', error)
  process.exit(1)
}

console.log('Sent. Email id:', data.id)
