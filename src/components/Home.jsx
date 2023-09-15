import React from "react";
import About from "./About";
import Skills from "./Skills";
import Title from "./Title";
import NavbarMobile from "./NavbarMobile";
import Projects from "./Projects";
import Contact from "./Contact";
import Lines from "./Lines";
export default function Home() {
  
  const wordsFrontEnd = ["Html", "Css", "Js", "React"];

  return (
    <main
    id="home"
      className="   
      flex 
      flex-col     
     bg-orange-100
      "
    >     
      <div
        className="
        absolute      
        w-screen
        h-screen
     
       "
      >        
      </div>
      <Lines/>
      <NavbarMobile />
      <Title />
      <About />
      <Skills />
      <Projects />
      <Contact />       
    </main>
  );
}
