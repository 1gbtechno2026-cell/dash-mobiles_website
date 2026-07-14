import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Scene from '../three/Scene'
import useLenis from '../hooks/useLenis'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'
import usePageTitle from '../hooks/usePageTitle'
import RevealLines from '../components/RevealLines'
import AnimatedCounter from '../components/AnimatedCounter'
import Icon from '../components/Icon'
import shashwatAgarwalPhoto from '../assets/leadership/shashwat-agarwal.jpg'
import yGurujiPhoto from '../assets/leadership/y-guruji.jpg'
import rishiGuptaPhoto from '../assets/leadership/rishi-gupta.jpg'
import nabinKhetanPhoto from '../assets/leadership/nabin-khetan.jpg'
import hemanthMandaPhoto from '../assets/leadership/hemanth-manda.jpg'
import oneGbKartLogo from '../assets/brands/1gb-kart-logo.jpg'
import oneGbKartIcon from '../assets/brands/1gb-kart-icon.png'
import oneGbKartIconCard from '../assets/brands/1gb-kart-icon-card.jpg'
import unicornLogo from '../assets/brands/unicorn-logo.jpg'
import perfectTelelinksLogo from '../assets/brands/PERFECTTELILINKS_LOGO.jpg'
import transparentDealsLogo from '../assets/brands/TRANSPARETN_LOGO.jpg'
import kikakuEximLogo from '../assets/brands/KIKAKU_LOGO.jpg'
import phonehiveLogo from '../assets/brands/PHONEHIVE_LOGO.jpg'
import tranzfoneLogo from '../assets/brands/TRANZFONE_LOGO.jpg'
import celektLogo from '../assets/brands/celekt-logo.jpg'
import oneplusLogo from '../assets/brands/oneplus-logo.png'
import dashmobilesLogo from '../assets/brands/DASHMOBILES_FOR_PORTFOLIO.png'
import distributionEcosystemImg from '../assets/brands/distribution-ecosystem.png'
import './Portfolio.css'

const CHART_BAR_LEVELS = [
  0.22, 0.3, 0.24, 0.36, 0.3, 0.44, 0.36, 0.5, 0.42, 0.58, 0.5, 0.66, 0.58, 0.76, 0.66, 0.86, 0.78, 1,
]

function smoothPath(points) {
  if (points.length < 2) return ''
  let d = `M ${points[0][0]} ${points[0][1]}`
  for (let i = 1; i < points.length - 1; i++) {
    const [cx, cy] = points[i]
    const [nx, ny] = points[i + 1]
    const midX = (cx + nx) / 2
    const midY = (cy + ny) / 2
    d += ` Q ${cx} ${cy} ${midX} ${midY}`
  }
  const last = points[points.length - 1]
  d += ` L ${last[0]} ${last[1]}`
  return d
}

// Flat, static 2D chart — deliberately no 3D, tilt, or floating motion.
function GrowthChart() {
  const width = 520
  const height = 340
  const padTop = 26
  const padBottom = 18
  const barCount = CHART_BAR_LEVELS.length
  const gap = 6
  const barW = (width - gap * (barCount - 1)) / barCount
  const maxH = height - padTop - padBottom

  const bars = CHART_BAR_LEVELS.map((level, i) => {
    const barH = Math.max(6, level * maxH)
    const x = i * (barW + gap)
    const y = height - padBottom - barH
    return { x, y, w: barW, h: barH, lit: i % 4 === 3 }
  })

  const linePoints = CHART_BAR_LEVELS.map((level, i) => {
    const x = i * (barW + gap) + barW / 2
    const y = height - padBottom - (level * 0.82 + 0.08) * maxH
    return [x, y]
  })

  return (
    <svg
      className="pf-growth-chart"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pf-bar-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(52, 216, 255, 0.85)" />
          <stop offset="100%" stopColor="rgba(52, 216, 255, 0.08)" />
        </linearGradient>
        <linearGradient id="pf-bar-grad-lit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(180, 245, 255, 0.95)" />
          <stop offset="100%" stopColor="rgba(52, 216, 255, 0.14)" />
        </linearGradient>
      </defs>

      {bars.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={b.y}
          width={b.w}
          height={b.h}
          rx={Math.min(3, b.w * 0.25)}
          fill={b.lit ? 'url(#pf-bar-grad-lit)' : 'url(#pf-bar-grad)'}
        />
      ))}

      <path
        d={smoothPath(linePoints)}
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  )
}

