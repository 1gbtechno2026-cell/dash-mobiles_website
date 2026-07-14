import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

function useLenis({ disabled = false } = {}) {
  const progressRef = useRef(0)
  const lenisRef = useRef(null)

  useEffect(() => {
    if (disabled) return undefined

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ({ progress }) => {
      progressRef.current = progress
    })

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [disabled])

  return progressRef
}

export default useLenis
