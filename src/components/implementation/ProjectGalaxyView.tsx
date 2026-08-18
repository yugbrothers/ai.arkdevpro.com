import { projects } from "@/data/projects";

export default function ProjectGalaxyView() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">Project Galaxy</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-cyan-400 mt-2">{project.tech}</p>
              <p className="text-zinc-400 mt-4">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
