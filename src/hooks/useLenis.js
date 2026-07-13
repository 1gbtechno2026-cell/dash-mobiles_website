import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

function useLenis({ disabled = false } = {}) {
  const progressRef = useRef(0)
  const lenisRef = useRef(null)

  useEffect(() => {
    if (disabled) return undefined

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
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
