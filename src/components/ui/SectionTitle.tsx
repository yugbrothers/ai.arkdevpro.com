export default function SectionTitle({
  eyebrow,
  title,
  subtitle
}:{
  eyebrow:string;
  title:string;
  subtitle:string;
}){

  return (

    <div className="text-center mb-20">

      <p className="uppercase tracking-[0.4em] text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="text-5xl md:text-7xl font-bold mt-6">
        {title}
      </h2>

      <p className="text-zinc-400 max-w-2xl mx-auto mt-6">
        {subtitle}
      </p>

    </div>

  );
}
