"use client";

import Link from "next/link";

const worlds = [
  ["AI Universe","/ai"],
  ["Project Galaxy","/projects"],
  ["Neural Network","/neural"],
  ["Research Lab","/research"],
  ["Academy","/academy"],
  ["Vision World","/vision"],
  ["Control Center","/control"],
  ["Vault","/vault"]
];

export default function WorldCards() {
  return (
    <section className="min-h-screen px-10 py-24">
      <h2 className="text-6xl font-bold text-center mb-20">
        Explore My Worlds
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {worlds.map(([name,href]) => (
          <Link
            key={name}
            href={href}
            className="
            group
            p-10
            rounded-3xl
            border
            border-cyan-500/20
            bg-white/5
            backdrop-blur-xl
            hover:scale-105
            hover:border-cyan-400
            transition-all
            "
          >
            <div className="text-2xl font-bold">
              {name}
            </div>

            <div className="mt-4 opacity-60">
              Enter World →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
