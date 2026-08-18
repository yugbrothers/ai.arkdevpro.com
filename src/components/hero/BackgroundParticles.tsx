export default function BackgroundParticles() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(100,255,218,0.15),transparent_60%)]" />

      <div className="absolute left-1/4 top-0 h-full w-px bg-white/5" />
      <div className="absolute left-2/4 top-0 h-full w-px bg-white/5" />
      <div className="absolute left-3/4 top-0 h-full w-px bg-white/5" />
    </>
  );
}
