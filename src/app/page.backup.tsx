import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";

import NeuralCore from "@/components/three/NeuralCore";
import LogoCloud3D from "@/components/three/LogoCloud3D";

import WorldHub from "@/components/navigation/WorldHub";
import PremiumWorldCards from "@/components/worlds/PremiumWorldCards";

export default function Page() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      <Hero />

      <section className="relative">
        <NeuralCore />
        <LogoCloud3D />
      </section>

      <WorldHub />

      <PremiumWorldCards />

      <Footer />

    </main>
  );
}
