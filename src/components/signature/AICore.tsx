"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function Core() {
  const ref = useRef<any>(null);

  useFrame(() => {
    if(ref.current){
      ref.current.rotation.x += 0.002;
      ref.current.rotation.y += 0.003;
    }
  });

  return (
    <Float speed={3}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[2,2]} />
        <meshStandardMaterial
          color="#00ffff"
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function AICore() {
  return (
    <section className="h-screen bg-black">
      <Canvas camera={{position:[0,0,8]}}>
        <ambientLight intensity={2}/>
        <Core />
      </Canvas>
    </section>
  );
}
