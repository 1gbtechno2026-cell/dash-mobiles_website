import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import StatGrid from '../components/StatGrid'
import CtaBanner from '../components/CtaBanner'
import Reveal from '../components/Reveal'
import usePageTitle from '../hooks/usePageTitle'
import './Home.css'

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

const heroStats = [
  { value: '₹5,500+ Cr', label: 'Standalone turnover, FY 2025–26' },
  { value: '₹9,000+ Cr', label: 'Combined Group business volume' },
  { value: '350+', label: 'Distributors nationwide' },
  { value: '100+', label: 'Celekt Mobiles stores — AP & Telangana' },
]

const glanceStats = [
  { value: '₹5,500+ Cr', label: 'Standalone turnover of Dashmobiles Private Limited in FY 2025–26' },
  { value: '₹9,000+ Cr', label: 'Combined business volume of the Group' },
  { value: '350+', label: 'A growing B2B distribution ecosystem of distributors' },
  { value: '100+', label: 'Celekt Mobiles retail stores across Andhra Pradesh & Telangana' },
]

const categories = [
  { title: 'Smartphones & Mobile Devices', text: 'A broad portfolio of Android smartphones and Apple mobile devices.' },
  { title: 'Computing & Tablets', text: 'MacBooks, iPads, tablets and other personal computing devices.' },
  { title: 'Audio Products', text: 'Wireless earbuds, AirPods, neckbands and personal audio devices.' },
  { title: 'Smart Wearables', text: 'Smartwatches, WHOOP devices and connected wearable technology.' },
  { title: 'Imaging & Optics', text: 'Cameras, camera lenses and related imaging products.' },
  { title: 'Next-Gen Smart Technology', text: 'Smart glasses, including Meta smart glasses, and emerging devices.' },
]

const strengths = [
  'A network of approximately 350+ distributors',
  'Strong business presence across North and South India',
  'Multi-category consumer electronics portfolio',
  'Large-volume B2B business capability',
  'Focus on new products only',
  'Efficient supply and distribution approach',
]

const values = [
  { title: 'Integrity', text: 'Transparency, responsible conduct and trust.' },
  { title: 'Relationships', text: 'Long-term partnerships and shared growth.' },
  { title: 'Agility', text: 'Responsive to changing products and markets.' },
  { title: 'Execution', text: 'Strategy turned into measurable performance.' },
  { title: 'Scale', text: 'Systems and networks built for sustainable growth.' },
  { title: 'Innovation', text: 'Connected to emerging technology categories.' },
]

function Home() {
  usePageTitle('B2B Consumer Electronics Distribution')

  return (
    <>
      <section className="hero glow-surface">
        <div className="container">
          <motion.div className="hero-inner" initial="hidden" animate="visible" variants={heroContainer}>
            <motion.span className="eyebrow eyebrow--light" variants={heroItem}>
              Powering the Future of B2B Electronics Distribution
            </motion.span>
            <motion.h1 variants={heroItem}>
              Built for Scale.
              <br />
              Driven by Technology.
              <br />
              Connected Across India.
            </motion.h1>
            <motion.p className="hero-text" variants={heroItem}>
              Dashmobiles Private Limited is a fast-growing B2B electronics distribution company serving a
              wide network of distributors and business partners across India — connecting new and premium
              consumer electronics with markets across the major business belts of North and South India.
            </motion.p>
            <motion.div className="hero-actions" variants={heroItem}>
              <Link to="/contact" className="btn btn--light">Partner With Us</Link>
              <Link to="/about" className="btn btn--outline">About Dashmobiles</Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="container">
          <StatGrid stats={heroStats} dark />
        </div>
      </section>

      <section className="section">
        <div className="container about-intro">
          <Reveal className="section-head">
            <span className="eyebrow">About Dashmobiles</span>
            <h2>A New-Age Electronics Distribution Enterprise Built for Scale</h2>
            <p>
              Established in January 2025, Dashmobiles Private Limited has rapidly built a significant
              presence in India&rsquo;s B2B consumer electronics market — engaged in the B2B sale and
              distribution of new consumer electronics across smartphones, computing devices, tablets,
              audio products, wearables, imaging products, smart glasses and next-generation technology
              devices.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link to="/about" className="btn btn--ink-outline">Read Our Story</Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Our Business at a Glance</span>
            <h2>Scale That Defines Our Journey</h2>
          </Reveal>
          <StatGrid stats={glanceStats} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What We Do</span>
            <h2>Connecting Technology With Business Opportunities</h2>
            <p>
              Dashmobiles operates in the B2B sale and distribution of new consumer electronics and
              technology products, supporting large-volume B2B requirements across our key markets.
            </p>
          </Reveal>
          <div className="grid grid-3">
            {categories.map((item, index) => (
              <Reveal as="div" className="card category-card" key={item.title} delay={index * 0.08}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link to="/portfolio" className="btn btn--ink-outline home-more">Explore Our Full Portfolio</Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark glow-surface">
        <div className="container strength-grid">
          <Reveal className="section-head">
            <span className="eyebrow eyebrow--light">Our B2B Strength</span>
            <h2>Distribution Built Around Scale, Speed and Relationships</h2>
            <p>
              At Dashmobiles, B2B distribution is more than the movement of products. It is about
              creating a dependable ecosystem where availability, execution, market understanding and
              relationships work together.
            </p>
          </Reveal>
          <ul className="strength-list">
            {strengths.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Our Values</span>
            <h2>The Principles Behind Our Growth</h2>
          </Reveal>
          <div className="grid grid-3">
            {values.map((item, index) => (
              <Reveal as="div" className="card value-card" key={item.title} delay={index * 0.08}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let's Build the Future of Technology Distribution Together"
        text="We welcome opportunities to build meaningful B2B relationships, expand market reach and create long-term value together."
      />
    </>
  )
}

export default Home
