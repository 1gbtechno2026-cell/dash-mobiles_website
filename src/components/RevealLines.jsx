import { motion } from 'framer-motion'

const variants = {
  hidden: { y: '110%' },
  visible: { y: '0%' },
}

function RevealLines({ lines, as: Tag = 'div', className = '', delay = 0, stagger = 0.09, animateOnMount = false }) {
  // Above-the-fold content (e.g. the hero headline) can already sit inside the
  // viewport the instant it mounts — right after a client-side route change,
  // whileInView's IntersectionObserver isn't guaranteed to fire for an element
  // that never crosses into view, so it can stay stuck at its hidden state.
  // animateOnMount plays the reveal unconditionally instead of waiting on scroll.
  const viewProps = animateOnMount
    ? { animate: 'visible' }
    : { whileInView: 'visible', viewport: { once: true, margin: '-5%' } }

  return (
    <Tag className={className}>
      {lines.map((line, index) => (
        // whileInView is tracked on this untransformed mask, not the sliding
        // span itself: .reveal-line-mask clips overflow, so while the inner
        // span sits at its hidden translateY(110%), it's fully clipped out of
        // the mask's box — IntersectionObserver honors that ancestor clip and
        // reports ~0% intersection no matter the scroll position. Observing
        // the mask (which never moves) and letting the inner span inherit the
        // variant avoids that self-clipping deadlock.
        <motion.span
          className="reveal-line-mask"
          key={line + index}
          initial="hidden"
          {...viewProps}
        >
          <motion.span
            className="reveal-line"
            variants={variants}
            transition={{ duration: 0.9, delay: delay + index * stagger, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.span>
        </motion.span>
      ))}
    </Tag>
  )
}

export default RevealLines
