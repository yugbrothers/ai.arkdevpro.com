import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import NeuralCore from "@/components/three/NeuralCore";
import LogoCloud3D from "@/components/three/LogoCloud3D";

import WorldHub from "@/components/navigation/WorldHub";
import PremiumWorldCards from "@/components/worlds/PremiumWorldCards";
import WorldCards from "@/components/worlds/WorldCards";

export default function Page() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      <section className="relative">
        <div className="absolute inset-0 opacity-50">
          <LogoCloud3D />
        </div>

        <NeuralCore />
      </section>

      <WorldHub />

      <PremiumWorldCards />

      <WorldCards />

      <Footer />

    </main>
  );
}
