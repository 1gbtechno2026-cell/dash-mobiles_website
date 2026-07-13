import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'
import './StatGrid.css'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

function StatGrid({ stats, dark = false }) {
  return (
    <motion.div
      className={`stat-grid ${dark ? 'stat-grid--dark' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={container}
    >
      {stats.map((stat) => (
        <motion.div className="stat-card" key={stat.value} variants={item}>
          <div className="stat-value">
            <AnimatedCounter value={stat.value} />
          </div>
          <div className="stat-label">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default StatGrid
