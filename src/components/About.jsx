import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function About() {
  let lettersString =
    "An LA-based award-winning design director and UI/UX design expert with 10 years of experience in design and management.";
  gsap.registerPlugin(ScrollTrigger);
  let lettersArray = lettersString.split(" ");
  console.log(lettersArray);

  const tl = gsap.timeline();
  useEffect(() => {
    const leters = document.querySelectorAll("#lettersArray");

    for (let x = 0; x < lettersArray.length; x++) {
      tl.to(leters[x], {
        scrollTrigger: {
          trigger: leters[x],
          start: "center 800",
          end: 500,
          markers: true,
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
      flex
      flex-col
      items-center
      justify-center
      w-[80%]
      m-10
      x:50
      h-[600px]
      bg-gradient-to-t to-orange-200 from-slate-900/[0]
      rounded-tl-[150px]
      rounded-tr-[150px]     
      z-10
    "
    >
      <h2
        className="                   
        mt-16
        h-24
        text-slate-50
      "
      >
        About me
      </h2>
      <section
        className="       
          float-left
          w-full
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
                justify-center
                mt-[50px]
              "
            >
              {e}
            </h4>
          );
        })}
      </section>
    </main>
  );
}
