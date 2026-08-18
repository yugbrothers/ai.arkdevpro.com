export default function Skills() {
  const skills = [
    "Python",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Machine Learning",
    "OpenCV",
    "TensorFlow",
    "YOLOv8",
    "Streamlit",
    "MongoDB",
    "Git"
  ];

  return (
    <section id="skills" className="py-32 px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-4 gap-5">

          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition hover:scale-105 hover:border-cyan-400"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
