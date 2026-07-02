import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

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

    gsap.from('.form-row', {
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 85%',
      },
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
    })

    gsap.from('.contact-form button', {
      scrollTrigger: {
        trigger: '.contact-form button',
        start: 'top 95%',
      },
      y: 20,
      opacity: 0,
      duration: 0.6,
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
          to_email: 'inaconteh001@gmail.com'
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
    <section id="contact" className="section" ref={container}>
      <h2 className="section__title">Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Name
            <input 
              type="text" 
              name="name" 
              placeholder="Your name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Email
            <input 
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
          <label>
            Message
            <textarea 
              name="message" 
              rows="4" 
              placeholder="Say hello..." 
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </label>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
        {submitStatus === 'success' && (
          <p className="form-status form-status--success">
            Message sent successfully! I'll get back to you soon.
          </p>
        )}
        {submitStatus === 'error' && (
          <p className="form-status form-status--error">
            Failed to send message. Please try again or contact me directly.
          </p>
        )}
      </form>
    </section>
  )
}
