"use client";

import GlassSurface from "@/component/GlassSurface";

export default function ProjectStack() {

  const projects = [
    {
      title:"Self Adaptive Traffic Control",
      tech:"YOLOv8 • OCR • Streamlit"
    },
    {
      title:"Neural Visions AI Art",
      tech:"GAN • CNN • TensorFlow"
    },
    {
      title:"Face Recognition System",
      tech:"OpenCV • Deep Learning"
    },
    {
      title:"CausalFunnel",
      tech:"Shopify • NextJS • Node"
    },
    {
      title:"Software Salary Predictor",
      tech:"ML • Streamlit"
    },
    {
      title:"Recipe Generator AI",
      tech:"OpenAI • React"
    }
  ];

  return (

    <section className="py-32">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-6xl font-bold text-center mb-20">
          Featured Projects
        </h2>

        <div className="space-y-12">

          {projects.map((project,index)=>(

            <div
              key={index}
              className="sticky top-28"
            >

              <GlassSurface
                width={1200}
                height={350}
                borderRadius={40}
                displace={0.4}
                distortionScale={-120}
              >

                <div className="p-10 text-center">

                  <h3 className="text-4xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-cyan-400">
                    {project.tech}
                  </p>

                  <p className="mt-6 text-zinc-400">
                    Advanced AI engineering solution
                    built with modern technologies.
                  </p>

                </div>

              </GlassSurface>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}
