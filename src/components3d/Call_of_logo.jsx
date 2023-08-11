import React, { useEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
export function Call_of_logo(props) {
  const groupRef = useRef();
  const data = useScroll();
  const litleEsfereRef = useRef();
  const bigEsfereRef = useRef();
  const mainFly = useRef();
  const secondFlyRight = useRef();
  const secondFlyLeft = useRef();
  const groupFly = useRef()

  setTimeout(() => {
    gsap.to(bigEsfereRef.current.position, {
      z: -6,
      duration: 1,
      ease: "back.out(1.7)",
    });
    gsap.to(litleEsfereRef.current.position, {
      z: -10,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 0.5,
    });
    gsap.to(mainFly.current.position, {
      y: 0.676,
      duration: 3,
      ease: "back.out(1.7)",
      delay: 0.7,
    });
    gsap.to(secondFlyRight.current.position, {
      y: 0.676,
      duration: 3,
      ease: "back.out(1.7)",
      delay: 0.7,
    });
    gsap.to(secondFlyLeft.current.position, {
      y: 3.782,
      duration: 3,
      ease: "back.out(1.7)",
      delay: 0.7,
    });
    gsap.to(groupFly.current.position, {
      z: 0,
      duration: 3,
      ease: "back.out(1.7)",
      delay: 0.2,
    });
    gsap.to(groupRef.current.rotation,{
      y:0,
      duration:3
    })
    gsap.to(groupRef.current.position,{
      z:0,
      duration:3
    })
  }, 500);

  const { nodes, materials } = useGLTF("/Call_of_D_logo.glb");

  return (
    <group
      ref={groupRef}
      scale={0.08}
      {...props}
      dispose={null}
      rotation={[0,-15,0]}
      position={[0,0,50]}
    >
      <mesh
        ref={bigEsfereRef} 
        castShadow
        receiveShadow
        geometry={nodes.Cylinder1.geometry}
        material={materials["Mat.1"]}
        position={[0, 0, 1000]}
      />
      <mesh
        ref={litleEsfereRef}
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Mat}
        position={[0, 0, 1000]}
      />
      <group position={[0.357, -0.269, -1.999]}>
        <mesh
          ref={mainFly}
          castShadow
          receiveShadow
          geometry={nodes.Extrude_1.geometry}
          position={[0.924, 300, 0]}
        >
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh
          ref={secondFlyRight}
          castShadow
          receiveShadow
          geometry={nodes.Extrude_3.geometry}
          position={[35.12, -500, 0]}
        >
          <meshStandardMaterial color={"rgb(25,20,150)"} />
        </mesh>
        <mesh
          ref={secondFlyLeft}
          castShadow
          receiveShadow
          geometry={nodes.Extrude_9.geometry}
          material={materials["Mat.2"]}
          position={[-39.358, -300, 0]}
        >
          <meshStandardMaterial color={"rgb(25,20,150)"} />
        </mesh>

        <group
          ref={groupFly}
          position={[0,0,-5000]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Extrude_5.geometry}
            position={[35.12, 0.783, 0]}
          >
            <meshStandardMaterial color={"red"} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Extrude_7.geometry}
            position={[-39.358, 3.782, 0]}
          >
            <meshStandardMaterial color={"red"} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Extrude_11.geometry}
            material={materials["Mat.2"]}
            position={[2.322, -6.301, 0]}
          >
            <meshStandardMaterial color={"blue"} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Extrude_13.geometry}
            material={materials["Mat.2"]}
            position={[-0.215, 21.333, 0]}
          >
            <meshStandardMaterial color={"green"} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Call_of_D_logo.glb");
