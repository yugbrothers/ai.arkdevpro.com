export default function CTA() {
  return (
    <section
      id="contact"
      className="py-32 text-center"
    >
      <h2 className="text-6xl font-bold">
        Let's Build Something Amazing
      </h2>

      <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
        Open to Software Engineering, AI Engineering,
        Machine Learning and Full Stack opportunities.
      </p>

      <div className="mt-10 flex justify-center gap-5">

        <a
          href="/resume.pdf"
          target="_blank"
          className="
            rounded-full
            bg-white
            text-black
            px-10
            py-5
            font-semibold
          "
        >
          Resume
        </a>

        <a
          href="mailto:abhisheksharma1zac@gmail.com"
          className="
            rounded-full
            border
            border-white/20
            px-10
            py-5
          "
        >
          Contact
        </a>

      </div>
    </section>
  );
}
