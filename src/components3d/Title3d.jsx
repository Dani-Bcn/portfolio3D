import React, { useRef } from "react";
import { Text3D, useScroll } from "@react-three/drei";
import Bruno from "/public/Bruno.json";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export default function Title3d() {

  const data = useScroll();
  const welcomeRef = useRef();
  const toRef = useRef();
  const myRef = useRef()
  const portRef = useRef()
 
  setTimeout(()=>{
    console.log("Go !!")
     gsap.to(welcomeRef.current.position,{
        z:50
     })
     gsap.to(welcomeRef.current.position,{
        z:0,
        delay:0.5
     })
     gsap.to(toRef.current.position,{
        z:50,
        delay:0.5
     })
     gsap.to(toRef.current.position,{
        z:0,
        delay:1
     })
     gsap.to(myRef.current.position,{
        z:50,
        delay:1
     })
     gsap.to(myRef.current.position,{
        z:0,
        delay:1.5
     })
     gsap.to(portRef.current.position,{
        z:50,
        delay:1.5
     })

  },500)
  

  return (
    <group position={[-1.5, 0, -50]}>
      <Text3D
        ref={welcomeRef}
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={-0.06}
        size={0.45}
        font={Bruno}
      >
        <meshNormalMaterial />
        Welcome
      </Text3D>
      <Text3D
        ref={toRef}
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={-0.06}
        size={0.45}
        font={Bruno}
      >
        <meshNormalMaterial />
        To
      </Text3D>
      <Text3D
        ref={myRef}
        position={[2,0,0]}
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={-0.06}
        size={0.45}
        font={Bruno}
      >
        <meshNormalMaterial />
        My
      </Text3D>
      <Text3D
        ref={portRef}
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.5}
        scale={0.9}
        lineHeight={0.5}
        letterSpacing={-0.06}
        size={0.45}
        font={Bruno}
      >
        <meshNormalMaterial />
        Portfolio
      </Text3D>
    </group>
  );
}
