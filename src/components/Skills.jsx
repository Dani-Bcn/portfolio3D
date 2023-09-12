import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Center } from "@react-three/drei";
export default function Skills() {
  gsap.registerPlugin(ScrollTrigger);
  const wordsFrontEnd = ["Html", "Css", "Js", "React"];
  const tl = gsap.timeline();

  useEffect(() => {
    var skillsFront = document.querySelectorAll("#skillsFront");
    var skillsBack = document.querySelectorAll("#skillsBack");
    var skillsDesign = document.querySelectorAll("#skillsDesign");
    tl.set(skillsFront, {  
      opacity:0,  
      color: "rgb(50,250,250)",
      delay:1
    });
    tl.set(skillsBack, {  
      opacity:0,  
      color: "rgb(50,250,250)",
      delay:1
    });
    tl.set(skillsDesign, {  
      opacity:0,  
      color: "rgb(50,250,250)",
      delay:1
    });

    for (let x = 0; x < wordsFrontEnd.length; x++) {
      console.log(skillsFront[x].offsetTop)
      tl.to(skillsFront[x], {
        scrollTrigger: {
          trigger: skillsFront[x],
          start: skillsFront[x].offsetTop *0.65,
          end:100,
          markers: true,
          scrub: 1,
        },
        opacity:1,
        width:100,
        height:100,
      });
    }

  for (let x = 0; x < wordsFrontEnd.length; x++) {
    console.log(skillsBack[x].offsetTop)
    tl.to(skillsBack[x], {
      scrollTrigger: {
        trigger: skillsBack[x],
        start: skillsBack[x].offsetTop *0.65,
        end:100,
        markers: true,
        scrub: 1,
      },
      opacity:1,
      width:100,
      height:100,
    });
  }
  for (let x = 0; x < wordsFrontEnd.length; x++) {
    console.log(skillsDesign[x].offsetTop)
    tl.to(skillsDesign[x], {
      scrollTrigger: {
        trigger: skillsDesign[x],
        start: skillsDesign[x].offsetTop *0.65,
        end:100,
        markers: true,
        scrub: 1,
      },
      opacity:1,
      width:100,
      height:100,
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
    mx-10
    h-[800px]
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
      <article
        className="
      flex
      items-center
      justify-between
      w-[110%]
      h-full  
      "
      >
        <section
          className="
          flex
          flex-col 
          items-center                        
        "
        >
          {" "}
          <h4> F-end </h4>
          {
          wordsFrontEnd.map((e, i) => {
           console.log(i)
            return ( 
              <p 
                key={i}
                id="skillsFront"
                className="
                  flex                              
                  items-center
                  justify-center
                  w-0
                  h-0
                  my-2
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
        <section
          className="
          flex
          flex-col
          items-center
          
                      
        "
        >
          <h4>B-end </h4>
          {wordsFrontEnd.map((e, i) => {
            return (
              <p
              key={i}
              id="skillsBack"
                className="
                flex                              
                items-center
                justify-center
                w-0
                h-0
                my-2
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
        <section
          className="
          flex
          flex-col
          items-center  
        "
        >
          <h4> Design</h4>
          {wordsFrontEnd.map((e, i) => {
            return (
              <p
                id="skillsDesign"
                className="
                flex                              
                items-center
                justify-center
                w-0
                h-0
                my-2
                bg-slate-300
                clip-custom
                opacity:0
                "
                key={i}
              >
                {e}
              </p>
            );
          })}
        </section>
      </article>
    </section>
  );
}
