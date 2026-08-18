"use client";

import Link from "next/link";

const worlds = [
  ["Projects Galaxy","/projects"],
  ["AI Universe","/universe"],
  ["Developer Lab","/lab"],
  ["Experience Planet","/experience"],
  ["Skills Nebula","/skills"],
  ["Dashboard","/dashboard"],
];

export default function WorldNavigator() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-20">
          Explore Worlds
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {worlds.map(([name,url]) => (
            <Link
              key={name}
              href={url}
              className="
                rounded-3xl
                border
                border-cyan-500/30
                p-10
                bg-white/5
                hover:scale-105
                transition-all
                duration-500
              "
            >
              <h3 className="text-2xl font-bold">
                {name}
              </h3>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
