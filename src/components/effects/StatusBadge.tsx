export default function StatusBadge() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="rounded-full border border-cyan-500/30 bg-black/80 backdrop-blur-xl px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-white">
            Available for Work
          </span>
        </div>
      </div>
    </div>
  );
}
