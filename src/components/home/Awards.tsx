const awards = [
  "AI Innovation Award",
  "Best UI Experience",
  "Open Source Contributor",
  "Hackathon Finalist"
];

export default function Awards() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12">
          Awards & Recognition
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award) => (
            <div
              key={award}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              {award}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
