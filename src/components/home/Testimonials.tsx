"use client";

import FadeUp from "@/components/effects/FadeUp";

export default function Testimonials() {
  return (
    <section className="py-32 px-8">

      <div className="max-w-6xl mx-auto">

        <FadeUp>

          <h2 className="text-5xl font-bold text-center">
            Testimonials
          </h2>

          <p className="text-zinc-400 mt-8 text-center">
            Recommendations and client feedback will appear here.
          </p>

        </FadeUp>

      </div>

    </section>
  );
}
