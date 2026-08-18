"use client";

import FluidGlass from "@/components/hero/FluidGlass";
import MouseGlow from "@/components/hero/MouseGlow";
import BackgroundParticles from "@/components/hero/BackgroundParticles";
import FloatingIcons from "@/components/hero/FloatingIcons";
import NeuralBackground from "@/components/hero/NeuralBackground";
import AIOrb from "@/components/hero/AIOrb";
import FloatingTechLogos from "@/components/effects/FloatingTechLogos";
import HolographicTitle from "@/components/effects/HolographicTitle";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      <MouseGlow />
      <BackgroundParticles />
      <NeuralBackground />
      <FloatingIcons />
      <AIOrb />
      <FloatingTechLogos />
      <HolographicTitle />

      <div className="absolute inset-0 opacity-60">
        <FluidGlass />
      </div>

      <div className="relative z-10 text-center px-6">

        <p className="text-lime-300 tracking-[0.4em] uppercase mb-6">
          Software Engineer • AI Developer
        </p>

        <h1 className="text-7xl md:text-9xl font-bold">
          AI Architecture
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-zinc-400 text-lg">
          Building modern digital experiences through engineering,
          artificial intelligence and product design.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <a
            href="#projects"
            className="rounded-full bg-white text-black px-8 py-4 font-semibold"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-8 py-4"
          >
            Contact
          </a>

        </div>

      </div>

    </section>
  );
}