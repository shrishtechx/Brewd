import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

/** A single coffee bean as a slightly squashed sphere with a seam. */
function Bean({ scale = 1 }: { scale?: number }) {
  return (
    <group scale={scale}>
      <mesh>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshStandardMaterial color="#2A160D" roughness={0.6} metalness={0.1} />
      </mesh>
      <mesh scale={[1.02, 1.02, 1.02]}>
        <torusGeometry args={[0.001, 0.02, 8, 24]} />
        <meshStandardMaterial color="#7A5C24" />
      </mesh>
    </group>
  );
}

/** Orbiting beans around the filter. */
function OrbitingBeans() {
  const group = useRef<THREE.Group>(null);
  const beans = useMemo(
    () =>
      Array.from({ length: 7 }).map((_, i) => ({
        angle: (i / 7) * Math.PI * 2,
        radius: 2.1 + (i % 3) * 0.25,
        y: Math.sin(i) * 0.6,
        speed: 0.2 + (i % 4) * 0.05,
        scale: 0.8 + (i % 3) * 0.2,
      })),
    []
  );

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.18;
  });

  return (
    <group ref={group}>
      {beans.map((b, i) => (
        <group
          key={i}
          position={[
            Math.cos(b.angle) * b.radius,
            b.y,
            Math.sin(b.angle) * b.radius,
          ]}
          rotation={[b.angle, b.angle * 2, 0]}
        >
          <Bean scale={b.scale} />
        </group>
      ))}
    </group>
  );
}

/** A stylized brass South Indian filter. */
function BrassFilter() {
  const brass = (
    <meshStandardMaterial color="#B08A3E" roughness={0.25} metalness={0.95} />
  );
  return (
    <group>
      {/* upper chamber */}
      <mesh position={[0, 0.9, 0]}>
        <cylinderGeometry args={[0.78, 0.74, 0.95, 48]} />
        {brass}
      </mesh>
      {/* lid */}
      <mesh position={[0, 1.45, 0]}>
        <cylinderGeometry args={[0.6, 0.78, 0.18, 48]} />
        {brass}
      </mesh>
      {/* knob */}
      <mesh position={[0, 1.62, 0]}>
        <sphereGeometry args={[0.12, 24, 24]} />
        {brass}
      </mesh>
      {/* press band */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.08, 48]} />
        <meshStandardMaterial color="#7A5C24" roughness={0.4} metalness={0.8} />
      </mesh>
      {/* lower chamber */}
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.74, 0.62, 0.95, 48]} />
        {brass}
      </mesh>
      {/* decoction stream */}
      <mesh position={[0, -1.1, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 1.1, 12]} />
        <meshStandardMaterial
          color="#2A160D"
          roughness={0.2}
          transparent
          opacity={0.85}
        />
      </mesh>
      {/* tumbler */}
      <mesh position={[0, -1.85, 0]}>
        <cylinderGeometry args={[0.42, 0.32, 0.6, 40]} />
        {brass}
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 6], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1.4} color="#fff3d6" />
      <directionalLight position={[-4, 2, -3]} intensity={0.5} color="#D4AF5A" />
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={1.1}>
          <BrassFilter />
        </group>
      </Float>
      <OrbitingBeans />
      <Environment preset="sunset" />
    </Canvas>
  );
}
