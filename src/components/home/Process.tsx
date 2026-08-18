const process = [
  "Research",
  "Design",
  "Development",
  "Testing",
  "Deployment"
];

export default function Process() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12">
          Process
        </h2>

        <div className="grid md:grid-cols-5 gap-4">
          {process.map((step, i) => (
            <div
              key={step}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
            >
              <div className="text-lime-300 mb-2">
                0{i + 1}
              </div>

              <div>{step}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
