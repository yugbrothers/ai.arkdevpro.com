"use client";

const tech = [
  "Python",
  "YOLOv8",
  "TensorFlow",
  "OpenCV",
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "OpenAI",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision"
];

export default function TechCloud() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          Technology Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-5">

          {tech.map((item)=>(
            <div
              key={item}
              className="px-6 py-3 rounded-full border border-cyan-500/30 bg-cyan-500/10"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
