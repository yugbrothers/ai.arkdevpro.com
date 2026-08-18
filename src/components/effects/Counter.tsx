"use client";

import { useEffect, useState } from "react";

export default function Counter({ end }: { end: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const timer = setInterval(() => {
      start += Math.ceil(end / 40);

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(start);
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count}</>;
}
