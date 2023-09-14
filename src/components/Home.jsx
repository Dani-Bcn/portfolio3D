import React from "react";
import gsap from "gsap";
import About from "./About";
import Skills from "./Skills";
import Title from "./Title";
import NavbarMobile from "./NavbarMobile";
import Projects from "./Projects";
import Contact from "./Contact";
import Escene3d from "../components3d/Escene3d";

export default function Home() {
  
  const wordsFrontEnd = ["Html", "Css", "Js", "React"];
  const lines =[20,40,60,370,350,330]
  return (
    <main
    id="home"
      className="   
      flex 
      flex-col     
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
          height:4400,
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
      <Escene3d/>
     <NavbarMobile />
      <Title />
      <About />
      <Skills />
      <Projects />
      <Contact />       
    </main>
  );
}
