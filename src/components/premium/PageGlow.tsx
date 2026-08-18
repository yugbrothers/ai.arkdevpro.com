"use client";

export default function PageGlow() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-[150px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/10 blur-[150px]" />
      </div>
    </>
  );
}
