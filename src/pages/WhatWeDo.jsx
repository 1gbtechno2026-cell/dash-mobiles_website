import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'
import Reveal from '../components/Reveal'
import usePageTitle from '../hooks/usePageTitle'
import './WhatWeDo.css'

const categories = [
  {
    no: '01',
    title: 'Smartphones & Mobile Devices',
    text: 'A broad portfolio of Android smartphones and Apple mobile devices, serving the evolving requirements of the consumer electronics market.',
  },
  {
    no: '02',
    title: 'Computing & Tablets',
    text: 'MacBooks, iPads, tablets and other personal computing devices for modern business and consumer requirements.',
  },
  {
    no: '03',
    title: 'Audio Products',
    text: 'Wireless earbuds, AirPods, neckbands and other personal audio devices.',
  },
  {
    no: '04',
    title: 'Smart Wearables',
    text: 'Smartwatches, WHOOP devices and other connected wearable technologies designed for today’s technology-driven consumer.',
  },
  {
    no: '05',
    title: 'Imaging & Optics',
    text: 'Cameras, camera lenses and related imaging products for professional and consumer applications.',
  },
  {
    no: '06',
    title: 'Next-Generation Smart Technology',
    text: 'Smart glasses, including Meta smart glasses, and other emerging connected technology products.',
  },
]

const strengths = [
  'A network of approximately 350+ distributors',
  'Strong business presence across North and South India',
  'Multi-category consumer electronics portfolio',
  'Large-volume B2B business capability',
  'Focus on new products only',
  'Efficient supply and distribution approach',
  'Strong understanding of regional market requirements',
  'Long-term relationship-driven business philosophy',
]

function WhatWeDo() {
  usePageTitle('What We Do')

  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Connecting Technology With Business Opportunities"
        text="Dashmobiles Private Limited operates in the B2B sale and distribution of new consumer electronics and technology products, supporting large-volume B2B requirements across our key markets."
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Product Portfolio</span>
            <h2>A Diverse Range of New Consumer Electronics</h2>
            <p>We work to connect products with a wide network of distributors and business partners across our key markets.</p>
          </Reveal>
          <div className="portfolio-grid">
            {categories.map((item, index) => (
              <Reveal as="div" className="portfolio-card" key={item.title} delay={index * 0.06}>
                <span className="portfolio-no">{item.no}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark glow-surface">
        <div className="container b2b-grid">
          <Reveal className="section-head">
            <span className="eyebrow eyebrow--light">Our B2B Strength</span>
            <h2>Distribution Built Around Scale, Speed and Relationships</h2>
            <p>
              At Dashmobiles, B2B distribution is more than the movement of products. It is about
              creating a dependable ecosystem where availability, execution, market understanding and
              relationships work together. We aim to create value for our business partners through
              dependable execution, a diverse product portfolio and the ability to respond effectively to
              dynamic market demand.
            </p>
          </Reveal>
          <ul className="strength-list">
            {strengths.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Our Geographic Reach</span>
            <h2>Connecting Key Markets Across India</h2>
            <p>
              Our business presence extends across major markets in the North Indian and South Indian
              belts, allowing us to understand different regional markets, build strong distribution
              relationships and serve business partners across a diverse and fast-changing consumer
              electronics landscape.
            </p>
          </Reveal>
          <div className="reach-grid">
            <Reveal as="div" className="card reach-card" delay={0}>
              <h3>North India</h3>
              <p>Strong business presence and distribution relationships across key markets in the northern belt.</p>
            </Reveal>
            <Reveal as="div" className="card reach-card" delay={0.08}>
              <h3>South India</h3>
              <p>Deep market connectivity across the southern belt, strengthened by 350+ distributors and 100+ Select Mobiles stores in Andhra Pradesh &amp; Telangana.</p>
            </Reveal>
            <Reveal as="div" className="card reach-card" delay={0.16}>
              <h3>Pan-India Network</h3>
              <p>A distribution and retail ecosystem that gives the Group valuable market connectivity and a strong presence across key regions.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner
        title="A Diverse Portfolio, Built for Large-Volume B2B Demand"
        text="See how our distribution network and retail footprint come together across our Group of companies."
        secondary={{ to: '/our-group', label: 'Explore Our Group' }}
      />
    </>
  )
}

export default WhatWeDo
