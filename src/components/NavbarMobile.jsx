import React, { useState } from "react";
import gsap from "gsap";
import { motion as m } from "framer-motion";

export default function NavbarMobile() {
  const [hovered, setHovered] = useState(false);

  const variantsX = {
    open: {
      y: -1200,
      opacity: [0.5, 1],
      clipPath: "circle(71% at 50% 50%)",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    closed: {
      y: 0,
      opacity: 0,
      clipPath: "circle(0.05% at 50% 50%)",
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  return (
    <main onClick={() => setHovered(!hovered)}>
      <header
        className="    
            fixed    
            flex
            w-[90%]
            m-5
            items-center
            justify-between
            z-50
        "
      >
        <img
          src="../Public/assests/img/Logo-Dani.svg"
          alt="image-logo"
          width={50}
        />
        <button
          className="
                w-16
                h-12
                flex
                flex-col
                items-center
                justify-center
                bg-gradient-to-t to-indigo-400 from-indigo-200
                rounded-[25px]
                text-2xl
                text-blue-200
                font-bold
            "
        >
          <m.div
            animate={{
              rotate: hovered ? 45 : 0,
              y: hovered ? 9 : 0,
              transition: {
                duration: 0.5,
                ease: "backOut",
              },
            }}
            className="
                w-1/2
                h-[1px]
                bg-black
                my-1
            "
          ></m.div>
          <m.div
            animate={{
              x: hovered ? 200 : 0,
              transition: {
                duration: 0.7,
                ease: "backOut",
              },
            }}
            className="
              w-1/2
              h-[1px]
              bg-black
              my-1
            "
          ></m.div>
          <m.div
            animate={{
              rotate: hovered ? -45 : 0,
              y: hovered ? -9 : 0,
              transition: {
                duration: 0.5,
                ease: "backOut",
              },
            }}
            className="
                w-1/2
                h-[1px]
                bg-black
                my-1
            "
          ></m.div>
        </button>
      </header>
      <m.section
        variants={variantsX}
        animate={hovered ? "open" : "closed"}
        className="
            fixed
            flex
            flex-col
            items-center
            justify-around
            mt-[1200px]
            w-screen
            h-screen
            bg-gradient-to-t to-indigo-200 from-indigo-50
            z-40
            clip-custom
        "
      >
        <article>
          <m.h2>Contact</m.h2>
          <m.h2>Contact</m.h2>
          <m.h2>Contact</m.h2>
        </article>
      </m.section>
    </main>
  );
}
