"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

function Orb() {
  return (
    <Float speed={2} rotationIntensity={2}>
      <mesh>
        <icosahedronGeometry args={[2, 8]} />
        <MeshDistortMaterial
          color="#22d3ee"
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </mesh>
    </Float>
  );
}

export default function AICore() {
  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={2} />
        <pointLight position={[5,5,5]} />
        <Orb />
      </Canvas>
    </div>
  );
}
