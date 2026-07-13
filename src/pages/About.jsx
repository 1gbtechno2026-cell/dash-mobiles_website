import PageHero from '../components/PageHero'
import StatGrid from '../components/StatGrid'
import CtaBanner from '../components/CtaBanner'
import Reveal from '../components/Reveal'
import usePageTitle from '../hooks/usePageTitle'
import './About.css'

const stats = [
  { value: 'Jan 2025', label: 'Company established' },
  { value: '₹5,500+ Cr', label: 'Standalone turnover, FY 2025–26' },
  { value: '₹9,000+ Cr', label: 'Combined Group business volume' },
  { value: '350+', label: 'Distributors across India' },
]

const pillars = [
  {
    title: 'Scale',
    text: 'A distribution ecosystem and business presence spanning major North and South Indian markets, built to support large-volume B2B requirements.',
  },
  {
    title: 'Market Connectivity',
    text: 'Deep relationships with distributors and business partners, backed by the Group’s retail footprint of 100+ Select Mobiles stores.',
  },
  {
    title: 'Execution',
    text: 'A focus on reliable supply, efficient execution, quality products and sustainable commercial relationships.',
  },
]

function About() {
  usePageTitle('About Us')

  return (
    <>
      <PageHero
        eyebrow="About Dashmobiles"
        title="A New-Age Electronics Distribution Enterprise Built for Scale"
        text="Established in January 2025, Dashmobiles Private Limited has rapidly built a significant presence in India's B2B consumer electronics market."
      />

      <section className="section">
        <div className="container">
          <Reveal className="about-lede-wrap">
            <p className="lede">
              The company is engaged in the B2B sale and distribution of new consumer electronics
              products, with a diverse portfolio covering smartphones, computing devices, tablets, audio
              products, wearables, imaging products, smart glasses and next-generation technology devices.
            </p>
            <p className="lede">
              Our business is driven by three core strengths: scale, market connectivity and execution.
              Through a strong distribution ecosystem and business presence across major North and South
              Indian markets, Dashmobiles serves distributors and business partners with a focus on
              reliable supply, efficient execution, quality products and sustainable commercial
              relationships.
            </p>
            <p className="lede">
              In FY 2025&ndash;26, Dashmobiles Private Limited achieved a standalone turnover exceeding
              &#8377;5,500 crore, marking a significant milestone in the company&rsquo;s growth journey.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <StatGrid stats={stats} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Core Strengths</span>
            <h2>Three Pillars That Drive Our Business</h2>
          </Reveal>
          <div className="grid grid-3">
            {pillars.map((item, index) => (
              <Reveal as="div" className="card pillar-card" key={item.title} delay={index * 0.08}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark glow-surface">
        <div className="container growth-story">
          <Reveal className="section-head">
            <span className="eyebrow eyebrow--light">Our Growth Story</span>
            <h2>A Strong Beginning. A Bigger Vision Ahead.</h2>
          </Reveal>
          <Reveal className="growth-copy" delay={0.1}>
            <p>
              Dashmobiles Private Limited began its journey in January 2025 with a clear ambition: to
              build a scalable and efficient B2B consumer electronics distribution enterprise. Within its
              early growth journey, the company achieved standalone turnover exceeding &#8377;5,500 crore
              in FY 2025&ndash;26.
            </p>
            <p>
              Supported by a Group ecosystem with more than &#8377;9,000 crore in combined business
              volume, approximately 350+ distributors and a retail network of more than 100 Select
              Mobiles stores, Dashmobiles is building for the future with ambition and focus.
            </p>
            <ul className="growth-lines">
              <li>Our journey is driven by technology.</li>
              <li>Our strength is built through relationships.</li>
              <li>Our growth is powered by execution.</li>
              <li>Our ambition is a stronger, more connected technology distribution ecosystem across India.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Building a Modern, Agile and Scalable Distribution Enterprise"
        text="Explore how our leadership, product portfolio and Group ecosystem come together to power B2B electronics distribution across India."
        secondary={{ to: '/leadership', label: 'Meet Our Leadership' }}
      />
    </>
  )
}

export default About
