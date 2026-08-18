"use client";

import Link from "next/link";

const worlds = [
  ["AI Universe","/ai"],
  ["Projects Galaxy","/projects"],
  ["Skills Nebula","/skills"],
  ["Neural Core","/neural"],
  ["Innovation Lab","/innovation"],
  ["Command Center","/command"],
  ["Research Center","/research"],
  ["Academy","/academy"],
  ["Vision Space","/vision"],
  ["Control Room","/control"],
  ["Developer Vault","/vault"],
  ["GitHub Hub","/github"]
];

export default function PremiumWorldCards() {
  return (
    <section className="pb-32">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-8">

          {worlds.map(([title,route],index)=>(
            <Link
              key={route}
              href={route}
              className="
                group
                relative
                h-[220px]
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                hover:border-cyan-400
                hover:scale-105
                transition-all
              "
            >

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  bg-gradient-to-br
                  from-cyan-500/10
                  via-blue-500/10
                  to-purple-500/10
                "
              />

              <div className="p-8 relative z-10">

                <div className="text-sm text-cyan-400">
                  NODE {index + 1}
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {title}
                </h3>

                <div className="mt-10 text-zinc-500">
                  Access →
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}
