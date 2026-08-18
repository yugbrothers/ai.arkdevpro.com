"use client";

import { useState } from "react";

export default function FAQ() {
  const [open,setOpen] = useState<number | null>(0);

  const items = [
    ["What do you build?","AI products, web apps and full-stack systems."],
    ["Available for freelance?","Yes, open to freelance and contract work."],
    ["Tech stack?","React, Next.js, Python, AI, ML and Cloud."]
  ];

  return (
    <section className="max-w-5xl mx-auto px-8 py-32">
      <h2 className="text-5xl font-bold mb-12">
        FAQ
      </h2>

      {items.map((item,index)=>(
        <div
          key={index}
          className="border-b border-white/10 py-6"
        >
          <button
            className="w-full text-left text-xl"
            onClick={()=>setOpen(open===index ? null : index)}
          >
            {item[0]}
          </button>

          {open===index && (
            <p className="mt-4 text-zinc-400">
              {item[1]}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
