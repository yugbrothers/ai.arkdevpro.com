export default function GlassCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="
      rounded-3xl
      border border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      p-8
      transition-all
      duration-300
      hover:bg-white/[0.05]
      hover:border-lime-300/20
    ">
      {children}
    </div>
  );
}
