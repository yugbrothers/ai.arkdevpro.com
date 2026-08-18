export default function TechUniverse() {
  const tech = [
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "Docker",
    "Node.js",
    "PostgreSQL"
  ];

  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-6xl font-bold text-center mb-16">
          Tech Universe
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          {tech.map((item) => (
            <div
              key={item}
              className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
