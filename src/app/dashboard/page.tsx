import AnalyticsBoard from "@/components/dashboard/AnalyticsBoard";
import RealtimeStats from "@/components/dashboard/RealtimeStats";
import RealtimeActivity from "@/components/dashboard/RealtimeActivity";
import HeroCommandCenter from "@/components/implementation/HeroCommandCenter";
import FloatingMetrics from "@/components/implementation/FloatingMetrics";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white p-10 space-y-10">
      <HeroCommandCenter />
      <FloatingMetrics />
      <RealtimeStats />
      <AnalyticsBoard />
      <RealtimeActivity />
    </main>
  );
}
