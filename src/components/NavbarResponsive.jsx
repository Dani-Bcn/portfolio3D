import { gsap } from "gsap";
import React, { useRef, useState } from "react";
import { motion as m } from "framer-motion";

export default function NavbarResponsive() {

  const mainMenuRef = useRef();
  const [activeMenu, setActiveMenu] = useState(false);

  const variants = {
    animate:{
        x:150,
        transition: {
            duration:2
        }}
    }   


  const handleClick = () => {
    console.log(activeMenu);
    setActiveMenu(!activeMenu);
  };

  const Menu = () => {
    return <li></li>;
  };

  const MainMenu = () => {
    return (
      <m.main
        ref={mainMenuRef}
        variants={variants}
        animate={activeMenu ? "open" : "closed"}
      >
        <h1>Menu</h1>
      </m.main>
    );
  };

  return (
    <main onClick={() => handleClick()} className="cnt-navbarRes">
      <Menu />
      <Menu />
      <Menu />
      <MainMenu />
    </main>
  );
}
