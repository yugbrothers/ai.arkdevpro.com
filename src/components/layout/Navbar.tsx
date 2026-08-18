export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <h1 className="font-bold text-xl text-white">
          Abhishek Sharma
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-zinc-300">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}
