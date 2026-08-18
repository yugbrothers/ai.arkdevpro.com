import GalaxyProjects from "@/components/ultra3d/GalaxyProjects";
import BentoProjects from "@/components/projects/BentoProjects";
import ProjectPlanet from "@/components/showcase3d/ProjectPlanet";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <GalaxyProjects />
      <ProjectPlanet />
      <BentoProjects />
    </main>
  );
}
