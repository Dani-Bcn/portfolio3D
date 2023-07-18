import React from "react";
import { Canvas } from "@react-three/fiber";
import Title_3d from "../components3D/Title_3d";
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

export default function MainScene() {
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
          <Title_3d />
          <LightsHome /> 
          <CirclesInit/>
          <Stars  radius={2} depth={1} count={5000} factor={4} fade saturation={0}  speed={2} />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
