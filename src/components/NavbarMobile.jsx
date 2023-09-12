import React, { useState } from "react";
import gsap from "gsap";
import Links from "./Links";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { motion as m } from "framer-motion";

export default function NavbarMobile() {
  const [hovered, setHovered] = useState(false);

  const variantsX = {
    open: {
      y: -900,
      opacity: [0.5, 1],
      clipPath: "circle(71% at 50% 50%)",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    closed: {
      y: 0,
      opacity: 0,
      clipPath: "circle(0.05% at 50% 50%)",
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  return (
    <main>
      <header
        className="    
            fixed    
            flex
            w-[90%]
            m-5
            items-center
            justify-between
            z-50
        "
      >
        <button
        
          className="
            w-24
            h-12
            flex
            flex-col
            items-center
            justify-center
            bg-gradient-to-t to-indigo-300 from-indigo-200
            rounded-[25px]
            text-[1.2rem]
            text-white
            font-bold
        "
        >
          <Link
            onClick={() => setHovered(false)}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={"easeInOut"}
            offset={-100}
            duration={2000}
          >
            Contact
          </Link>
        </button>
        <button
          onClick={() => setHovered(!hovered)}
          className="
                w-16
                h-12
                flex
                flex-col
                items-center
                justify-center
                bg-gradient-to-t to-indigo-300 from-indigo-200
                rounded-[25px]
                text-2xl
                text-blue-200
                font-bold
            "
        >
          <m.div
            animate={{
              rotate: hovered ? 45 : 0,
              y: hovered ? 9 : 0,
              transition: {
                duration: 0.5,
                ease: "backOut",
              },
            }}
            className="
                w-1/2
                h-[1px]
                bg-black
                my-1
            "
          ></m.div>
          <m.div
            animate={{
              x: hovered ? 200 : 0,
              transition: {
                duration: 0.7,
                ease: "backOut",
              },
            }}
            className="
              w-1/2
              h-[1px]
              bg-black
              my-1
            "
          ></m.div>
          <m.div
            animate={{
              rotate: hovered ? -45 : 0,
              y: hovered ? -9 : 0,
              transition: {
                duration: 0.5,
                ease: "backOut",
              },
            }}
            className="
                w-1/2
                h-[1px]
                bg-black
                my-1
            "
          ></m.div>
        </button>
      </header>
      <m.section
        variants={variantsX}
        animate={hovered ? "open" : "closed"}
        className="
           fixed
            flex
            flex-col
            items-center
            justify-around
            mt-[900px]
            w-screen
            h-screen
            bg-gradient-to-t to-orange-200 from-orange-100
            z-40
            clip-custom
        "
      >
        <article
          className="
        mt-20
        h-[400px]
        flex
        flex-col
        justify-between     
        "
        >
          <h3>How can I help ?</h3>

          <Link
            onClick={() => setHovered(!hovered)}
            className="cursor-pointer"
            activeClass="active"
            to="about"
            spy={true}
            smooth={"easeInOutQuart"}
            offset={-100}
            duration={2000}
          >
            <h4>About</h4>
          </Link>

          <Link
            onClick={() => setHovered(!hovered)}
            className="cursor-pointer"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={"easeInOutQuart"}
            offset={-100}
            duration={2000}
          >
            <h4>Skills</h4>
          </Link>
          <Link
            onClick={() => setHovered(!hovered)}
            className="cursor-pointer"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={"easeInOutQuart"}
            offset={-100}
            duration={2000}
          >
            <h4>Projects</h4>
          </Link>
          <Link
            onClick={() => setHovered(!hovered)}
            className="cursor-pointer"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={"easeInOutQuart"}
            offset={-100}
            duration={2000}
          >
            <h4>Contact</h4>
          </Link>
        </article>
         <Links/>
      
      </m.section> 
     
    </main>
  );
}
