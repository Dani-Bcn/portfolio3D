import React, { useRef } from "react";
import { Text3D, useScroll } from "@react-three/drei";
import Bruno from "/public/Bruno.json";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export default function Home3d() {
  const boxRef = useRef();
  const data = useScroll();

  /* function handleScroll(e) {
    const scrollPosition = window.scrollY;  
    gsap.to(boxRef.current.position,{
      y:-scrollPosition /75,      
      duration:0.5,
    })

    gsap.to(boxRef.current.scale,{
      x:scrollPosition / 99.9 +1 ,   
      y:scrollPosition / 99.9 +1 , 
      z:scrollPosition / 99.9 +1 ,   
      duration:0.5,
    }) 

  }   
  
  window.addEventListener('scroll', handleScroll);

*/

  return (
    <group>    
      
    </group>
  );
}
