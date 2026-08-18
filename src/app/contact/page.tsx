import Contact from "@/components/home/Contact";
import ContactStrip from "@/components/home/ContactStrip";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Contact />
      <ContactStrip />
    </main>
  );
}
