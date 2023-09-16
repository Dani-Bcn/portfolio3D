import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Images from "./Images";

export default function Projects() {
  console.log(Images);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to("#titleProjects", {
      scrollTrigger: {
        trigger: "#titleProjects",
        start: "center 800",
        end: 1500,
        scrub: 2,
      },
      opacity: 1,
      marginLeft: 0,
    });
    gsap.to("#underPro", {
      scrollTrigger: {
        trigger: "#underPro",
        start: "center 800",

        end: 1500,
        scrub: 2,
      },
      opacity: 1,
      marginLeft: 0,
    });
  });

  return (
    <main
      className="
      overflow-hidden
      z-20
        w-screen
    
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

        <section
          className="
          overflow-hidden
          w-[1200px]
          my-32
          -ml-52
          bg-red-200
          "
        >
          <img
            className="
          
           
            
                       
            "
            src={Images[0]}
            alt="img-poke"
            width={800}
            height={800}
          />
        </section>
      </section>
    </main>
  );
}
