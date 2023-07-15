import React, { useRef } from "react";
import { gsap } from "gsap";

import { useFrame } from "@react-three/fiber";

export default function LightsHome() {
  const light1Ref = useRef();
  const light2Ref = useRef();

  useFrame((state) => {
    gsap.to(light1Ref.current.position, {
      z: state.mouse.x + -state.mouse.x * 5,
    });
    gsap.to(light2Ref.current.position, {
      z: state.mouse.y + -state.mouse.y * 5,
    });
  });

  return (
    <group>  
      <pointLight ref={light1Ref} position={[0, 0, 0]} color={"blue"} />
      <pointLight ref={light2Ref} position={[0, 0, 0]} color={"yellow"} />
    </group>
  );
}
