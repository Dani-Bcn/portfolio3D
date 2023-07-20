import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { Stars } from "@react-three/drei";
import LightsHome from "./LightsHome";
import { CirclesInit } from "../components3D/CirclesInit";
import { gsap } from "gsap";

export default function MainScene() {
  const cameraRef = useRef();
  const [init, setInit] = useState(false);
  const starsRef = useRef()

  const funcInit = () => {
    setInit(!init);
    console.log(init);

    init? 
    gsap.to(starsRef.current.position,{
      z:50,
      duration:1
    })
    :
    gsap.to(starsRef.current.position,{
      z:300,
      duration:1
    })

  };

  return (
    <Canvas>
      <Environment preset="city" />
      <PerspectiveCamera      
        makeDefault
        position={[0, 0, 250]}
        fov={1}
      />
      <ScrollControls pages={0} damping={0.5}>
        <Scroll>
           <mesh scale={10} position={[0, 0, -5]}>
            <planeGeometry />
            <meshStandardMaterial color={"rgb(100,120,120)"} />
          </mesh> 
          <LightsHome />
          <CirclesInit funcInit={funcInit} />
          <Stars
            ref={starsRef}
            radius={2}
            depth={1}
            count={50000}
            factor={1}
            fade
            saturation={0}
            speed={2}
          />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
