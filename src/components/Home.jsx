import React from "react";
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
         zIndex:1,
          width:2,
          height:4750,
          backgroundColor:"rgba(255,0,255,0.1)",
          marginLeft:e }}
        ></div>
        )})
        }
      <div
        className="
        absolute      
        w-screen
        h-screen
        bg-gradient-to-t to-orange-200 from-purple-100"
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
