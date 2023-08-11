import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { Call_of_logo } from "./Call_of_logo";

export default function Scene3d() {
  const camRef = useRef();

  useEffect(() => { 
      /*  
        gsap.to(camRef.current.rotation, {
            y: 0.05,
            duration: 1,
        }); 
       */
  });

  return (
    <main>
      <Canvas>
      {/*   <OrbitControls 
        ref={orbitRef} 
        autoRotate={true}
        /> */}
        <Environment preset="city" />
        <PerspectiveCamera
          ref={camRef}
          position={[0, 0, 50]}
          rotation={[0, 0, 0]}
          makeDefault
          fov={1500}
        />
        <ScrollControls pages={2}>
          <Scroll>
            <Call_of_logo />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </main>
  );
}
