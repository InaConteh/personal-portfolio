import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

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
      // Replace these with your EmailJS credentials
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
    <section id="contact" className="section">
      <h2 className="reveal-up">Contact</h2>
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


