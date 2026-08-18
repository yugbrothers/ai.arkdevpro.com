export default function FloatingIcons() {
  const items = [
    { name: "AI", pos: "top-24 left-20" },
    { name: "ML", pos: "top-40 right-24" },
    { name: "React", pos: "bottom-40 left-28" },
    { name: "Next", pos: "bottom-28 right-20" },
    { name: "Python", pos: "top-1/2 left-10" },
    { name: "YOLO", pos: "top-1/2 right-10" }
  ];

  return (
    <>
      {items.map((item) => (
        <div
          key={item.name}
          className={`absolute ${item.pos}
          animate-pulse
          rounded-full
          border border-cyan-400/30
          bg-white/5
          backdrop-blur-xl
          px-5 py-3
          text-sm
          text-cyan-300`}
        >
          {item.name}
        </div>
      ))}
    </>
  );
}
