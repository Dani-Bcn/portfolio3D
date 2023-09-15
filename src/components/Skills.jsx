import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Center } from "@react-three/drei";
export default function Skills() {
  gsap.registerPlugin(ScrollTrigger);
  const wordsFrontEnd = [
    "Html",
    "Css",
    "Js",
    "React",
    "Api-rest",
    "npm",
    "Node.js",
    "Express",
    "MongoDB",
    "Postman",
    "GitHub",
    "Heroku",
    "Cloudinary",
    "Netlify",
    "Taldwin",
    "Gsap",
    "Framer-motion",
    "Three.js",
    "Figma",
    "Photoshop",
    "Ilustrator",
    "Cinema4D",
    "Blender",
  ];

  const tl = gsap.timeline();

  useEffect(() => {
    var skillsFront = document.querySelectorAll("#skillsFront");
    gsap.to("#titleSkills", {
      scrollTrigger: {
        trigger: "#titleSkills",
        start: "center 600",
        end: 500,
        scrub: 2,
      },
      opacity: 1,
      marginLeft:0
    });
    gsap.to("#underLine", {
      scrollTrigger: {
        trigger: "#underLine",
        start: "center 650",
        end: 500,
        scrub: 2,
      },
      opacity: 1,
      marginLeft:0
    });

    tl.set(skillsFront, {
      color: "rgb(50,250,250)",
      delay: 1,
      clipPath: "circle(0% at 50% 50%)",
    });
   

   

    for (let x = 0; x < wordsFrontEnd.length; x++) {
      tl.to(skillsFront[x], {
        scrollTrigger: {
          trigger: skillsFront[x],
          start: "center 600",
          end: 500,
          scrub: 2,
        },
        color: "white",
        opacity: 1,
        clipPath: "circle(50% at 50% 50%)",
      });
    }
  });

  return (
    <main
      className="
        z-10
        w-screen
        h-[1400px]
      "
    >
      <section
        id="skills"
        className="
          flex
          flex-col
          items-center
          justify-between
          w-[80%]
          m-auto
          h-[1400px]
          bg-gradient-to-t to-orange-200 from-slate-900/[0]
          rounded-tl-[150px]
          rounded-tr-[150px]
       "
      >
        <h2
          id="titleSkills"
          className="
            mt-32
            -ml-52
            text-slate-50
            opacity-0
          "
        >
          Skills
        </h2>
        <dir
        id="underLine"
          className="
            w-1/2
            h-1
            bg-slate-50
            ml-52
            opacity-0
          "
        ></dir>
        <section
          className="
            mt-10
            float-right
            w-screen
            h-[1200px]    
            z-10      
          "
        >
          {wordsFrontEnd.map((e, i) => {
            return (
              <p
                key={i}
                id="skillsFront"
                  className={`
                    float-left   
                    flex
                    items-center
                    justify-center
                    h-28
                    w-28
                    text-center
                    text-[20px]
                    my-2
                    mx-[9px]
                    opacity-0
                    bg-indigo-300
                    clip-custom
                    z-10
                  `}
              >
                {e}
              </p>
            );
          })}
        </section>
      </section>
    </main>
  );
}
