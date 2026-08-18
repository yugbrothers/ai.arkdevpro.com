import { socials } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

        <div className="flex gap-6">

          <a href={socials.github}>
            GitHub
          </a>

          <a href={socials.linkedin}>
            LinkedIn
          </a>

          <a href={socials.email}>
            Email
          </a>

        </div>

        <div className="text-zinc-500 mt-6 md:mt-0">
          © 2026 Abhishek Sharma
        </div>

      </div>
    </footer>
  );
}
