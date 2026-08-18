"use client";

export default function FloatingTechLogos() {
  const logos = [
    "AI",
    "ML",
    "JS",
    "TS",
    "PY",
    "DL",
    "NLP",
    "CV"
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">

      {logos.map((logo, i) => (
        <div
          key={i}
          className="absolute text-cyan-400/30 font-bold animate-pulse"
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + (i % 3) * 20}%`
          }}
        >
          {logo}
        </div>
      ))}

    </div>
  );
}
