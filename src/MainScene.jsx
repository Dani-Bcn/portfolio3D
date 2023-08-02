import { Environment, ScrollControls, Scroll, SpotLight, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Home3d from "./components3d/Home3d";
import { PerspectiveCamera } from "@react-three/drei";
import { gsap } from "gsap";
import { useRef } from "react";

export default function MainScene() {

  const cameraRef = useRef()

  setTimeout(()=>{
    gsap.to(cameraRef.current.position,{
      x:-0.5,
      z:5,
      duration:1.5
    })
    gsap.to(cameraRef.current.rotation,{
      y:0,
      duration:1.5
    })
  },500)

  return (
    <Canvas>
      <Environment preset="city" />
      <spotLight
        color={"rgb(255,0,0)"}
        intensity={2}
        position={[5,2,5]}
      />
      <PerspectiveCamera
      ref={cameraRef}
        makeDefault
        fov={50}
        position={[-10,0,0]}
        rotation={[0,-1.5,0]}
      />
      <ambientLight
        color="rgb(25, 29, 52)"
        intensity={1}
        position={[0, 0, 2]}
      />
      <ScrollControls>
        <Scroll>
          <Home3d />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
