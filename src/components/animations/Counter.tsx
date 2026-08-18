"use client";

import { useEffect, useState } from "react";

export default function Counter({
  value,
}:{
  value:number;
}) {

  const [count,setCount] = useState(0);

  useEffect(()=>{

    let current = 0;

    const timer = setInterval(()=>{

      current += Math.ceil(value/40);

      if(current >= value){
        current = value;
        clearInterval(timer);
      }

      setCount(current);

    },30);

    return ()=>clearInterval(timer);

  },[value]);

  return <>{count}</>;
}
