"use client";

export default function Architecture() {
  return (
    <section className="py-40 px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-6xl font-bold text-center">
          System Architecture
        </h2>

        <p className="text-zinc-400 text-center mt-6">
          AI • Backend • Cloud • Data Flow
        </p>

        <div className="mt-20 grid md:grid-cols-4 gap-8">

          <div className="rounded-3xl border border-cyan-500/20 p-10 bg-cyan-500/5">
            <h3 className="text-xl font-bold">Frontend</h3>
            <p className="text-zinc-400 mt-3">
              React • Next.js • TypeScript
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 p-10 bg-cyan-500/5">
            <h3 className="text-xl font-bold">AI Layer</h3>
            <p className="text-zinc-400 mt-3">
              YOLO • OpenAI • TensorFlow
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 p-10 bg-cyan-500/5">
            <h3 className="text-xl font-bold">Backend</h3>
            <p className="text-zinc-400 mt-3">
              Python • NodeJS • APIs
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 p-10 bg-cyan-500/5">
            <h3 className="text-xl font-bold">Cloud</h3>
            <p className="text-zinc-400 mt-3">
              Docker • AWS • Render
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
