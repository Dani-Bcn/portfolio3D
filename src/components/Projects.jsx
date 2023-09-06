import React from "react";
import {motion as m} from "framer-motion"

export default function Projects() {
  return (
    <m.main
      animate={{
        opacity: [0, 1],
        transition: {
          delay: 0.5,
          duration: 0.5,
        },
      }}
      exit={{
        opacity: [1, 0],
        transition: {
          duration: 2,
        },
      }}
      className="
        absolute
        w-screen
        h-screen
        flex
        items-center
        justify-center
        bg-blue-600
        z-600
    "
    >
     <h1
        className=" 
        flex
        justify-center
        items-center
        h-28
        font-bold text-7xl"
      >Projects</h1>
    </m.main>
  );
}
