import React, { useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export function Call_of_logo(props) {

    const groupRef= useRef()
    const data = useScroll()
    const { nodes, materials } = useGLTF("/Call_of_D_logo.glb");



        useFrame((state) => {
            groupRef.current.rotation.y = state.clock.elapsedTime / 2;
           
        });
    

  return (
    <group    onMouseOver={console.log("clikme")} ref={groupRef} scale={0.09}{...props} dispose={null}>

      <mesh
   
        castShadow
        receiveShadow
        geometry={nodes.Cylinder1.geometry}
        material={materials["Mat.1"]}
        position={[0, 0, -6.154]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Mat}
        position={[0, 0, -10.718]}
      />
      <group position={[0.357, -0.269, -1.999]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_1.geometry}
          material={materials["Mat.2"]}
          position={[0.924, 0.676, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_3.geometry}
          material={materials["Mat.2"]}
          position={[35.12, 0.783, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_5.geometry}
          material={materials["Mat.2"]}
          position={[35.12, 0.783, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_7.geometry}
          material={materials["Mat.2"]}
          position={[-39.358, 3.782, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_9.geometry}
          material={materials["Mat.2"]}
          position={[-39.358, 3.782, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_11.geometry}
          material={materials["Mat.2"]}
          position={[2.322, -6.301, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_13.geometry}
          material={materials["Mat.2"]}
          position={[-0.215, 21.333, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Call_of_D_logo.glb");
