import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import images from "./Images";
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
    gsap.to("#img-poke",{
      scrollTrigger:{
        start:"center -300",
        end:2500,
        scrub:2,
      },
      clipPath:"circle(28% at 50% 50%)"
    })
    gsap.to("#img-movies",{
      scrollTrigger:{
        start:"center -700",
        end:3000,
        scrub:2,
      },
      clipPath:"circle(28% at 50% 50%)"
    })
    
  },[]);

  return (
    <main
      id="projects"
      className="     
      w-screen
      z-10
      overflow-hidden
      "     
    >
      <section
         className="
         flex
         flex-col
         items-center
         justify-between
         w-[80%]
         my-50
         ml-10
         x:50
         h-10/12
         bg-gradient-to-t to-orange-200 from-orange-50/[0]
         rounded-tl-[150px]
         rounded-tr-[150px]   
       "
      >
      <h2
    id="textProjects"
        className="    
        opacity-0               
        mt-32
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
          -mt-3
          h-1          
          ml-[100px]
          mb-10          
          bg-slate-50/[0]
        "
      ></div>
      <section
      className="
        w-[800px]
        h-screen
        my-10
        flex
        flex-col
        items-center   
      "
      >    
<h3>Poke Ahorcado</h3>
      <img 
      id="img-poke"
        className="
            clip-circle-0
            -ml-32
        "
        src={images[0]} alt="img-poke" 
      />  
      <h3>Movies App</h3>
       <img 
       id="img-movies"
        className="
            clip-circle-0
            ml-32
        "
        src={images[1]} alt="img-movies" 
      />  
      </section>
      </section>
    </main>
  );
}
