export default function CommandCenter() {
  return (
    <section className="py-40 px-8">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-6xl font-bold text-center">
          Engineering Command Center
        </h2>

        <p className="text-zinc-400 text-center mt-6">
          AI Systems • ML Pipelines • Computer Vision
        </p>

        <div className="mt-20 grid md:grid-cols-3 gap-8">

          <div className="rounded-3xl border border-cyan-500/20 p-10 bg-white/[0.02]">
            <div className="text-5xl font-bold text-cyan-400">
              15+
            </div>

            <div className="mt-4 text-zinc-400">
              AI Projects Built
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 p-10 bg-white/[0.02]">
            <div className="text-5xl font-bold text-cyan-400">
              10+
            </div>

            <div className="mt-4 text-zinc-400">
              Technologies Mastered
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 p-10 bg-white/[0.02]">
            <div className="text-5xl font-bold text-cyan-400">
              AI
            </div>

            <div className="mt-4 text-zinc-400">
              Building Future Products
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
