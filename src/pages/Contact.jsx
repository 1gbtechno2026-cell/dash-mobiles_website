import { useState } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import usePageTitle from '../hooks/usePageTitle'
import './Contact.css'

const CONTACT_EMAIL = 'info@dash-mobiles.com'
const CONTACT_PHONE_DISPLAY = '+91 96540 10580'
const CONTACT_PHONE_TEL = '+919654010580'
const LINKEDIN_URL = 'https://www.linkedin.com/company/dashmobiles-private-limited/'

const initialForm = { name: '', company: '', phone: '', message: '' }

function Contact() {
  usePageTitle('Contact & Partner With Us')
  const [form, setForm] = useState(initialForm)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`B2B Partnership Enquiry — ${form.name || 'New Contact'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageHero
        eyebrow="Partner With Us"
        title="Let's Build the Future of Technology Distribution Together"
        text="We welcome opportunities to build meaningful B2B relationships, expand market reach and create long-term value together."
      />

      <section className="section">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <div className="section-head">
              <span className="eyebrow">Get In Touch</span>
              <h2>Reach Our Team</h2>
              <p>
                For distributor enquiries, business partnerships or general information about
                Dashmobiles Private Limited, reach out through any of the channels below.
              </p>
            </div>

            <ul className="contact-list">
              <li>
                <span className="contact-label">Email</span>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                <span className="contact-label">Phone</span>
                <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE_DISPLAY}</a>
              </li>
              <li>
                <span className="contact-label">LinkedIn</span>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                  Dashmobiles Private Limited
                </a>
              </li>
              <li>
                <span className="contact-label">Presence</span>
                <span>North India | South India | Pan-India Business Network</span>
              </li>
            </ul>
          </Reveal>

          <Reveal as="form" className="contact-form" delay={0.15} onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" />
            </div>
            <div className="form-row">
              <label htmlFor="company">Company Name</label>
              <input id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Your business / distributor name" />
            </div>
            <div className="form-row">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Contact number" />
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} placeholder="Tell us about your business and partnership interest" />
            </div>
            <button type="submit" className="btn btn--primary">Send Enquiry</button>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Contact
