import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Projects() {

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to("#titleProjects", {
      scrollTrigger: {
        trigger: "#titleProjects",
        start: "center 600",
        end: 500,
        scrub:2
      },
      opacity: 1,
      marginLeft: 0,
    });
    gsap.to("#underPro", {
      scrollTrigger: {
        trigger: "#underPro",
        start: "center 600",
        end: 500,
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
            -ml-52
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
            ml-52
            bg-slate-50
            opacity-0
          "
        ></div>
      </section>
    </main>
  );
}
