import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ContactPage.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="contact">
      <section className="contact__header" aria-labelledby="contact-title">
        <div className="contact__header-inner">
          <div className="contact__header-content">
            <nav className="contact__breadcrumb" aria-label="Breadcrumb">
              <Link to="/" className="contact__breadcrumb-link">
                <svg className="contact__breadcrumb-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span>AllMed Home Care</span>
              </Link>
              <span className="contact__breadcrumb-sep" aria-hidden>/</span>
              <span className="contact__breadcrumb-current">Contact</span>
            </nav>

            <h1 id="contact-title" className="contact__title">Contact Us</h1>

            <p className="contact__intro">
              Have questions about our telemonitoring program, referrals, or how we can support your practice or your care? Get in touch and we’ll respond as soon as we can.
            </p>
          </div>
        </div>
      </section>

      <div className="contact__container">
        <div className="contact__two-col">
          <section className="contact__details" aria-labelledby="contact-details-heading">
            <h2 id="contact-details-heading" className="contact__section-title">Contact details</h2>
            <div className="contact__details-inner">
              <p className="contact__details-item">
                <span className="contact__details-label">Email</span>
                <a href="mailto:info@allmedhomecare.com" className="contact__details-link">info@allmedhomecare.com</a>
              </p>
              <p className="contact__details-item">
                <span className="contact__details-label">Phone</span>
                <a href="tel:+15551234567" className="contact__details-link">(555) 123-4567</a>
              </p>
              <p className="contact__details-item">
                <span className="contact__details-label">Fax</span>
                <a href="tel:+15559876543" className="contact__details-link">(555) 987-6543</a>
              </p>
              <p className="contact__details-item">
                <span className="contact__details-label">Address</span>
                <span className="contact__details-text">Texas, USA</span>
              </p>
            </div>
          </section>

          <section className="contact__form-section" aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className="contact__section-title">Send a message</h2>
            {submitted ? (
              <p className="contact__success">
                Thank you for your message. We’ll get back to you as soon as we can.
              </p>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="contact__input"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="contact__input"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-subject">Subject</label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="contact__input contact__select"
                >
                  <option value="">Select a topic</option>
                  <option value="general">General inquiry</option>
                  <option value="referral">Patient referral</option>
                  <option value="patient">Patient / family question</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="contact__field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="contact__input contact__textarea"
                />
              </div>
              <button type="submit" className="contact__submit">
                Send message
              </button>
              </form>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}
