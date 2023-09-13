import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Center } from "@react-three/drei";
export default function Skills() {
  gsap.registerPlugin(ScrollTrigger);
  const wordsFrontEnd = ["Html", "Css", "Js", "React","Api-rest","npm","Node.js", "Express", "MongoDB", "Postman","Taldwin","Gsap","Framer-motion","Three.js","Photoshop" ];

  const tl = gsap.timeline();

  useEffect(() => {
    var skillsFront = document.querySelectorAll("#skillsFront");
   
    tl.set(skillsFront, {  
      opacity:0,  
      color: "rgb(50,250,250)",
      delay:1
    });   

    for (let x = 0; x < wordsFrontEnd.length; x++) {
      console.log(skillsFront[x].offsetTop)
      tl.to(skillsFront[x], {
        scrollTrigger: {
          trigger: skillsFront[x],
          start: "center, center",
          end:100,
          scrub: 1,
        },
        opacity:1,
        width:100,
        height:100,
        delay:0.5
      });
    }
});

  return (
    <section
      id="skills"
      className="
      flex
      flex-col
      items-center
      justify-between
      w-[80%]
      m-auto
      h-[1000px]
      bg-gradient-to-t to-orange-200 from-slate-900/[0]
      rounded-tl-[150px]
      rounded-tr-[150px]
      z-10
  "
    >
      <h2
        id="textSkills"
        className="
      mt-32
      text-slate-50
    "
      >
        Skills
      </h2>
      
        <section
          className="
          w-[390px]
          h-[1200px]          
        "
        >                
          {
          wordsFrontEnd.map((e, i) => {
           console.log(i)
            return ( 
              <p 
                key={i}
                id="skillsFront"
                className="
                float-left   
                flex
                my-5
                mx-[14px]
                items-center
                justify-center
                bg-slate-300
                  clip-custom
                  opacity:0
                "               
              >
                {e}
              </p>
            );
          })}
        </section>
    </section>
  );
}
