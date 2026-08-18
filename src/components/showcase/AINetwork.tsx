export default function AINetwork() {
  return (
    <section className="py-32 relative overflow-hidden">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-5xl font-bold">
          Artificial Intelligence Stack
        </h2>

        <div className="mt-20 flex flex-wrap justify-center gap-6">

          {[
            "YOLOv8",
            "TensorFlow",
            "PyTorch",
            "OpenCV",
            "OpenAI",
            "Next.js",
            "React",
            "TypeScript",
            "Python",
            "Docker"
          ].map((tech) => (
            <div
              key={tech}
              className="rounded-full border border-cyan-500/30 px-8 py-4 hover:scale-110 transition-all duration-500"
            >
              {tech}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
