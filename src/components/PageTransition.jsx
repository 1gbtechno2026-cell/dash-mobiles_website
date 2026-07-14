import { motion } from 'framer-motion'

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
        position: 'relative',
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
      }}
      exit={{
        // Taken out of flow on exit (rather than framer-motion's "popLayout"
        // mode) so the incoming page's whileInView/IntersectionObserver
        // children mount and settle undisturbed by the layout-projection
        // engine popLayout runs during the crossfade.
        opacity: 0,
        y: -6,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
      }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
