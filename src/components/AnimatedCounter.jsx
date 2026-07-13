import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

function parseValue(raw) {
  const match = String(raw).match(/^([^\d]*)([\d,]+)(.*)$/)
  if (!match) return null
  const [, prefix, digits, suffix] = match
  const target = parseInt(digits.replace(/,/g, ''), 10)
  return { prefix, target, suffix, hasComma: digits.includes(',') }
}

function format(n, hasComma) {
  const rounded = Math.round(n)
  return hasComma ? rounded.toLocaleString('en-IN') : String(rounded)
}

function AnimatedCounter({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const parsed = parseValue(value)
  const [display, setDisplay] = useState(parsed ? format(0, parsed.hasComma) : value)

  useEffect(() => {
    if (!inView || !parsed) return undefined
    const controls = animate(0, parsed.target, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(format(latest, parsed.hasComma)),
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  if (!parsed) {
    return <span ref={ref}>{value}</span>
  }

  return (
    <span ref={ref}>
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  )
}

export default AnimatedCounter
