import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import type { Mesh } from 'three'
import type { Group } from 'three'

function Sculpture() {
  const group = useRef<Group>(null)
  const orb = useRef<Mesh>(null)
  useFrame(({ pointer, clock }) => {
    // Subtle pointer parallax and idle motion keep the hero sculpture feeling alive.
    if (group.current) {
      group.current.rotation.y += ((pointer.x * 0.25) - group.current.rotation.y) * 0.025
      group.current.rotation.x += ((-pointer.y * 0.18) - group.current.rotation.x) * 0.025
    }
    if (orb.current) orb.current.rotation.y = clock.elapsedTime * 0.14
  })
  return <group ref={group}>
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.35}>
      <mesh ref={orb} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.55, 24]} />
        <MeshDistortMaterial color="#df654d" roughness={0.2} metalness={0.45} distort={0.28} speed={1.4} />
      </mesh>
      <mesh rotation={[0.5, 0.2, 0.4]} scale={1.13}>
        <icosahedronGeometry args={[1.58, 1]} />
        <meshBasicMaterial color="#f3c5a7" wireframe transparent opacity={0.13} />
      </mesh>
      <mesh position={[1.8, 1.15, -0.5]} rotation={[0.5, 0.4, 0.3]}>
        <torusGeometry args={[0.28, 0.09, 12, 40]} /><meshStandardMaterial color="#f2e8da" metalness={0.8} roughness={0.25} />
      </mesh>
      <mesh position={[-1.7, -1.15, 0.4]} rotation={[0.5, 0.4, 0.3]}>
        <octahedronGeometry args={[0.23]} /><meshStandardMaterial color="#df654d" metalness={0.55} roughness={0.3} />
      </mesh>
    </Float>
  </group>
}

export default function Scene() {
  return <Canvas dpr={[1, 1.7]} camera={{ position: [0, 0, 6.2], fov: 42 }} gl={{ antialias: true, alpha: true }}>
    <ambientLight intensity={1.2} /><pointLight position={[3, 3, 4]} intensity={18} color="#ffb79d" /><pointLight position={[-4, -2, 2]} intensity={12} color="#aaa6ff" />
    <Suspense fallback={null}><Sculpture /><Stars radius={45} depth={18} count={350} factor={1.4} saturation={0} fade speed={0.25} /></Suspense>
  </Canvas>
}
