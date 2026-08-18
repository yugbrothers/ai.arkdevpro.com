import GitHubStats from "@/components/dashboard/GitHubStats";
import AnalyticsBoard from "@/components/dashboard/AnalyticsBoard";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white p-10 space-y-10">
      <GitHubStats />
      <AnalyticsBoard />
    </main>
  );
}
