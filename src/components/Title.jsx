import React, { useEffect } from "react";
import { motion as m } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Title() {

  gsap.registerPlugin(ScrollTrigger)
useEffect(()=>{

  gsap.to("#name",{
    scrollTrigger:{
      trigger:"#name",
      start:"center 300",
      end:500,
      scrub: 2,
    },
    x:-500,
    
    
  })
  gsap.to("#surName",{
    scrollTrigger:{
      trigger:"#name",
      start:"center 300",
      end:500,
      scrub: 2,
    },
    x:500,
    
  })
  gsap.to("#circle",{
    scrollTrigger:{
      trigger:"#circle",
      start:"center 300",
      end:250,
      scrub: 2,
    },
    scale:0,
    
  })
})
  return (
    <section
      className="
      overflow-x-hidden
        flex
        flex-col
        my-72
        items-center
        justify-between
        w-[90%]
        m-auto
        z-10
    "
    >
       <m.div
         id="circle"
          animate={{
          scale: [0, 1],
          transition: {
            duration: 1,
            ease: "circOut",
          },
        }}
        className="        
          absolute
          -mt-12
          w-80
          h-80
          bg-gray-300
          rounded-[200px]
          z-10
        "
      ></m.div> 
      <m.h1
      id="name"
        animate={{
          x: [-100, 0],
          opacity: [0, 1],
          transition: {
            duration: 1,
            ease: "circOut",
          },
        }}
        className="
            w-full
            text-8xl
            h-[120px]
            font-Play
            text-transparent
            bg-clip-text
            bg-gradient-to-r from-indigo-900 to-indigo-100
            z-20
        "
      >
        Dani
      </m.h1>
      <m.h1
      id="surName"
        animate={{
          x: [100, 0],
          opacity: [0, 1],
          transition: {
            duration: 1,
            ease: "circOut",
          },
        }}
        className="
            w-full
            text-end
            text-8xl
            text-transparent
            bg-clip-text
            bg-gradient-to-r from-indigo-900 to-indigo-300
            h-[120px]
            font-Play
            z-20
        "
      >
        Pérez
      </m.h1>
    </section>
  );
}
