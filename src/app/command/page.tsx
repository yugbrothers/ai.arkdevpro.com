import CommandCenter from "@/components/showcase/CommandCenter";
import LiveTerminal from "@/components/showcase/LiveTerminal";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <CommandCenter />
      <LiveTerminal />
    </main>
  );
}
