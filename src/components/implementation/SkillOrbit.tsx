import { skills } from "@/data/skills";

export default function SkillOrbit() {
  return (
    <section className="py-20">
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-6 py-3 rounded-full border border-cyan-500/30 bg-cyan-500/10"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