const pillars = [
  { icon: 'chart', title: 'Scale', text: 'A distribution ecosystem and business presence spanning major North and South Indian markets, built for large-volume B2B requirements.' },
  { icon: 'network', title: 'Market Connectivity', text: 'Deep relationships with distributors and business partners, backed by a retail footprint of 100+ "Celekt" stores.' },
  { icon: 'target', title: 'Execution', text: 'A focus on reliable supply, efficient execution, quality service and sustainable long-term relationships.' },
]

const stats = [
  { value: '₹5,500+ Cr', label: 'Standalone turnover — Dashmobiles, FY 2025–26' },
  { value: '₹9,000+ Cr', label: 'Combined business volume of the Group' },
  { value: '350+', label: 'Business partners / distributors' },
  { value: '100+', label: '"Celekt" retail stores — Andhra Pradesh & Telangana' },
]

const chips = ['Pan India Presence', 'Multi-Category Portfolio']

const categories = [
  { no: '01', icon: 'smartphone', title: 'Electronics & Mobile Devices', text: 'A broad portfolio of Android and Apple smartphones & mobile devices, serving the evolving requirements of the consumer electronics market.' },
  { no: '02', icon: 'laptop', title: 'Computing & Tablets', text: 'MacBooks, iPads, tablets and other personal computing devices for modern business and consumer requirements.' },
  { no: '03', icon: 'headphones', title: 'Audio Products', text: 'Wireless earbuds, AirPods, neckbands and other personal audio devices.' },
  { no: '04', icon: 'watch', title: 'Smart Wearables', text: 'Smartwatches, WHOOP devices and other connected wearable technologies designed for today’s technology-driven consumer.' },
  { no: '05', icon: 'camera', title: 'Imaging & Optics', text: 'Cameras, camera lenses and related imaging products for professional and consumer applications.' },
  { no: '06', icon: 'glasses', title: 'Next-Generation Smart Technology', text: 'Smart glasses, including Meta smart glasses, and other emerging connected technology products.' },
]

const strengths = [
  'A network of approximately 350+ Business Partners',
  'Strong business presence across Pan India',
  'Multi-category consumer electronics portfolio',
  'Large-volume B2B business capability',
  'Efficient supply and distribution approach',
  'Strong understanding of regional market requirements',
  'Long-term relationship-driven business philosophy',
]

const work = [
  { no: '01', name: 'Unicorn Distribution', tag: 'Global Exports — UDPL', logo: unicornLogo },
  { no: '02', name: 'Celekt Mobiles', tag: 'Retail — 100+ Stores, AP & Telangana', logo: celektLogo, logoFlush: true },
  { no: '03', name: '1GB Techno Solutions Private Limited', tag: 'B2B Platform — 1GBKART.COM', logo: oneGbKartIconCard },
  { no: '04', name: 'Perfect Telelinks Private Limited', tag: 'Telecom & Electronics', logo: perfectTelelinksLogo },
  { no: '05', name: 'Dashmobiles Private Limited', tag: 'B2B Electronics Distribution', logo: dashmobilesLogo },
  { no: '06', name: 'Transparent Deals', tag: 'Group Company', logo: transparentDealsLogo },
  { no: '07', name: 'Kikaku Exim Private Limited', tag: 'Import & Export', logo: kikakuEximLogo },
  { no: '08', name: 'Phonehive Private Limited', tag: 'Mobile Devices', logo: phonehiveLogo },
  { no: '09', name: 'Tranzfone Private Limited', tag: 'Telecom & Electronics', logo: tranzfoneLogo },
]

const kartPortfolio = [
  'A single B2B marketplace for smartphones and electronics across every leading brand — built for large-volume, business-to-business ordering.',
  'We feature top brands including Apple, Samsung, OnePlus, vivo, Oppo, Xiaomi, Realme and Tecno — making 1GBKART.COM a trusted destination for tech retailers and distributors across India.',
]

