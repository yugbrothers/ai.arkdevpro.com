export default function Marquee() {
  const text =
    "AI • MACHINE LEARNING • REACT • NEXTJS • TYPESCRIPT • PYTHON • COMPUTER VISION • GENERATIVE AI • ";

  return (
    <section className="overflow-hidden border-y border-white/10 py-5">
      <div
        className="whitespace-nowrap text-zinc-400"
        style={{
          animation: "marquee 25s linear infinite"
        }}
      >
        {text.repeat(10)}
      </div>
    </section>
  );
}
