import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import AboutStrip from "@/components/home/AboutStrip";
import Stats from "@/components/home/Stats";
import ProjectStack from "@/components/home/ProjectStack";
import Expertise from "@/components/home/Expertise";
import Skills from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import TechCloud from "@/components/home/TechCloud";
import Awards from "@/components/home/Awards";
import Process from "@/components/home/Process";
import Community from "@/components/home/Community";
import FAQ from "@/components/home/FAQ";
import ContactStrip from "@/components/home/ContactStrip";
import ResumeCTA from "@/components/home/ResumeCTA";
import CTA from "@/components/home/CTA";

import BentoProjects from "@/components/projects/BentoProjects";

import NeuralCore from "@/components/three/NeuralCore";
import LogoCloud3D from "@/components/three/LogoCloud3D";

import AILab from "@/components/showcase/AILab";
import AICoreSection from "@/components/showcase/AICoreSection";
import CommandCenter from "@/components/showcase/CommandCenter";
import LiveTerminal from "@/components/showcase/LiveTerminal";
import AINetwork from "@/components/showcase/AINetwork";
import Architecture from "@/components/showcase/Architecture";
import AIUniverse from "@/components/showcase/AIUniverse";
import TechTicker from "@/components/showcase/TechTicker";

import WorldHub from "@/components/navigation/WorldHub";

export default function Page() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      <Hero />
      <NeuralCore />
      <LogoCloud3D />

      <Marquee />
      <AboutStrip />
      <Stats />

      <WorldHub />

      <ProjectStack />
      <BentoProjects />

      <Expertise />
      <Skills />

      <AILab />
      <AICoreSection />

      <Testimonials />
      <ExperienceTimeline />

      <TechCloud />
      <Awards />
      <Process />

      <CommandCenter />
      <LiveTerminal />
      <AINetwork />
      <Architecture />
      <AIUniverse />
      <TechTicker />

      <Community />
      <FAQ />
      <ContactStrip />
      <ResumeCTA />
      <CTA />

      <Footer />

    </main>
  );
}
