"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Text, OrbitControls } from "@react-three/drei";

export default function SkillSphere() {
  const skills = [
    "React","NextJS","Node",
    "Python","AI","ML",
    "YOLO","TensorFlow"
  ];

  return (
    <section className="py-32 bg-black">
      <h2 className="text-center text-5xl font-bold mb-12">
        Skill Universe
      </h2>

      <div className="h-[700px]">
        <Canvas camera={{ position:[0,0,10] }}>
          <ambientLight intensity={2} />

          {skills.map((s,i)=>(
            <Float key={s}>
              <Text
                position={[
                  Math.sin(i)*4,
                  Math.cos(i)*3,
                  Math.sin(i*2)*2
                ]}
                fontSize={0.4}
              >
                {s}
              </Text>
            </Float>
          ))}

          <OrbitControls autoRotate />
        </Canvas>
      </div>
    </section>
  );
}
