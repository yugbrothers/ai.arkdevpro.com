import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import ExperiencePlanet from "@/components/showcase3d/ExperiencePlanet";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ExperienceTimeline />
      <ExperiencePlanet />
    </main>
  );
}
