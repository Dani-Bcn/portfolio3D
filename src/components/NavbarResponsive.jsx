import { gsap } from "gsap";
import React, { useRef, useState } from "react";
import { motion as m } from "framer-motion";
import NavHamburguer from "./NavHamburguer";

export default function NavbarResponsive() {
  const [activeMenu, setActiveMenu] = useState(false)
  const variantsMenu = {
      open:{
              y:1000,
              opacity:0.8
               },
      closed:{
          y:0,
          opacity:0.5     
      },
  }
  const handleClick=(()=>{
          setActiveMenu(!activeMenu)
      console.log(activeMenu)
  })

  return (
    <main className="cnt-navbarRes">
      <m.article
      
      transition={{
        duration:0.5,
        ease:"circIn"
      }}
      variants={variantsMenu}
      animate={activeMenu ? "open" : "closed"}>
        <h1>Menu</h1>
      </m.article>
      <NavHamburguer handleClick={handleClick} activeMenu={activeMenu}/>
    </main>
  );
}
