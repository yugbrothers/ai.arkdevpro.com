"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

export default function AICore() {
  return (
    <div className="h-[700px] w-full">

      <Canvas camera={{ position: [0,0,4] }}>

        <ambientLight intensity={2} />

        <directionalLight
          position={[5,5,5]}
          intensity={3}
        />

        <Float
          speed={2}
          rotationIntensity={2}
          floatIntensity={3}
        >
          <mesh>
            <icosahedronGeometry args={[1.3, 32]} />

            <MeshDistortMaterial
              color="#00ffff"
              distort={0.45}
              speed={3}
              roughness={0}
            />
          </mesh>
        </Float>

      </Canvas>

    </div>
  );
}
