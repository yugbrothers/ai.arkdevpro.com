"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";

export default function SkillGalaxy() {
  return (
    <div className="h-[700px]">

      <Canvas>

        <Stars />

        <Float speed={2}>
          <mesh>
            <icosahedronGeometry args={[2,2]} />
            <meshStandardMaterial wireframe />
          </mesh>
        </Float>

        <ambientLight intensity={3} />

      </Canvas>

    </div>
  );
}
