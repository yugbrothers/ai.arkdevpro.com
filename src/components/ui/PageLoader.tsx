"use client";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white">
      <div className="animate-pulse text-2xl font-bold">
        Loading Portfolio...
      </div>
    </div>
  );
}
