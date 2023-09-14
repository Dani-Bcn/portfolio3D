import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

export function Model(props) {

  const { nodes} = useGLTF("/Model3d.gltf");

  const model = useRef()


  gsap.to(model.current,{
    rotate:50
  })


  return (
    <group 
    ref={model}
        scale={0.005}
    {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Loft2.geometry}
        material={nodes.Loft2.material}
        position={[93.185, -123.711, -23.1]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Loft1.geometry}
        material={nodes.Loft1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Loft.geometry}
        material={nodes.Loft.material}
        position={[0, -60.267, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude2.geometry}
        material={nodes.Extrude2.material}
        position={[0, 0, 12.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude7.geometry}
        material={nodes.Extrude7.material}
        position={[0, 215.266, -8.764]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude8.geometry}
        material={nodes.Extrude8.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude9.geometry}
        material={nodes.Extrude9.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude12.geometry}
        material={nodes.Extrude12.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude15.geometry}
        material={nodes.Extrude15.material}
        position={[0, 0, -43.448]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude1.geometry}
        material={nodes.Extrude1.material}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude.geometry}
        material={nodes.Extrude.material}
      />
    </group>
  );
}

useGLTF.preload("/Model3d.gltf");