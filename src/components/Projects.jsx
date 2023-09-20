import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import images from "./Images";

export default function Projects() {
  const arrayProjects = [
    {
      id: "poke",
      text: "Poke-ahorcado",
      img: images[0],
      margin: "-ml-16",
      link: "https://pokeahorcado.netlify.app/",
    },
    {
      id: "movies",
      text: "Movies-app",
      img: images[1],
      margin: "ml-16",
      link: "https://apiappmovies.netlify.app/",
    },
    {
      id: "home",
      text: "Homeworks for kids",
      img: images[2],
      margin: "-ml-20",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const idProjects = document.querySelectorAll("#idProjects");
    gsap.to("#textProjects", {
      scrollTrigger: {
        trigger: "#textProjects",
        start: "center 900",
        end: 3000,
        scrub: 2,
      },
      x: 100,
      opacity: 1,
    });

    gsap.to("#underPro", {
      scrollTrigger: {
        trigger: "#underPro",
        start: "center 900",
        end: 3000,
        scrub: 2,
      },
      marginLeft: 0,
      backgroundColor: "white",
    });

    const tl = gsap.timeline();

    for (let x = 0; x < arrayProjects.length; x++) {
      tl.to(idProjects[x], {
        scrollTrigger: {
          trigger: idProjects[x],
          start: "center 500",
          end: 1000,
          scrub: 2,
        },
        opacity: 1,
        clipPath: "circle(25% at 50% 50%)",
      });
    }
  });

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
        h-[1500px]
        my-10
        flex
        flex-col
        items-center   
        justify-between        
      "
        >
          {arrayProjects.map((e, i) => {
            return (
              <article
                className="
                flex
                flex-col
                items-center
                justify-between              
              "
                key={i}
              >
                <h3 className="text-center">{e.text}</h3>,
                <section className="h-68">
                  <a href={e.link} target="blank">
                    <img
                      id="idProjects"
                      className={`
                        h-96
                        clip-circle-0
                        ${e.margin}
                      `}
                      src={e.img}
                    />
                  </a>
                </section>
              </article>
            );
          })}
        </section>
      </section>
    </main>
  );
}
