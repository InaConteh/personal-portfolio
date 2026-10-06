import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { PROFILE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with Ina Conteh: freelance builds, contracts and full-time roles. Replies within 24 hours.',
  alternates: { canonical: '/contact' },
}

const FAQ = [
  {
    q: 'What is your typical turnaround time?',
    a: 'I reply to messages within 24 hours. A project outline usually follows within 48 hours of our first conversation.',
  },
  {
    q: 'Are you available for remote work?',
    a: 'Yes. I work across time zones with async updates, Git-based reviews and clear weekly check-ins.',
  },
]

export default function ContactPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <Reveal immediate>
          <span className="eyebrow">Open for freelance &amp; full-time</span>
        </Reveal>
        <Reveal immediate delay={0.08}>
          <h1 className="page-hero__title">
            Let&apos;s talk<span className="dot">.</span>
          </h1>
        </Reveal>
        <Reveal immediate delay={0.16}>
          <p className="page-hero__lead">
            Have a product, a site or a role in mind? Tell me what you&apos;re building and I&apos;ll get back to you
            within 24 hours.
          </p>
        </Reveal>
      </header>

      <section className="contact-grid" aria-label="Contact">
        <Reveal immediate delay={0.2} className="panel">
          <h2 className="stack__title">Direct</h2>
          <ul className="contact-list">
            <li className="contact-list__item">
              <span className="contact-list__label">Email</span>
              <a className="contact-list__value" href={`mailto:${PROFILE.email}`}>
                {PROFILE.email}
              </a>
            </li>
            <li className="contact-list__item">
              <span className="contact-list__label">WhatsApp</span>
              <a className="contact-list__value" href={PROFILE.socials.whatsapp} target="_blank" rel="noopener noreferrer">
                {PROFILE.socials.whatsappLabel}
              </a>
            </li>
            <li className="contact-list__item">
              <span className="contact-list__label">GitHub</span>
              <a className="contact-list__value" href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer">
                github.com/InaConteh
              </a>
            </li>
            <li className="contact-list__item">
              <span className="contact-list__label">Location</span>
              <span className="contact-list__value">{PROFILE.location} · works remotely</span>
            </li>
            <li className="contact-list__item">
              <span className="contact-list__label">CV</span>
              <a className="contact-list__value" href={PROFILE.cvUrl} download="Ina-Conteh-CV.pdf">
                Download PDF ↓
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal immediate delay={0.26} className="panel">
          <h2 className="stack__title">Send a message</h2>
          <ContactForm />
        </Reveal>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <Reveal className="section__head">
          <span className="eyebrow">Before you write</span>
          <h2 id="faq-title" className="section__title">
            Good to know.
          </h2>
        </Reveal>
        <div className="faq">
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.08} className="panel">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
