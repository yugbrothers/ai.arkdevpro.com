"use client";

import FadeUp from "@/components/effects/FadeUp";

const expertise = [
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Full Stack Development",
  "UI/UX Design",
  "Cloud Deployment"
];

export default function Expertise() {
  return (
    <section className="py-32 px-8">

      <div className="max-w-6xl mx-auto">

        <FadeUp>
          <h2 className="text-5xl font-bold text-center mb-16">
            Expertise
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">

          {expertise.map((item) => (
            <FadeUp key={item}>
              <div className="rounded-3xl border border-white/10 p-10 bg-white/[0.03] hover:border-cyan-400 transition">
                {item}
              </div>
            </FadeUp>
          ))}

        </div>

      </div>

    </section>
  );
}
