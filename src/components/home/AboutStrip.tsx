"use client";

import FadeUp from "@/components/effects/FadeUp";

export default function AboutStrip() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-6xl mx-auto">

        <FadeUp>

          <h2 className="text-5xl font-bold">
            About Me
          </h2>

          <p className="mt-8 text-zinc-400 text-lg max-w-3xl">
            I build AI systems, full-stack applications,
            computer vision solutions and modern digital products.
          </p>

        </FadeUp>

      </div>
    </section>
  );
}
