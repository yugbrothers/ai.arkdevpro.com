"use client";

import { useEffect, useState } from "react";

export default function AnimatedCounter({
  end
}:{
  end:number
}) {

  const [count,setCount] = useState(0);

  useEffect(()=>{

    let current = 0;

    const interval = setInterval(()=>{

      current += Math.ceil(end/50);

      if(current >= end){
        current = end;
        clearInterval(interval);
      }

      setCount(current);

    },30);

    return ()=>clearInterval(interval);

  },[end]);

  return <>{count}+</>;
}
