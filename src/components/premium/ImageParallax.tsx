"use client";

import Tilt from "react-parallax-tilt";

export default function ImageParallax({
  src,
}:{
  src:string
}) {
  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={1500}
      scale={1.05}
    >
      <img
        src={src}
        className="rounded-3xl w-full"
      />
    </Tilt>
  );
}
