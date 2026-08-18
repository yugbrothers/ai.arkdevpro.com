export default function FloatingMetrics() {
  const stats = [
    ["Projects", "25+"],
    ["Technologies", "40+"],
    ["AI Systems", "10+"],
    ["Experience", "3Y+"]
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map(([label, value]) => (
        <div
          key={label}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4"
        >
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm text-zinc-400">{label}</div>
        </div>
      ))}
    </div>
  );
}
