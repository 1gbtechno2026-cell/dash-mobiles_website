import { motion } from 'framer-motion'

const variants = {
  hidden: { y: '110%' },
  visible: { y: '0%' },
}

function RevealLines({ lines, as: Tag = 'div', className = '', delay = 0, stagger = 0.09 }) {
  return (
    <Tag className={className}>
      {lines.map((line, index) => (
        <span className="reveal-line-mask" key={line + index}>
          <motion.span
            className="reveal-line"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={variants}
            transition={{ duration: 0.9, delay: delay + index * stagger, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

export default RevealLines
