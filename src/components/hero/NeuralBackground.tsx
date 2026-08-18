"use client";

export default function NeuralBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="absolute left-1/4 top-1/4 h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
      <div className="absolute left-1/2 top-1/3 h-3 w-3 rounded-full bg-lime-300 animate-pulse" />
      <div className="absolute right-1/4 top-1/2 h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
      <div className="absolute left-1/3 bottom-1/4 h-3 w-3 rounded-full bg-white animate-pulse" />

      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line x1="25" y1="25" x2="50" y2="33" stroke="white" />
        <line x1="50" y1="33" x2="75" y2="50" stroke="white" />
        <line x1="50" y1="33" x2="33" y2="75" stroke="white" />
      </svg>

    </div>
  );
}
