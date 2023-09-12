import React from "react";
import Path, { Svg } from "react-svg-path";
import gsap from "gsap";
import About from "./About";
import Skills from "./Skills";
import Title from "./Title";
import NavbarMobile from "./NavbarMobile";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  
  const wordsFrontEnd = ["Html", "Css", "Js", "React"];
  const lines =[20,40,60,370,350,330]
  return (
    <main
      className="   
      flex 
      flex-col
      bg-slate-100
      "
    >
      {
      lines.map((e,i) => {
        return(
        <div
         key={i}
          style={{
          position:"absolute",
          width:2,
          height:3800,
          backgroundColor:"rgba(255,0,255,0.2)",
          marginLeft:e }}
        ></div>
        )})
        }
      <div
        className="
        absolute
        w-screen
        h-screen
        bg-gradient-to-t to-orange-200 from-slate-900/[0]"
      >        
      </div>
      <NavbarMobile />
      <Title />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
