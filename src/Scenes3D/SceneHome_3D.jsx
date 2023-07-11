import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import Fog_3D from "../components3D/Fog_3D";
import { NombreDani } from "../components3D/NombreDani";

export default function SceneHome_3D() {

  return (
    <Canvas>
      <Environment preset="city" />
      <PerspectiveCamera makeDefault position={[0, 0, 250]} fov={1} />
      <pointLight position={[5, 0, 2]} intensity={1} color={"red"} />
      <pointLight position={[-5, 0, 2]} intensity={1} color={"blue"} />
      <ScrollControls>
        <Scroll>
          <mesh scale={10}
            position={[0,0,-5]}
          >
            <planeGeometry />
            <meshStandardMaterial color={"rgb(120,120,120)"} />
          </mesh>
          <NombreDani/>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
