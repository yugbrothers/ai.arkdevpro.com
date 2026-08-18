"use client";

import AnimatedCounter from "./AnimatedCounter";

export default function Stats() {

  return (

    <section className="py-24">

      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-4 gap-8">

        <div className="rounded-3xl border border-white/10 p-10 text-center">
          <div className="text-5xl font-bold">
            <AnimatedCounter end={15}/>
          </div>
          <div className="mt-4 text-zinc-400">
            Projects
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 p-10 text-center">
          <div className="text-5xl font-bold">
            <AnimatedCounter end={5}/>
          </div>
          <div className="mt-4 text-zinc-400">
            AI Systems
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 p-10 text-center">
          <div className="text-5xl font-bold">
            <AnimatedCounter end={3}/>
          </div>
          <div className="mt-4 text-zinc-400">
            Years Learning
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 p-10 text-center">
          <div className="text-5xl font-bold">
            <AnimatedCounter end={100}/>
          </div>
          <div className="mt-4 text-zinc-400">
            Ideas Built
          </div>
        </div>

      </div>

    </section>

  );
}
