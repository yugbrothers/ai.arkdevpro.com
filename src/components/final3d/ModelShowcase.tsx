"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function ModelShowcase() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black">

      <div className="w-full h-[700px]">

        <Canvas camera={{ position:[0,0,5] }}>

          <ambientLight intensity={2} />

          <mesh rotation={[0.5,0.5,0]}>
            <torusKnotGeometry args={[1,0.35,200,32]} />
            <meshStandardMaterial
              color="#00ffff"
              metalness={1}
              roughness={0}
            />
          </mesh>

          <OrbitControls autoRotate />

        </Canvas>

      </div>

    </section>
  );
}
