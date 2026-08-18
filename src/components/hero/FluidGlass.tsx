"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  OrbitControls
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function GlassLens() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <mesh ref={ref} position={[-2.5,0,0]}>
      <cylinderGeometry args={[1,1,0.5,64]} />
      <MeshTransmissionMaterial
        transmission={1}
        thickness={2}
        roughness={0}
        ior={1.2}
        chromaticAberration={0.08}
      />
    </mesh>
  );
}

function GlassCube() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.25;
    ref.current.rotation.y = state.clock.elapsedTime * 0.4;
  });

  return (
    <mesh ref={ref} position={[2.5,0,0]}>
      <boxGeometry args={[1.6,1.6,1.6]} />
      <MeshTransmissionMaterial
        transmission={1}
        thickness={3}
        roughness={0}
        ior={1.15}
      />
    </mesh>
  );
}

function AISphere() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    ref.current.position.y =
      Math.sin(state.clock.elapsedTime) * 0.4;

    ref.current.rotation.y =
      state.clock.elapsedTime * 0.6;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.2,1]} />
      <MeshTransmissionMaterial
        transmission={1}
        thickness={4}
        roughness={0}
        ior={1.25}
        chromaticAberration={0.1}
      />
    </mesh>
  );
}

export default function FluidGlass() {
  return (
    <div className="absolute inset-0">

      <Canvas camera={{ position:[0,0,8] }}>

        <ambientLight intensity={2} />

        <pointLight
          position={[5,3,2]}
          intensity={4}
          color="#7df9ff"
        />

        <pointLight
          position={[-5,3,2]}
          intensity={4}
          color="#66ffe3"
        />

        <GlassLens />
        <GlassCube />
        <AISphere />

        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
        />

      </Canvas>

    </div>
  );
}
