import GlassCard from "@/components/ui/GlassCard";

const projects = [
  "AI Resume Builder",
  "Smart Traffic Control",
  "Developer Salary Predictor",
  "AI Art Generator"
];

export default function ProjectsPreview() {
  return (
    <section id="projects" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <GlassCard key={project}>
              <h3 className="text-2xl font-semibold">
                {project}
              </h3>

              <p className="mt-4 text-zinc-400">
                Modern product design and engineering project.
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
