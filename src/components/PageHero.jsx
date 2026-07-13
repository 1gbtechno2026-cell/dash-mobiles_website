import { motion } from 'framer-motion'
import './PageHero.css'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero glow-surface">
      <motion.div className="container" initial="hidden" animate="visible" variants={container}>
        <motion.span className="eyebrow eyebrow--light" variants={item}>
          {eyebrow}
        </motion.span>
        <motion.h1 variants={item}>{title}</motion.h1>
        {text && <motion.p variants={item}>{text}</motion.p>}
      </motion.div>
    </section>
  )
}

export default PageHero
