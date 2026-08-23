import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import ChessCard from '../components/ChessCard'
import { SOCIAL_LINKS } from '../constants'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const container = useRef()

  useGSAP(() => {
    gsap.from('.section__title', {
      scrollTrigger: {
        trigger: '.section__title',
        start: 'top 90%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })

    gsap.from('.contact-grid', {
      scrollTrigger: {
        trigger: '.contact-grid',
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    })
  }, { scope: container })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const serviceId = 'service_0p0pqo8'
      const templateId = 'template_cj4w12m'
      const publicKey = 'hpU620eDCVjRQxRai'

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: SOCIAL_LINKS.email
        },
        publicKey
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section section--contact" ref={container}>
      <div className="section__header">
        <span className="section__subtitle">Initiate Communication</span>
        <h2 className="section__title">
          <span className="section__title-accent">04.</span> Make Your Move
        </h2>
        <p className="section__desc">
          Whether you have a question about full stack engineering, want to collaborate on a new project, or discuss chess tactics over coffee, my inbox is always open.
        </p>
      </div>

      <div className="contact-grid">
        {/* Direct Contact Information Card */}
        <ChessCard className="contact-info-card">
          <div className="contact-info-card__header">
            <span className="contact-info-card__icon">♔</span>
            <h3>Direct Channels</h3>
          </div>
          <p className="contact-info-card__desc">
            Feel free to reach out directly via WhatsApp for quick messages, email for detailed project proposals, or explore my code on GitHub.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item contact-info-item--whatsapp">
              <span className="contact-info-item__label">WhatsApp Direct</span>
              <a 
                href={SOCIAL_LINKS.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-info-item__val contact-info-item__val--whatsapp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>{SOCIAL_LINKS.whatsappNumber}</span>
              </a>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-item__label">Email Address</span>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="contact-info-item__val">
                {SOCIAL_LINKS.email}
              </a>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-item__label">Location</span>
              <span className="contact-info-item__val">{SOCIAL_LINKS.location}</span>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-item__label">Availability</span>
              <span className="contact-info-item__val contact-info-item__val--accent">
                Open for Contracts & Full-time Roles
              </span>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-item__label">GitHub Profile</span>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="contact-info-item__val">
                github.com/InaConteh
              </a>
            </div>
          </div>

          <div className="whatsapp-cta-wrapper" style={{ marginTop: '1.5rem' }}>
            <a 
              href={SOCIAL_LINKS.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn--whatsapp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Chat via WhatsApp</span>
            </a>
          </div>
        </ChessCard>

        {/* Interactive Contact Form Card */}
        <ChessCard className="contact-form-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="contact-name">
                Your Name
                <input 
                  id="contact-name"
                  type="text" 
                  name="name" 
                  placeholder="e.g. Grandmaster Bobby" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </label>
            </div>
            <div className="form-row">
              <label htmlFor="contact-email">
                Email Address
                <input 
                  id="contact-email"
                  type="email" 
                  name="email" 
                  placeholder="you@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </label>
            </div>
            <div className="form-row">
              <label htmlFor="contact-message">
                Message Detail
                <textarea 
                  id="contact-message"
                  name="message" 
                  rows="5" 
                  placeholder="Describe your project, question, or strategic proposition..." 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
              </label>
            </div>
            <button type="submit" className="btn btn--primary btn--full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending Message...' : 'Send Message ➔'}
            </button>
            {submitStatus === 'success' && (
              <p className="form-status form-status--success">
                Message sent successfully! I will respond within 24 hours.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="form-status form-status--error">
                Failed to send message. Please try emailing directly at {SOCIAL_LINKS.email} or messaging on WhatsApp.
              </p>
            )}
          </form>
        </ChessCard>
      </div>

      {/* Collaboration FAQ Section */}
      <div className="contact-faq-section">
        <div className="section__header">
          <span className="section__subtitle">Pre-Contact Notes</span>
          <h3 className="section__title">Frequently Clarified Details</h3>
        </div>

        <div className="faq-grid">
          <ChessCard className="faq-card">
            <h4>What is your typical turnaround time?</h4>
            <p>Initial consultations and response to direct messages happen within 24 hours. Project blueprints are typically delivered within 48 hours of alignment.</p>
          </ChessCard>

          <ChessCard className="faq-card">
            <h4>Are you available for remote work?</h4>
            <p>Yes! I operate seamlessly across remote timezones using asynchronous tools, Git version control pipelines, and clear sprint reviews.</p>
          </ChessCard>
        </div>
      </div>
    </section>
  )
}
