import React from "react";
import { Canvas } from "@react-three/fiber";

import {
  ScrollControls,
  Scroll,
  Environment,
  PerspectiveCamera,
} 
from "@react-three/drei";
import { Stars } from "@react-three/drei";
import LightsHome from "./LightsHome";
import { CirclesInit } from "../components3D/CirclesInit";

export default function MainScene(props) {

  const {funcInit} = props

  return (
    <Canvas>
      <Environment preset="city" />
      <PerspectiveCamera makeDefault position={[0, 0, 250]} fov={1} />
      <ScrollControls
        pages={0}
        damping={0.5}
      >
        <Scroll>
         <mesh scale={10} position={[0, 0, -5]}>
            <planeGeometry />
            <meshStandardMaterial color={"rgb(120,120,120)"} />
          </mesh>           
          
          <LightsHome /> 
          <CirclesInit funcInit={funcInit}/>
          <Stars  radius={2} depth={1} count={5000} factor={4} fade saturation={0}  speed={2} />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
