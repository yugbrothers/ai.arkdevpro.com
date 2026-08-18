"use client";

import { useState,useEffect } from "react";

export default function CommandPalette(){

 const [open,setOpen]=useState(false);

 useEffect(()=>{
   const down=(e:any)=>{
      if(e.metaKey && e.key==="k"){
        e.preventDefault();
        setOpen(v=>!v);
      }
   };

   window.addEventListener("keydown",down);
   return ()=>window.removeEventListener("keydown",down);
 },[]);

 if(!open) return null;

 return (
   <div className="
   fixed inset-0 z-[999]
   bg-black/80 backdrop-blur
   flex items-center justify-center
   ">
      <div className="
      bg-zinc-900
      rounded-3xl
      p-8
      w-[700px]
      ">
        <h2 className="text-3xl font-bold">
          Command Center
        </h2>

        <p className="mt-4 text-zinc-400">
          Search projects, skills, experience...
        </p>
      </div>
   </div>
 );
}
