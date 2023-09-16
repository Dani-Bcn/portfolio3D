import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Images from "./Images";

export default function Projects() {
  console.log(Images)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to("#titleProjects", {
      scrollTrigger: {
        trigger: "#titleProjects",
        start: "center 900",
        end:3000,
        markers:true,
        scrub:2
      },
      opacity: 1,
      marginLeft: 0,
    });
    gsap.to("#underPro", {
      scrollTrigger: {
        trigger: "#underPro",
        start: "center 900",
       
        scrub:2
      },
      opacity: 1,
      marginLeft: 0,
    });
  });

  return (
    <main
      className="z-20
        w-screen
        h-screen
       "
    >
      <section
        id="projects"
        className="
          flex
          flex-col
          items-center
          justify-start
          w-[80%]
          mx-10
          h-screen
          bg-gradient-to-t to-orange-200 from-slate-900/[0]
          rounded-tl-[150px]
          rounded-tr-[150px]
          z-10
        "
      >
        <h2
          id="titleProjects"
          className="
            mt-32
            -ml-48
            text-slate-50
            opacity-0
          "
        >
          Projects
        </h2>
        <div
          id="underPro"
          className="
            w-4/6
            h-1
            ml-40
            bg-slate-50
            opacity-0
          "
        ></div>
        <section>
          <h3>Poke_ahorcado</h3>
          <img src={Images[0]} alt="" />

        </section>
      </section>
    </main>
  );
}
