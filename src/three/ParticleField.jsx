import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function ParticleField({ count = 900, pointer, scrollRef }) {
  const pointsRef = useRef(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 6 + Math.random() * 9
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = radius * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    const scrollProgress = scrollRef?.current ?? 0
    pointsRef.current.rotation.y += delta * 0.02
    pointsRef.current.rotation.x = scrollProgress * 0.6
    const px = pointer?.current?.x ?? 0
    const py = pointer?.current?.y ?? 0
    pointsRef.current.position.x += (px * 0.6 - pointsRef.current.position.x) * 0.03
    pointsRef.current.position.y += (py * 0.4 - pointsRef.current.position.y) * 0.03
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#8fe9ff" size={0.028} sizeAttenuation transparent opacity={0.55} depthWrite={false} />
    </points>
  )
}

export default ParticleField