const kartBrands = ['Apple', 'Samsung', 'OnePlus', 'vivo', 'Oppo', 'Xiaomi', 'Realme', 'Motorola']

const brandColors = {
  Apple: '#c9ccd1',
  Samsung: '#4b8bff',
  OnePlus: '#eb0028',
  vivo: '#6f93ff',
  Oppo: '#3ddc84',
  Xiaomi: '#ff6900',
  Realme: '#ffd23d',
  Motorola: '#4c9aff',
}

const leaders = [
  {
    name: 'Y Guru',
    role: 'Founder & CMD, Celkon Group',
    photo: yGurujiPhoto,
    bio: 'Mr. Y Guruswamy Naidu, Founder and CMD of Celkon Group, boasts over three decades of groundbreaking experience in the mobile industry. A pioneer in retail, distribution, and manufacturing, he embodies the philosophy "Here to Where," emphasizing success as an ongoing journey. From humble beginnings, Mr. Guru has revolutionized mobile and electronics manufacturing, seamlessly blending technology and human sensibilities. Under his leadership, Celkon Group thrives on passion and innovation, shaping the future of the industry. His journey stands as a beacon in the fast-paced tech world, showcasing the impact of visionary leadership.',
  },
  {
    name: 'Shashwat Agarwal',
    role: 'Founder & CEO, Dashmobiles Private Limited',
    photo: shashwatAgarwalPhoto,
    bio: 'As the CEO of Dashmobiles, Shashwat is the architect of our mission to build a powerful, future-ready B2B electronics distribution ecosystem connecting technology products with markets across India. With a focus on sustainable growth and cutting-edge performance, he drives our strategic initiatives and ensures our team remains at the forefront of the industry. His leadership continues to shape Dashmobiles into a brand synonymous with quality, reliability and forward-thinking innovation.',
  },
  {
    name: 'Nabin Khetan',
    role: 'CFO, Dashmobiles Private Limited',
    photo: nabinKhetanPhoto,
    bio: 'Nabin Khetan leads the financial operations at Dashmobiles with a focus on precision and scalable growth. By aligning our financial objectives with our core business goals, Nabin has streamlined our processes and ensured that our resources are utilized to deliver maximum value to our clients. His analytical approach and strategic foresight are vital to our mission, ensuring that Dashmobiles remains agile and resilient in an ever-evolving market.',
  },
  {
    name: 'Hemanth Manda',
    role: 'Director, Unicorn Distribution Pvt. Ltd.',
    photo: hemanthMandaPhoto,
    bio: 'Hemanth is a business professional with more than 10 years of experience in electronic exports from India, with strong relationships across Dubai, Hong Kong, Miami and Europe. His skills span business planning, new business development and operations.',
  },
  {
    name: 'Rishi Gupta',
    role: 'CXO, Dashmobiles Private Limited',
    photo: rishiGuptaPhoto,
    bio: 'As the CXO at Dashmobiles, Rishi is the driving force behind our commitment to excellence. He bridges the gap between complex technology and intuitive user experience, ensuring that every touchpoint with our brand is seamless, meaningful and impactful. By championing a user-first philosophy, Rishi leads our efforts to not only meet customer expectations but to anticipate their needs, positioning Dashmobiles as a leader in creating exceptional digital experiences.',
  },
]

const mission = [
  'Build a strong and dependable B2B electronics distribution network',
  'Deliver a diverse portfolio of technology products',
  'Strengthen relationships with distributors and business partners',
  'Expand our presence across all markets in India',
  'Maintain high standards of business execution and professionalism',
  'Adapt quickly to emerging technology categories and changing market demand',
  'Create sustainable growth for our company, Group and business partners',
]

