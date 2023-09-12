import React from "react";
import gsap from "gsap";
import About from "./About";
import Skills from "./Skills";
import Title from "./Title";
import NavbarMobile from "./NavbarMobile";

export default function Home() {
  const wordsFrontEnd = ["Html", "Css", "Js", "React"];

  return (
    <main
      className="   
      flex
      flex-col
      bg-slate-100
      "
    >
      <div
        className="
        absolute
        w-screen
        h-screen
        bg-gradient-to-t to-orange-200 from-slate-900/[0]"
      ></div>     
      <NavbarMobile/>
      <Title/>
      <About/>
      <Skills/>
      <h2
        className="
              h-20
              text-5xl
            "
      >
        Projects
      </h2>
    </main>
  );
}
