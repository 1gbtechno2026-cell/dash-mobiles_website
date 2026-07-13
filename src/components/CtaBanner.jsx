import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './CtaBanner.css'

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function CtaBanner({
  eyebrow = 'Partner With Us',
  title,
  text,
  primary = { to: '/contact', label: 'Get In Touch' },
  secondary = { to: '/about', label: 'About Dashmobiles' },
}) {
  return (
    <section className="cta-banner glow-surface">
      <motion.div
        className="container cta-banner-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={variants}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
          <h2>{title}</h2>
          {text && <p>{text}</p>}
        </div>
        <div className="cta-banner-actions">
          {primary && (
            <Link className="btn btn--light" to={primary.to}>
              {primary.label}
            </Link>
          )}
          {secondary && (
            <Link className="btn btn--outline" to={secondary.to}>
              {secondary.label}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default CtaBanner
