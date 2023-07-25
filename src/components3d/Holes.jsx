import React, { useRef, useState } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Holes() {
  const groupRef = useRef();
  const data = useScroll();
  let theLenght = 1.5;
  const [colorR,setColorR] = useState(255)
  const circlePurpleUp = useRef()
  const circlePurpleDown = useRef()
  const circleBlueUp = useRef()
  const circleBlueDown = useRef()
  const circleGreenUp = useRef()
  const circleGreenDown = useRef()
  const bloomRef= useRef()


  

  

  useFrame(() => {

    groupRef.current.rotation.z = -0.2 + data.range(0, 1 / 1) * 4.72;
    groupRef.current.scale.y = 1 + data.range(0, 1 / 1) * 1.1;
    groupRef.current.scale.x = 1 + data.range(0, 1 / 1) * 1.1;
    theLenght = 1.5 + data.range(0, 1 / 1) * 4;
    circleBlueUp.current.color.b = 255 - data.range(0,1 /2) *250
    circleBlueDown.current.color.b = 255 - data.range(0,1 /2) *250
    circleGreenUp.current.color.g = 255 - data.range(0,1 /2) *250
    circleGreenDown.current.color.g = 255 - data.range(0,1 /2) *250
    circlePurpleUp.current.color.r = 255 - data.range(0,1 /2) *250
    circlePurpleDown.current.color.r = 255 - data.range(0,1 /2) *250
     bloomRef.current.luminanceSmoothing = 2 - data.range(0,1 /2) 
  });

  const Sphere = () => {
    return (
      <group ref={groupRef} position={[0, 0, 0]}>
        <EffectComposer>
          <Bloom
            ref={bloomRef}
            kernelSize={5}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.1}
            intensity={20}

          />
        </EffectComposer>
        <group>
          <mesh position={[0, 0, 0]} scale={[1, 1, 1]}>
            <ringGeometry args={[0.5, 0.51, 100, 0, 1, theLenght]} />
            <meshStandardMaterial   
            transparent={true}
            opacity={0.9}
            ref={circleBlueUp} />
          
          </mesh>
          <mesh position={[0, 0, 0]} scale={[1, 1, 1]}>
            <ringGeometry args={[0.5, 0.52, 100, 0, -2.1, 1.5]} />
            <meshStandardMaterial  ref={circleBlueDown} />
           
          </mesh>
        </group>
        <group>
          <mesh position={[0, 0, 0]} scale={[1, 1, 1]}>
            <ringGeometry args={[1.5, 1.52, 100, 0, 1, 1.5]} />
            <meshStandardMaterial ref={circleGreenUp}  />
           
          </mesh>
          <mesh position={[0, 0, 0]} scale={[1, 1, 1]}>
            <ringGeometry args={[1.5, 1.52, 100, 0, -2.1, 1.5]} />
            <meshStandardMaterial  ref={circleGreenDown}/>
            
          </mesh>
          <group>
            <mesh position={[0, 0, 0]} scale={[1, 1, 1]}>
              <ringGeometry args={[2.5, 2.52, 100, 0, 1, 1.5]} />
              <meshStandardMaterial ref={circlePurpleUp} />
              
            </mesh>
            <mesh position={[0, 0, 0]} scale={[1, 1, 1]}>
              <ringGeometry args={[2.5, 2.52, 100, 0, -2.1, 1.5]} />
              <meshStandardMaterial
              ref={circlePurpleDown}             
              />
            </mesh>
          </group>
        </group>
      </group>

    );
  };

  return (
    <group>
      <Sphere />
    </group>
  );
}
