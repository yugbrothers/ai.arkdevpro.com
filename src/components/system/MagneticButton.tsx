"use client";

import { motion } from "framer-motion";

export default function MagneticButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="
      px-8 py-4
      rounded-2xl
      bg-cyan-500
      text-black
      font-bold
      "
    >
      Launch Project
    </motion.button>
  );
}
