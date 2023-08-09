import React from "react";
import Scene3d from "../components3d/Scene3d";
import Navbar from "./Navbar";
import NavbarResponsive from "./NavbarREsponsive";

export default function Home() {

  return (
    <main>
      <article>
        <Scene3d />
      </article>      
        <Navbar />   
        <NavbarResponsive/>    
    </main>
  );
}