const values = [
  { icon: 'shield', title: 'Integrity', text: 'We believe sustainable businesses are built on transparency, responsible conduct and trust.' },
  { icon: 'link', title: 'Relationships', text: 'We value long-term partnerships and believe that shared growth creates stronger businesses.' },
  { icon: 'zap', title: 'Agility', text: 'Technology markets move quickly. We remain responsive to changing products, categories and market requirements.' },
  { icon: 'check', title: 'Execution', text: 'We focus on turning strategy into measurable business performance through disciplined, efficient execution.' },
  { icon: 'layers', title: 'Scale', text: 'We build systems, networks and partnerships designed to support sustainable growth.' },
  { icon: 'spark', title: 'Innovation', text: 'We remain connected to emerging technology categories and evolving consumer demand.' },
]

function initials(name) {
  return name.split(' ').map((part) => part[0]).join('')
}

function SectionHead({ eyebrow, lines, text }) {
  return (
    <div className="pf-cine-section-head">
      <span className="pf-cine-eyebrow">{eyebrow}</span>
      <RevealLines as="h2" className="pf-cine-h2" lines={lines} />
      {text ? <p className="pf-cine-section-text">{text}</p> : null}
    </div>
  )
}

function About() {
  return (
    <section className="pf-cine-section">
      <div className="pf-cine-container">
        <SectionHead
          eyebrow="About Dashmobiles"
          lines={['A new-age mobiles & electronics', 'distribution enterprise built for scale.']}
        />
        <div className="pf-cine-about-grid">
          <motion.div
            className="pf-cine-about-copy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              Established in January 2025, Dashmobiles Private Limited has rapidly built a significant
              presence in India&rsquo;s B2B consumer electronics market, specially in the smartphones and
              mobiles segment.
            </p>
            <p>
              The company is engaged in the B2B sale and distribution of consumer electronics products,
              with a diverse portfolio covering smartphones, computing devices, tablets, audio products,
              wearables, imaging products, smart glasses and next-generation technology devices.
            </p>
            <p>
              In FY 2025&ndash;26, Dashmobiles Private Limited achieved a standalone turnover exceeding
              &#8377;5,500 crore, marking a significant milestone in the company&rsquo;s growth journey.
            </p>
            <p>
              Backed by a growing network of 350+ distributors and business partners and a retail
              footprint of 100+ &ldquo;Celekt&rdquo; stores, the company continues to expand its reach
              across North and South Indian markets &mdash; building the operational scale needed to
              serve large-volume B2B requirements reliably and efficiently.
            </p>
            <div className="pf-cine-about-highlight">
              <span className="pf-cine-about-highlight-value">&#8377;5,500+ Cr</span>
              <span className="pf-cine-about-highlight-label">Standalone turnover &mdash; FY 2025&ndash;26</span>
            </div>
          </motion.div>
          <div className="pf-cine-pillars">
            {pillars.map((item, index) => (
              <motion.div
                className="pf-cine-pillar"
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="pf-cine-icon-badge">
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section
      className="pf-cine-stats"
      style={{
        backgroundImage: `url(${distributionEcosystemImg})`,
      }}
    >
      <div className="pf-cine-container pf-cine-stats-grid">
        <div>
          <span className="pf-cine-eyebrow">Scale That Defines Us</span>
          <RevealLines
            as="h2"
            className="pf-cine-stats-headline"
            lines={['A distribution ecosystem', 'built to move at speed.']}
          />
          <div className="pf-cine-chips">
            {chips.map((chip) => (
              <span className="pf-cine-chip" key={chip}>{chip}</span>
            ))}
          </div>
        </div>
        <div className="pf-cine-stats-list">
          {stats.map((stat, index) => (
            <motion.div
              className="pf-cine-stat-row"
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="pf-cine-stat-value">
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="pf-cine-stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryIcon({ name, size = 40 }) {
  const shapes = {
    smartphone: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="3.2" fill="currentColor" />
        <rect x="8" y="4.6" width="8" height="12.8" rx="1" fill="rgba(255,255,255,0.95)" />
        <circle cx="12" cy="19.4" r="1.05" fill="rgba(11,11,12,0.4)" />
      </>
    ),
    laptop: (
      <>
        <path d="M4.5 5.5A1.5 1.5 0 0 1 6 4h12a1.5 1.5 0 0 1 1.5 1.5v9h-15z" fill="currentColor" />
        <rect x="6.8" y="6.3" width="10.4" height="6.2" rx="0.7" fill="rgba(255,255,255,0.95)" />
        <path d="M2 18.5h20l-1.8 2.3a1.2 1.2 0 0 1 -0.95 0.45H4.75a1.2 1.2 0 0 1 -0.95 -0.45z" fill="currentColor" opacity="0.85" />
      </>
    ),
    headphones: (
      <>
        <path d="M4.5 13.8v-1.3a7.5 7.5 0 0 1 15 0v1.3" stroke="currentColor" strokeWidth="2.3" fill="none" strokeLinecap="round" />
        <rect x="2.6" y="13.2" width="4.2" height="7.2" rx="2.1" fill="currentColor" />
        <rect x="17.2" y="13.2" width="4.2" height="7.2" rx="2.1" fill="currentColor" />
      </>
    ),
    watch: (
      <>
        <path d="M9.3 2.6h5.4l0.7 4h-6.8z M9.3 21.4h5.4l0.7 -4h-6.8z" fill="currentColor" />
        <circle cx="12" cy="12" r="6" fill="currentColor" />
        <circle cx="12" cy="12" r="3.3" fill="rgba(255,255,255,0.95)" />
        <path d="M12 10.1v2.1l1.5 1" stroke="rgba(11,11,12,0.4)" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    camera: (
      <>
        <path d="M4 8.5h3.6L9 6h6l1.4 2.5H20a1 1 0 0 1 1 1v9a1 1 0 0 1 -1 1H4a1 1 0 0 1 -1 -1v-9a1 1 0 0 1 1 -1z" fill="currentColor" />
        <circle cx="12" cy="13.2" r="3.6" fill="rgba(255,255,255,0.95)" />
        <circle cx="12" cy="13.2" r="1.5" fill="rgba(11,11,12,0.4)" />
        <circle cx="17.3" cy="7.6" r="0.9" fill="rgba(255,255,255,0.95)" />
      </>
    ),
    glasses: (
      <>
        <rect x="1.6" y="9.3" width="8.8" height="6.6" rx="2.6" fill="currentColor" />
        <rect x="13.6" y="9.3" width="8.8" height="6.6" rx="2.6" fill="currentColor" />
        <path d="M3.3 11l3.4 -0.6" stroke="rgba(255,255,255,0.45)" strokeWidth="0.9" fill="none" strokeLinecap="round" />
        <path d="M15.3 11l3.4 -0.6" stroke="rgba(255,255,255,0.45)" strokeWidth="0.9" fill="none" strokeLinecap="round" />
        <path d="M10.4 11.5h3.2" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M1.6 11.6 0.2 10.9 M22.4 11.6l1.4 -0.7" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M19.4 1.4c0.3 1.6 1 2.3 2.6 2.6 -1.6 0.3 -2.3 1 -2.6 2.6 -0.3 -1.6 -1 -2.3 -2.6 -2.6 1.6 -0.3 2.3 -1 2.6 -2.6z" fill="currentColor" />
      </>
    ),
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      {shapes[name] || null}
    </svg>
  )
}

function WhatWeDo() {
  return (
    <section className="pf-cine-section">
      <div className="pf-cine-container">
        <SectionHead
          eyebrow="What We Do"
          lines={['Connecting technology', 'with business opportunities.']}
          text="Dashmobiles Private Limited operates in the B2B sale and distribution of new consumer electronics and technology products, connecting a wide network of distributors and business partners across our key markets."
        />
        <div className="pf-cine-category-grid">
          {categories.map((item, index) => (
            <motion.div
              className="pf-cine-category-card"
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="pf-cine-category-head">
                <span className="pf-cine-icon-badge pf-cine-icon-badge--lg">
                  <CategoryIcon name={item.icon} size={40} />
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function B2BStrength() {
  return (
    <section className="pf-cine-section pf-cine-section--soft">
      <div className="pf-cine-container pf-cine-b2b-grid">
        <SectionHead
          eyebrow="Our B2B Strength"
          lines={['Distribution built around', 'scale, speed and relationships.']}
          text="At Dashmobiles, B2B distribution is more than the movement of products. It is about creating a dependable ecosystem where availability, execution, market understanding and relationships work together."
        />
        <ul className="pf-cine-strength-list">
          {strengths.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="pf-cine-strength-index">{String(index + 1).padStart(2, '0')}</span>
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function FeaturedWork() {
  const targetRef = useRef(null)
  const rowRef = useRef(null)
  // Measured rather than hardcoded — the row's content width grows every time
  // a company is added, and a fixed percentage falls short (CSS % transforms
  // resolve against the row's own layout width, not its scrollWidth).
  const [endX, setEndX] = useState('-100%')

  useEffect(() => {
    function measure() {
      const row = rowRef.current
      if (!row) return
      const overflow = row.scrollWidth - window.innerWidth + 32
      if (overflow <= 0) {
        setEndX('0%')
        return
      }
      setEndX(`-${(overflow / window.innerWidth) * 100}%`)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', endX])

  return (
    <section className="pf-cine-work" ref={targetRef}>
      <div className="pf-cine-work-sticky">
        <div className="pf-cine-container pf-cine-work-head">
          <span className="pf-cine-eyebrow">Our Group</span>
          <h2 className="pf-cine-work-heading">A Diversified Business Ecosystem</h2>
          <p className="pf-cine-section-text">
            Dashmobiles is part of a growing group of companies operating across electronics
            distribution, technology products and retail — with a combined business volume exceeding
            &#8377;9,000 crore and a retail footprint of 100+ &ldquo;Celekt&rdquo; stores across Andhra
            Pradesh and Telangana.
          </p>
        </div>
        <motion.div className="pf-cine-work-row" style={{ x }} ref={rowRef}>
          {work.map((item) => (
            <div className="pf-cine-card" key={item.name}>
              <div className="pf-cine-card-top">
                {item.logo ? (
                  <img
                    className={`pf-cine-card-logo ${item.logoFlush ? 'pf-cine-card-logo--flush' : ''}`}
                    src={item.logo}
                    alt={item.name}
                  />
                ) : null}
              </div>
              <span className="pf-cine-card-title-wrap">
                <span className="pf-cine-card-title">{item.name}</span>
              </span>
              <span className="pf-cine-card-tag">{item.tag}</span>
            </div>
          ))}
          <Link to="/our-group" className="pf-cine-card pf-cine-card--end">
            <span className="pf-cine-card-title">More at Our Group &rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function BrandLogo({ name }) {
  switch (name) {
    case 'Apple':
      return (
        <svg className="pf-brand-icon pf-brand-icon--apple" viewBox="0 0 24 24" aria-label="Apple">
          <path
            fill="#f2f4f8"
            d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.24-.02-.33-.03-.01-.1-.04-.4-.04-.7 0-1.08.523-2.22 1.16-2.95.75-.85 2.04-1.53 3.06-1.57.03.19.05.4.05.6zm4.565 16.1c-.03.08-.5 1.7-1.65 3.35-1 1.43-2.04 2.86-3.68 2.89-1.61.03-2.13-.95-3.97-.95-1.85 0-2.42.92-3.95.98-1.58.06-2.78-1.55-3.79-2.97-2.06-2.9-3.64-8.2-1.52-11.78 1.05-1.77 2.93-2.9 4.97-2.93 1.55-.03 3.02 1.04 3.97 1.04.94 0 2.72-1.29 4.59-1.1.78.03 2.97.32 4.38 2.4-.11.07-2.61 1.53-2.58 4.56.03 3.62 3.17 4.83 3.2 4.85z"
          />
        </svg>
      )
    case 'OnePlus':
      return <img className="pf-brand-icon pf-brand-icon--oneplus" src={oneplusLogo} alt="OnePlus" />
    case 'Xiaomi':
      return (
        <span className="pf-brand-badge" style={{ background: '#ff6900', borderRadius: '6px' }}>
          MI
        </span>
      )
    case 'Samsung':
      return (
        <span className="pf-brand-word" style={{ color: '#4b8bff' }}>
          SAMSUNG
        </span>
      )
    case 'vivo':
      return (
        <span className="pf-brand-word pf-brand-word--italic" style={{ color: '#6f93ff', fontSize: '28px' }}>
          vivo
        </span>
      )
    case 'Oppo':
      return (
        <span className="pf-brand-word" style={{ color: '#3ddc84' }}>
          OPPO
        </span>
      )
    case 'Realme':
      return (
        <span className="pf-brand-word pf-brand-word--italic" style={{ color: '#ffd23d' }}>
          realme
        </span>
      )
    case 'Motorola':
      return (
        <span className="pf-brand-word pf-brand-word--tight" style={{ color: '#4c9aff' }}>
          MOTOROLA
        </span>
      )
    default:
      return <span className="pf-brand-word">{name}</span>
  }
}

function BrandOrbit() {
  const nodeRadius = 38
  // Lines stop at the bubble's edge instead of running underneath it to its
  // center, so the spoke visibly "sticks" to each logo.
  const lineRadius = 26

  return (
    <div className="pf-cine-orbit">
      <svg className="pf-cine-orbit-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        {kartBrands.map((brand, index) => {
          const angle = (index / kartBrands.length) * Math.PI * 2 - Math.PI / 2
          const x = 50 + lineRadius * Math.cos(angle)
          const y = 50 + lineRadius * Math.sin(angle)
          return <line key={brand} x1="50" y1="50" x2={x} y2={y} className="pf-cine-orbit-line" />
        })}
      </svg>
      <div className="pf-cine-orbit-center">
        <img src={oneGbKartIcon} alt="1GB Kart" />
      </div>
      {kartBrands.map((brand, index) => {
        const angle = (index / kartBrands.length) * Math.PI * 2 - Math.PI / 2
        const x = 50 + nodeRadius * Math.cos(angle)
        const y = 50 + nodeRadius * Math.sin(angle)
        return (
          <div key={brand} className="pf-cine-orbit-node-wrap" style={{ left: `${x}%`, top: `${y}%` }}>
            <motion.div
              className="pf-cine-orbit-node"
              style={
                brand === 'OnePlus'
                  ? { background: '#ffffff', borderColor: brandColors[brand] }
                  : {
                      background: `color-mix(in srgb, ${brandColors[brand]} 30%, #0a0a10)`,
                      borderColor: `color-mix(in srgb, ${brandColors[brand]} 55%, transparent)`,
                    }
              }
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.22, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <BrandLogo name={brand} />
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}

function OneGbKart() {
  return (
    <section className="pf-cine-section pf-cine-section--soft">
      <div className="pf-cine-container pf-cine-kart-grid">
        <div className="pf-cine-kart-copy">
          <span className="pf-cine-eyebrow">Our Group — 1GB Techno Solutions Pvt. Ltd.</span>
          <RevealLines
            as="h2"
            className="pf-cine-h2"
            lines={['1GB Kart —', 'Every Brand. One B2B Marketplace.']}
          />
          <p className="pf-cine-section-text">
            1GB Kart is the Group&rsquo;s upcoming online B2B platform &mdash; 1GBKART.COM &mdash; built to
            connect distributors and business partners with a wide range of smartphones and electronics
            from every major brand, backed by 1GB Techno Solutions Private Limited.
          </p>
          <div className="pf-cine-kart-portfolio">
            <span className="pf-cine-kart-portfolio-label">Portfolio</span>
            <ul>
              {kartPortfolio.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pf-cine-kart-visual">
          <motion.img
            src={oneGbKartLogo}
            alt="1GB Kart"
            className="pf-cine-kart-logo"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />
          <BrandOrbit />
        </div>
      </div>
    </section>
  )
}

function LeaderCard({ name, role, photo, bio, delay = 0 }) {
  const photoEl = photo ? (
    <img className="pf-cine-leader-photo" src={photo} alt={name} />
  ) : (
    <span className="pf-cine-leader-initials">{initials(name)}</span>
  )

  const revealProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-10%' },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }

  if (bio) {
    return (
      <motion.div className="pf-cine-leader-card pf-cine-leader-card--bio" {...revealProps}>
        {photoEl}
        <div className="pf-cine-leader-card-body">
          <h3>{name}</h3>
          <p>{role}</p>
          <p className="pf-cine-leader-bio">{bio}</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div className="pf-cine-leader-card" {...revealProps}>
      {photoEl}
      <h3>{name}</h3>
      <p>{role}</p>
    </motion.div>
  )
}

function Leadership() {
  return (
    <section className="pf-cine-section">
      <div className="pf-cine-container">
        <SectionHead
          eyebrow="Leadership"
          lines={['Visionary leadership.', 'Experienced direction. Shared ambition.']}
          text="Our leadership brings together business experience, market understanding, entrepreneurial thinking and a shared commitment to building sustainable and scalable enterprises."
        />
        <div className="pf-cine-leader-block">
          <span className="pf-cine-leader-block-label">Meet Our Leadership Team</span>
          <div className="pf-cine-leader-grid">
            {leaders.map((leader, index) => (
              <LeaderCard key={leader.name} {...leader} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function VisionMission() {
  return (
    <section className="pf-cine-section pf-cine-section--soft">
      <div className="pf-cine-container">
        <div className="pf-cine-vision">
          <span className="pf-cine-eyebrow">Our Vision</span>
          <RevealLines
            as="h2"
            className="pf-cine-h2"
            lines={['To build a powerful, future-ready', 'technology distribution ecosystem.']}
          />
          <motion.p
            className="pf-cine-section-text pf-cine-vision-text"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.7 }}
          >
            We aspire to build a platform that connects technology products with markets efficiently,
            strengthens business partnerships and creates sustainable value across the distribution and
            retail network.
          </motion.p>
        </div>

        <div className="pf-cine-mission">
          <span className="pf-cine-eyebrow">Our Mission</span>
          <h2 className="pf-cine-h2 pf-cine-h2--tight">Scaling Access. Strengthening Partnerships. Creating Value.</h2>
          <ol className="pf-cine-mission-list">
            {mission.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.08 + Math.floor(index / 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="pf-cine-mission-index">{String(index + 1).padStart(2, '0')}</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section className="pf-cine-section">
      <div className="pf-cine-container">
        <SectionHead eyebrow="Our Values" lines={['The principles behind', 'our growth.']} />
        <div className="pf-cine-values-grid">
          {values.map((item, index) => (
            <motion.div
              className="pf-cine-value-tile"
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="pf-cine-icon-badge">
                <Icon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClosingCta() {
  return (
    <section className="pf-cine-cta">
      <div className="pf-cine-container pf-cine-cta-inner">
        <RevealLines
          as="h2"
          className="pf-cine-cta-headline"
          lines={['Let’s build the next', 'chapter, together.']}
        />
        <motion.a
          href="/contact"
          className="pf-cine-cta-btn"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Partner With Us
        </motion.a>
      </div>
    </section>
  )
}

function Portfolio() {
  usePageTitle('Interactive Portfolio')
  const scrollRef = useLenis()
  const reduceMotion = usePrefersReducedMotion()

  return (
    <div className="pf-cine">
      <div className="pf-cine-canvas-wrap">
        <Scene scrollRef={scrollRef} reduceMotion={reduceMotion} />
      </div>

      <section className="pf-cine-hero">
        <div className="pf-cine-container pf-cine-hero-row">
          <div className="pf-cine-hero-copy">
            <span className="pf-cine-eyebrow">Dashmobiles Private Limited — B2B Electronics Distribution</span>
            <RevealLines
              as="h1"
              className="pf-cine-headline"
              lines={['BUILT FOR SCALE.', 'DRIVEN BY TECHNOLOGY.', 'CONNECTED', 'ACROSS INDIA.']}
              animateOnMount
            />
            <motion.p
              className="pf-cine-sub"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Powering the future of B2B electronics distribution — connecting technology products with
              markets across North and South India.
            </motion.p>
          </div>
          <div className="pf-cine-hero-chart">
            <GrowthChart />
          </div>
        </div>
      </section>

      <div className="pf-cine-light-zone">
        <About />
        <Stats />
        <WhatWeDo />
        <B2BStrength />
        <FeaturedWork />
        <OneGbKart />
        <Leadership />
        <VisionMission />
        <Values />
        <ClosingCta />
      </div>
    </div>
  )
}

export default Portfolio
