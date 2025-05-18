import { Canvas } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo } from 'react'

export default function DotLightsBackground() {
  const points = useMemo(() =>
    Array.from({ length: 5000 }, () => [
      THREE.MathUtils.randFloatSpread(100),
      THREE.MathUtils.randFloatSpread(100),
      THREE.MathUtils.randFloatSpread(100),
    ])
  , [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Points positions={points} stride={3} frustumCulled>
          <PointMaterial
            transparent
            color="#ffffff"
            size={0.01}
            sizeAttenuation
            depthWrite={false}
          />
        </Points>
        <Preload all />
      </Canvas>
    </div>
  )
}
