"use client";

import { motion } from "framer-motion";

const logos = [
  "React",
  "NextJS",
  "Python",
  "TensorFlow",
  "OpenCV",
  "NodeJS",
  "YOLOv8",
  "ThreeJS"
];

export default function LogoCloud3D() {
  return (
    <section className="py-32">

      <div className="flex flex-wrap justify-center gap-8">

        {logos.map((logo, i) => (

          <motion.div
            key={logo}
            animate={{
              y: [-10, 10, -10],
              rotateY: [0, 360]
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + i
            }}
            className="
              px-8
              py-4
              rounded-full
              border
              border-cyan-500/30
              bg-black/40
              backdrop-blur-xl
            "
          >
            {logo}
          </motion.div>

        ))}

      </div>

    </section>
  );
}
