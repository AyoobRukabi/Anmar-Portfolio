'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  const particleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 2000 : 5000

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 100
      positions[i3 + 1] = (Math.random() - 0.5) * 100
      positions[i3 + 2] = (Math.random() - 0.5) * 50

      const isGold = Math.random() > 0.95
      if (isGold) {
        colors[i3] = 1.0
        colors[i3 + 1] = 0.843
        colors[i3 + 2] = 0.0
      } else {
        const gray = Math.random() * 0.5 + 0.5
        colors[i3] = gray
        colors[i3 + 1] = gray
        colors[i3 + 2] = gray
      }
    }

    return [positions, colors]
  }, [particleCount])

  useFrame((state) => {
    if (!particlesRef.current) return

    const time = state.clock.getElapsedTime()
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3 + 1] += Math.sin(time + i) * 0.01
      positions[i3] += Math.cos(time + i) * 0.005

      if (positions[i3 + 1] > 50) positions[i3 + 1] = -50
      if (positions[i3] > 50) positions[i3] = -50
      if (positions[i3] < -50) positions[i3] = 50
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true
    
    particlesRef.current.rotation.y = mouseRef.current.x * 0.0005
    particlesRef.current.rotation.x = mouseRef.current.y * 0.0005
  })

  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      mouseRef.current.x = e.clientX - window.innerWidth / 2
      mouseRef.current.y = e.clientY - window.innerHeight / 2
    })
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
        <ParticleField />
      </Canvas>
    </div>
  )
}
