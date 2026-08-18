import AICore from "@/components/three/AICore";

export default function AICoreSection() {
  return (
    <section className="py-40">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-center text-6xl font-bold">
          AI Core
        </h2>

        <p className="text-center text-zinc-400 mt-6">
          Interactive neural intelligence visualization
        </p>

        <div className="mt-20">
          <AICore />
        </div>

      </div>

    </section>
  );
}
