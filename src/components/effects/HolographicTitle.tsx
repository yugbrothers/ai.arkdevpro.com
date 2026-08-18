"use client";

export default function HolographicTitle() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

      <div
        className="
          text-[12vw]
          font-black
          opacity-10
          bg-gradient-to-r
          from-cyan-400
          via-white
          to-purple-500
          bg-clip-text
          text-transparent
        "
      >
        AI
      </div>

    </div>
  );
}
