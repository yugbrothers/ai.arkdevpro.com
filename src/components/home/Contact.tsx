export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-8"
    >
      <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-12 text-center">

        <h2 className="text-5xl font-bold">
          Contact Me
        </h2>

        <p className="mt-6 text-zinc-400">
          Open to AI, Software Engineering and Full Stack opportunities.
        </p>

        <a
          href="mailto:abhisheksharma1zac@gmail.com"
          className="inline-block mt-10 rounded-full bg-cyan-400 px-8 py-4 text-black font-semibold"
        >
          Send Email
        </a>

      </div>
    </section>
  );
}
