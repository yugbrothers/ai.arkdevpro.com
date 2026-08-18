"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function Core() {
  const ref = useRef<any>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.003;
    ref.current.rotation.x += 0.001;
  });

  return (
    <Float speed={3}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[2,5]} />
        <meshStandardMaterial
          wireframe
          emissive="cyan"
        />
      </mesh>
    </Float>
  );
}

export default function DataCore() {
  return (
    <div className="h-[700px]">
      <Canvas>
        <ambientLight intensity={4} />
        <Core />
      </Canvas>
    </div>
  );
}
