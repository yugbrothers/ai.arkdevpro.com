"use client";

const items = [
  {
    year:"2022",
    title:"Started AIML Engineering",
    text:"Focused on AI, Machine Learning and Full Stack Development."
  },
  {
    year:"2024",
    title:"Computer Vision Projects",
    text:"Built face recognition and traffic intelligence systems."
  },
  {
    year:"2025",
    title:"Generative AI",
    text:"Worked on GANs, OpenAI integrations and AI products."
  },
  {
    year:"2026",
    title:"Production Engineering",
    text:"Building scalable AI systems and modern web applications."
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-8">

        <h2 className="text-6xl font-bold text-center mb-20">
          Journey
        </h2>

        <div className="space-y-12">

          {items.map((item,index)=>(
            <div
              key={index}
              className="border-l-2 border-cyan-500 pl-10 py-2"
            >
              <div className="text-cyan-400 font-bold">
                {item.year}
              </div>

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-zinc-400 mt-3">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
