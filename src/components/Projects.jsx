import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Projects() {
 
  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {

    gsap.to("#textProjects", {
      scrollTrigger: {
        trigger: "#textProjects",
        start: "center 900",
        end: 3000,    
        scrub: 2,
      },
      x:100,
      opacity: 1,
    });
    
    gsap.to("#underPro", {
      scrollTrigger: {
        trigger: "#underPro",
        start: "center 900",
        end: 3000,    
        scrub: 2,
      },
      marginLeft:0,
      backgroundColor:"white"
    });
    
  });

  return (
    <main
      id="about"
      className="
      w-screen
      h-screen
      z-10
      "     
    >
      <section
         className="
         flex
         flex-col
         items-center
         justify-center
         w-[80%]
        mt-20
         ml-10
         x:50
         h-[600px]
         bg-gradient-to-t to-orange-200 from-orange-50/[0]
         rounded-tl-[150px]
         rounded-tr-[150px]   
       "
      >
      <h2
      id="textProjects"
        className="    
        opacity-0               
        mt-20
        ml-[-200px]
        h-24
        text-slate-50
      "
      >
        Projects
      </h2>
      <div
        id="underPro"
        className="
          w-52
          h-1
          -mt-4
          ml-[100px]
          mb-10          
          bg-slate-50/[0]
        "
      ></div>
      <section
      className="
        w-scrceer
        h-
      "
      >       
      </section>
      </section>
    </main>
  );
}
