import { Stars } from "@react-three/drei";
import React, { useRef } from "react";
import { gsap } from "gsap";

export default function Home3d(props) {

    const {init} = props
    console.log(init)
    const stars1Ref = useRef()
    const stars2Ref = useRef()
    const stars3Ref = useRef()


    if(init){
    gsap.to(stars1Ref.current.position,{
        x:2,
        delay:1.2
    })
  
    gsap.to(stars3Ref.current.position,{
        x:-2,
        delay:1.2
    })
    
}


  return (
    <group>               
      <mesh 
      ref={stars1Ref}
        position={[0, 0, -5]} 
        scale={[1, 3, 1]} 
        rotation={[0, 0, -0.2]
        }>
        <boxGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh 
      ref={stars2Ref}
        position={[0, 0, -5]} 
        scale={[1, 3, 1]} 
        rotation={[0, 0, -0.2]
        }>
        <boxGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh 
      ref={stars3Ref}
        position={[0, 0, -5]} 
        scale={[1, 3, 1]} 
        rotation={[0, 0, -0.2]
        }>
        <boxGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </group>
  );
}
