"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AILab() {
  return (
    <section className="py-40">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-cyan-400 uppercase tracking-[0.4em]">
            AI LAB
          </p>

          <h2 className="text-6xl font-bold mt-6">
            Building Intelligent Systems
          </h2>

          <p className="mt-8 text-zinc-400 text-lg">
            Computer Vision, Deep Learning, Generative AI,
            Neural Networks and Full Stack Engineering.
          </p>

        </div>

        <div className="h-[500px]">

          <Canvas camera={{ position:[0,0,4] }}>

            <ambientLight intensity={2} />

            <Float speed={2} rotationIntensity={2}>

              <Sphere args={[1.4,128,128]}>

                <MeshDistortMaterial
                  color="#66ffe3"
                  distort={0.45}
                  speed={2}
                />

              </Sphere>

            </Float>

          </Canvas>

        </div>

      </div>

    </section>
  );
}
