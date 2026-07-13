import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CtaBanner from '../components/CtaBanner'
import Reveal from '../components/Reveal'
import usePageTitle from '../hooks/usePageTitle'
import './VisionMission.css'

const mission = [
  'Build a strong and dependable B2B electronics distribution network',
  'Deliver a diverse portfolio of new and relevant technology products',
  'Strengthen relationships with distributors and business partners',
  'Expand our presence across key markets in India',
  'Maintain high standards of business execution and professionalism',
  'Adapt quickly to emerging technology categories and changing market demand',
  'Create sustainable growth for our company, Group and business partners',
]

const values = [
  { title: 'Integrity', text: 'We believe sustainable businesses are built on transparency, responsible conduct and trust.' },
  { title: 'Relationships', text: 'We value long-term partnerships and believe that shared growth creates stronger businesses.' },
  { title: 'Agility', text: 'Technology markets move quickly. We remain responsive to changing products, categories and market requirements.' },
  { title: 'Execution', text: 'We focus on turning strategy into measurable business performance through disciplined and efficient execution.' },
  { title: 'Scale', text: 'We build systems, networks and partnerships designed to support sustainable growth.' },
  { title: 'Innovation', text: 'We remain connected to emerging technology categories and evolving consumer demand.' },
]

const whyPartner = [
  { title: 'Proven Business Scale', text: '₹5,500+ crore standalone turnover for Dashmobiles in FY 2025–26 and ₹9,000+ crore combined Group business volume.' },
  { title: 'Strong Distribution Network', text: 'Approximately 350+ distributors supporting market reach and B2B connectivity.' },
  { title: 'Multi-Category Portfolio', text: 'From smartphones and laptops to wearables, imaging products, audio devices and next-generation smart technology.' },
  { title: 'North and South India Presence', text: 'Strong business connectivity across major markets in both regions.' },
  { title: 'Retail Market Strength', text: 'A network of more than 100 Select Mobiles stores across Andhra Pradesh and Telangana.' },
  { title: 'Experienced Leadership', text: 'A leadership group focused on scale, execution, partnerships and long-term business development.' },
]

function VisionMission() {
  usePageTitle('Vision, Mission & Values')

  return (
    <>
      <PageHero
        eyebrow="Vision, Mission & Values"
        title="To Build a Powerful and Future-Ready Technology Distribution Ecosystem"
        text="Our vision is to become one of India's most trusted and dynamic business ecosystems in consumer electronics distribution and retail."
      />

      <section className="section">
        <Reveal className="container vision-copy">
          <span className="eyebrow">Our Vision</span>
          <p className="lede">
            We aspire to build a platform that connects technology products with markets efficiently,
            strengthens business partnerships and creates sustainable value across the distribution and
            retail network.
          </p>
        </Reveal>
      </section>

      <section className="section section--soft">
        <div className="container mission-wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Our Mission</span>
            <h2>Scaling Access. Strengthening Partnerships. Creating Value.</h2>
          </Reveal>
          <ol className="mission-list">
            {mission.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.08 + Math.floor(index / 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="mission-index">{String(index + 1).padStart(2, '0')}</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Our Values</span>
            <h2>The Principles Behind Our Growth</h2>
          </Reveal>
          <div className="grid grid-3">
            {values.map((item, index) => (
              <Reveal as="div" className="card value-tile" key={item.title} delay={index * 0.08}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark glow-surface">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow eyebrow--light">Why Partner With Us?</span>
            <h2>A Business Ecosystem Designed for Growth</h2>
            <p>
              Dashmobiles and its Group ecosystem bring together the strengths that matter in today&rsquo;s
              fast-moving consumer electronics market.
            </p>
          </Reveal>
          <div className="grid grid-3 why-grid">
            {whyPartner.map((item, index) => (
              <Reveal as="div" className="why-card" key={item.title} delay={index * 0.06}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="We Welcome Opportunities to Build Meaningful B2B Relationships"
        text="As technology continues to transform how India connects, works and lives, we're building a distribution ecosystem capable of moving with the market."
      />
    </>
  )
}

export default VisionMission
