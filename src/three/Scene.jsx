import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import ParticleField from './ParticleField'

function CameraRig({ scrollRef }) {
  useFrame((state) => {
    const progress = scrollRef?.current ?? 0
    state.camera.position.z = 5.4 - progress * 1.4
    state.camera.position.y = -progress * 1.1
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

function SceneContents({ pointer, scrollRef }) {
  return (
    <>
      <ParticleField pointer={pointer} scrollRef={scrollRef} />
      <CameraRig scrollRef={scrollRef} />
    </>
  )
}

function Scene({ scrollRef, reduceMotion = false }) {
  const pointer = useRef({ x: 0, y: 0, active: false })

  useEffect(() => {
    if (reduceMotion) return undefined

    const handleMove = (event) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = -((event.clientY / window.innerHeight) * 2 - 1)
      pointer.current.active = true
    }
    const handleLeave = () => {
      pointer.current.active = false
    }

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerleave', handleLeave)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerleave', handleLeave)
    }
  }, [reduceMotion])

  if (reduceMotion) return null

  return (
    <Canvas
      className="pf-canvas"
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.4], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <SceneContents pointer={pointer} scrollRef={scrollRef} />
    </Canvas>
  )
}

export default Scene
