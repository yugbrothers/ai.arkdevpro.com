"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AISphere() {
  return (
    <div className="h-[500px] w-full">
      <Canvas>

        <ambientLight intensity={2} />

        <Float speed={2}>
          <Sphere args={[1.5, 128, 128]}>
            <MeshDistortMaterial
              distort={0.5}
              speed={3}
            />
          </Sphere>
        </Float>

      </Canvas>
    </div>
  );
}
