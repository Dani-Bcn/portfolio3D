import React, { useState } from "react";
import gsap from "gsap";
import { motion as m } from "framer-motion";

export default function NavbarMobile() {
  const [hovered, setHovered] = useState(false);
  console.log(hovered)
  const variantsX = {
    closed: {
      x: 500,
    },
    open: {
      x:  0,
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
                bg-green-500
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
                delay: 0.5,
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
        animate={{
            y: hovered ?-900:0,
        }}     
        transition= {{
            delay: 1,
            duration: 1,
            opacity: [0, 0, 1],
            ease: "circOut",
        }}
     
        className="
            fixed
            flex
            flex-col
            items-center
            justify-around
            mt-[900px]
            w-screen
            h-screen
            bg-gradient-to-t to-slate-500 from-slate-200
            z-40
        "
      >
        <m.h2 
        variants={variantsX} a
        animate={hovered ? "open" : "closed"}>
          Contact
        </m.h2>
        <m.h2
          variants={variantsX}
          animate={hovered ? "open" : "closed"}
          transition={{
            delay: 0.2,
          }}
        >
          Contact
        </m.h2>
        <m.h2
          variants={variantsX}
          animate={hovered ? "open" : "closed"}
          transition={{
            delay: 0.4,
          }}
        >
          Contact
        </m.h2>
        <m.h2
          variants={variantsX}
          animate={hovered ? "open" : "closed"}
          transition={{
            delay: 0.6,
          }}
        >
          Contact
        </m.h2>
      </m.section>
    </main>
  );
}
