import React from "react";
import { motion as m } from "framer-motion";

export default function About() {
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
        bg-green-600
        z-600
    "
    >
      <h1
        className=" font-bold text-7xl"
      >About</h1>
    </m.main>
  );
}
