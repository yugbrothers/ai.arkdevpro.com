import AIUniverse from "@/components/showcase/AIUniverse";
import AICoreSection from "@/components/showcase/AICoreSection";
import AINetwork from "@/components/showcase/AINetwork";
import AILab from "@/components/showcase/AILab";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <AIUniverse />
      <AICoreSection />
      <AINetwork />
      <AILab />
    </main>
  );
}
