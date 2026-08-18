import FloatingMetrics from "./FloatingMetrics";

export default function HeroCommandCenter() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-black">
          AI Engineer
        </h1>

        <p className="mt-6 text-zinc-400 text-xl">
          Building intelligent systems, AI products and immersive experiences.
        </p>

        <div className="mt-12">
          <FloatingMetrics />
        </div>
      </div>
    </section>
  );
}
