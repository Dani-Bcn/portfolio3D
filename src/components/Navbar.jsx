import React from "react";
import { motion as m } from "framer-motion";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate()
  const arrayContact = ["C", "O", "N", "T", "A", "C", "T"];
  const arrayHome = ["H", "O", "M", "E"];
  const arrayMore = ["M", "O", "R", "E"];

  const handleOver = (e) => {
    gsap.to(`#${e.target.id}`, {
      rotateX: 180,
      stagger: 0.05,
      ease: "power4.out",
    });
  };

  const handleOut = (e) => {
    gsap.to(`#${e.target.id}`, {
      rotateX: 0,
      stagger: 0.05,
      ease: "power4.out",
    });
  };

  return (
    <main className="
        absolute 
        sm:top-0
        left-0 
        z-20
        top-0        
      "
      >
      <section
        id="text"
        className="   
          backdrop-blur-md      
          justify-between
          items-center          
          sm:flex
          hidden
          bg-green-300/[0.3]                           
        "
      >
        <article
          id="text2"
          className="flex 
          column w-screen 
          items-center 
          justify-around"
        >
          <article className="flex">
            {arrayHome.map((e, i) => (
              <h1
              onClick={()=> navigate("/")}
                onPointerOver={(e) => handleOver(e)}
                onPointerOut={(e) => handleOut(e)}
                key={i}
                id="home"
                className=" text-orange-300 text-1xl font-bold flex justify-center gap-10 cursor-pointer "
              >
                {e}
              </h1>
            ))}
          </article>
          <article className="flex">
            {arrayContact.map((e, i) => (
              <h1
                onClick={()=> navigate("/contact")}
                onPointerOver={(e) => handleOver(e)}
                onPointerOut={(e) => handleOut(e)}
                key={i}
                id="contact"
                className="text-1xl font-bold flex justify-center cursor-pointer"
              >
                {e}
              </h1>
            ))}
          </article>
          <article className="flex">
            {arrayMore.map((e, i) => (
              <h1
              onClick={()=> navigate("/more")}
                onPointerOver={(e) => handleOver(e)}
                onPointerOut={(e) => handleOut(e)}
                key={i}
                id="more"
                className="text-1xl font-bold text-sky-400 flex justify-center cursor-pointer"
              >
                {e}
              </h1>
            ))}
          </article>
        </article>
      </section>
    </main>
  );
}
