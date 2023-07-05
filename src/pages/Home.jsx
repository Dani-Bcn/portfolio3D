import React from "react";
import { gsap } from "gsap";

export default function Home() {
  return (
    <div className="absolute w-screen h-screen z-10">
      <h1
        className="
          absolute
          m-10          
          w-24
          h-200
          text-2xl
          font-megrim
          text-slate-100
        "
      >Welcome 
      my name is 
      Dani
      </h1>
    </div>
  );
}
