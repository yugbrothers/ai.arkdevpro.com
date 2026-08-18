"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Planet({ position }: any) {
  return (
    <Float speed={2}>
      <mesh position={position}>
        <sphereGeometry args={[0.7,64,64]} />
        <meshStandardMaterial />
      </mesh>
    </Float>
  );
}

export default function ProjectGalaxy() {
  return (
    <div className="h-[800px]">
      <Canvas>

        <ambientLight intensity={3} />

        <Planet position={[-3,0,0]} />
        <Planet position={[0,2,0]} />
        <Planet position={[3,0,0]} />
        <Planet position={[0,-2,0]} />

      </Canvas>
    </div>
  );
}
