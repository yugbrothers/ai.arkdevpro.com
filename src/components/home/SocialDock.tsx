export default function SocialDock() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">

      <a
        href="#"
        className="rounded-full border border-white/10 bg-black/40 backdrop-blur-xl px-4 py-3"
      >
        GitHub
      </a>

      <a
        href="#"
        className="rounded-full border border-white/10 bg-black/40 backdrop-blur-xl px-4 py-3"
      >
        LinkedIn
      </a>

      <a
        href="/resume.pdf"
        className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-3"
      >
        Resume
      </a>

    </div>
  );
}
