import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Footer.css'

const explore = [
  { to: '/about', label: 'About Dashmobiles' },
  { to: '/what-we-do', label: 'What We Do' },
  { to: '/our-group', label: 'Our Group' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/vision-mission', label: 'Vision, Mission & Values' },
  { to: '/portfolio', label: 'Company Portfolio' },
  { to: '/contact', label: 'Partner With Us' },
]

const group = [
  'Dashmobiles Private Limited',
  '1GB Techno Solutions Private Limited',
  'Perfect Telelinks Private Limited',
  'Unicorn Distribution Private Limited (UDPL)',
  'Transparent Deals',
  'Kikaku Exim Private Limited',
  'Phonehive Private Limited',
  'Tranzfone Private Limited',
  'Celekt Mobiles',
]

const CONTACT_EMAIL = 'info@dash-mobiles.com'
const CONTACT_PHONE_DISPLAY = '+91 96540 10580'
const CONTACT_PHONE_TEL = '+919654010580'
const LINKEDIN_URL = 'https://www.linkedin.com/company/dashmobiles-private-limited/'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo size="md" />
          <p className="footer-blurb">
            A fast-growing B2B consumer electronics distribution company connecting
            technology products with distributors and business partners across India.
            Built for scale. Driven by technology. Connected across India.
          </p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            {explore.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Group</h4>
          <ul>
            {group.map((name) => (
              <li key={name}>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE_DISPLAY}</a>
            </li>
            <li>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>North India &amp; South India Presence</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dashmobiles Private Limited. All rights reserved.</p>
        <p className="footer-tag">B2B Consumer Electronics Distribution — Pan-India Business Network</p>
      </div>
    </footer>
  )
}

export default Footer
