"use client";

import { motion } from "framer-motion";

export default function ParallaxImage({
  src,
}: {
  src: string;
}) {
  return (
    <motion.img
      src={src}
      alt=""
      whileHover={{
        scale: 1.08,
        rotateX: 10,
        rotateY: 10
      }}
      transition={{ duration: 0.4 }}
      className="w-full h-full object-cover"
    />
  );
}
