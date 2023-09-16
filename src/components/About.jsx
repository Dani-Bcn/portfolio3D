import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function About() {
  let lettersString =
    "An LA-based ,award-winning design ,director and UI/UX ,design ,expert with 10 years ,of experience in ,design and ,management.";
  gsap.registerPlugin(ScrollTrigger);
  let lettersArray = lettersString.split(" ,");
  console.log(lettersArray);

  const tl = gsap.timeline();
  useEffect(() => {

    gsap.to("#textAbout", {
      scrollTrigger: {
        trigger: "#textAbout",
        start: "center 800",
        end: 1000,    
        scrub: 2,
      },
      x:100,
      opacity: 1,
    });
    
    gsap.to("#underAbout", {
      scrollTrigger: {
        trigger: "#underAbout",
        start: "center 850",
        end: 1000,    
        scrub: 2,
      },
      marginLeft:0,
      backgroundColor:"white"
    });
    const leters = document.querySelectorAll("#lettersArray");

    for (let x = 0; x < lettersArray.length; x++) {
      tl.to(leters[x], {
        scrollTrigger: {
          trigger: leters[x],
          start: "center 1000",
          end: 800,      
          scrub: 2,
        },
        opacity: 1,
        marginTop:0
      });
      
    }
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
      id="textAbout"
        className="    
        opacity-0               
        mt-20
        ml-[-200px]
        h-24
        text-slate-50
      "
      >
        About me
      </h2>
      <div
        id="underAbout"
        className="
          w-64
          h-1
          -mt-5
          ml-[100px]
          mb-10          
          bg-slate-50/[0]
        "
      ></div>
      <section
        className="       
          float-left
          w-10/12
          h-72
        "
      >
        {lettersArray.map((e, i) => {
          return (
            <h4
              key={i}
              id="lettersArray"
              className=" 
              float-left              
                opacity-0
                mt-[50px]
                text-transparent
                bg-clip-text
                bg-indigo-400
              "
            >
              {e}
            </h4>
          );
        })}
      </section>
      </section>
    </main>
  );
}
