import React, { useRef, useEffect, useStat } from "react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

export default function Model3d() {
    const meshRef = useRef()
    const data = useScroll()



  useFrame(()=>{

    meshRef.current.rotation.y =0 +data.range(0, 2 / 2) * 3

  })
  return (
    <group >
      <mesh
        ref={meshRef}
      >
        <boxGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </group>
  );
}
