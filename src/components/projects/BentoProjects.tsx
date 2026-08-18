"use client";

import { projects } from "@/data/projects";
import FadeUp from "@/components/effects/FadeUp";

export default function BentoProjects() {
  return (
    <section id="projects" className="py-32 px-8">

      <div className="max-w-7xl mx-auto">

        <FadeUp>
          <h2 className="text-5xl font-bold text-center mb-16">
            Featured Projects
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <FadeUp key={project.title}>

              <div
                className="
                group
                rounded-3xl
                overflow-hidden
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-cyan-400
                hover:-translate-y-2
              "
              >

                <div className="h-56 overflow-hidden">

                  <img
                    src="/projects/project1.jpg"
                    alt={project.title}
                    className="
                      h-full
                      w-full
                      object-cover transition-all duration-700 hover:scale-110
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-cyan-400">
                    {project.tech}
                  </p>

                  <p className="mt-4 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex gap-4">

                    <a
                      href={project.github}
                      className="
                        rounded-full
                        border
                        border-white/10
                        px-5
                        py-2
                      "
                    >
                      GitHub
                    </a>

                  </div>

                </div>

              </div>

            </FadeUp>
          ))}

        </div>

      </div>

    </section>
  );
}
