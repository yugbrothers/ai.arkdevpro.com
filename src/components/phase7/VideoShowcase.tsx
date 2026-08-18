"use client";

export default function VideoShowcase() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-10">
          Project Demos
        </h2>

        <video
          controls
          className="rounded-3xl w-full"
          src="/final-assets/traffic-demo.mp4"
        />

      </div>
    </section>
  );
}
