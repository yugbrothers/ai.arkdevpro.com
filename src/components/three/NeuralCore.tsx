"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  OrbitControls
} from "@react-three/drei";

export default function NeuralCore() {
  return (
    <section className="h-[700px] w-full">

      <Canvas camera={{ position: [0, 0, 6] }}>

        <ambientLight intensity={2} />

        <pointLight
          position={[5, 5, 5]}
          intensity={4}
        />

        <Float
          speed={3}
          rotationIntensity={2}
          floatIntensity={2}
        >
          <mesh>

            <icosahedronGeometry args={[2, 32]} />

            <MeshDistortMaterial
              distort={0.45}
              speed={3}
            />

          </mesh>
        </Float>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
        />

      </Canvas>

    </section>
  );
}
