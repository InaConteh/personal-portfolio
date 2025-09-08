export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="reveal-up">Contact</h2>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
        </div>
        <div className="form-row">
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
        </div>
        <div className="form-row">
          <label>
            Message
            <textarea name="message" rows="4" placeholder="Say hello..." required />
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}


