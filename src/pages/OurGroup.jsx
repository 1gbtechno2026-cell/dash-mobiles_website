import PageHero from '../components/PageHero'
import StatGrid from '../components/StatGrid'
import CtaBanner from '../components/CtaBanner'
import Reveal from '../components/Reveal'
import usePageTitle from '../hooks/usePageTitle'
import './OurGroup.css'

const stats = [
  { value: '₹9,000+ Cr', label: 'Combined Group business volume' },
  { value: '9', label: 'Group companies' },
  { value: '350+', label: 'Distributors' },
  { value: '100+', label: 'Select Mobiles retail stores' },
]

const companies = [
  {
    name: 'Dashmobiles Private Limited',
    text: 'A fast-growing B2B consumer electronics distribution company established in January 2025. Dashmobiles serves distributors and business partners across major markets in North and South India and achieved standalone turnover exceeding ₹5,500 crore in FY 2025–26.',
    tag: 'B2B Distribution',
  },
  {
    name: '1GB Techno Solutions Private Limited',
    text: 'Part of the Group’s broader technology and electronics business ecosystem, contributing to its combined market presence, business capabilities and growth.',
    tag: 'Technology & Electronics',
  },
  {
    name: 'Perfect Telelinks Private Limited',
    text: 'A Group company contributing to the wider electronics and telecommunications business ecosystem of the Group.',
    tag: 'Telecommunications',
  },
  {
    name: 'Unicorn Distribution Private Limited (UDPL)',
    text: 'A part of the Group’s wider business network and consumer electronics ecosystem.',
    tag: 'Distribution',
  },
  {
    name: 'Transparent Deals',
    text: 'A Group company focused on transparent pricing and trusted consumer deals, contributing to the Group’s wider electronics and retail ecosystem.',
    tag: 'Consumer Deals',
  },
  {
    name: 'Kikaku Exim Private Limited',
    text: 'A Group company engaged in import and export, strengthening the Group’s reach across international electronics and technology trade.',
    tag: 'Import & Export',
  },
  {
    name: 'Phonehive Private Limited',
    text: 'A Group company focused on mobile devices, contributing to the Group’s broader consumer electronics distribution network.',
    tag: 'Mobile Devices',
  },
  {
    name: 'Tranzfone Private Limited',
    text: 'A Group company contributing to the wider telecommunications and electronics business ecosystem of the Group.',
    tag: 'Telecom & Electronics',
  },
  {
    name: 'Celekt Mobiles',
    text: 'The Group’s retail brand, with a growing footprint of more than 100 stores across Andhra Pradesh and Telangana, strengthening the Group’s connection with regional markets and consumers.',
    tag: 'Retail',
  },
]

function OurGroup() {
  usePageTitle('Our Group')

  return (
    <>
      <PageHero
        eyebrow="Our Group"
        title="A Diversified Consumer Electronics Business Ecosystem"
        text="Dashmobiles Private Limited is part of a growing group of companies operating across electronics distribution, technology products and retail, with a combined business volume exceeding ₹9,000 crore."
      />

      <section className="section section--soft">
        <div className="container">
          <StatGrid stats={stats} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Group Companies</span>
            <h2>Complementary Strengths Across Distribution and Retail</h2>
          </Reveal>
          <div className="company-list">
            {companies.map((company, index) => (
              <Reveal as="div" className="company-row" key={company.name} delay={index * 0.08}>
                <div className="company-tag-wrap">
                  <span className="pill">{company.tag}</span>
                </div>
                <div>
                  <h3>{company.name}</h3>
                  <p>{company.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark glow-surface">
        <div className="container retail-strength">
          <Reveal className="section-head">
            <span className="eyebrow eyebrow--light">Our Retail Strength</span>
            <h2>100+ Celekt Mobiles Stores</h2>
            <p>
              The Group has a strong physical retail footprint through more than 100 Celekt Mobiles
              stores across Andhra Pradesh and Telangana. This extensive store network strengthens the
              Group&rsquo;s connection with regional markets and provides valuable insight into changing
              consumer preferences, product demand and technology trends.
            </p>
          </Reveal>
          <Reveal className="retail-callout" delay={0.15}>
            <p>
              The combination of large-scale B2B distribution and a strong retail ecosystem creates a
              powerful business platform connecting products, distributors, retailers and consumers.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Meet the Leadership Behind Our Group"
        text="Experienced direction, entrepreneurial thinking and a shared commitment to building sustainable, scalable enterprises."
        secondary={{ to: '/leadership', label: 'Our Leadership' }}
      />
    </>
  )
}

export default OurGroup
