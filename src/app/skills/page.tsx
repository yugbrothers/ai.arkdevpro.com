import SkillUniverse from "@/components/nextphase/SkillUniverse";
import SkillSphere from "@/components/phase7/SkillSphere";
import Skills from "@/components/skills/Skills";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SkillUniverse />
      <SkillSphere />
      <Skills />
    </main>
  );
}
