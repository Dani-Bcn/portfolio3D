import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function NombreDani(props) {
  const { nodes, materials } = useGLTF("/NombreDani.glb");
  return (
    <group {...props} dispose={null} scale={0.005}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude.geometry}
        material={nodes.Extrude.material}
      />
    </group>
  );
}

useGLTF.preload("/NombreDani.glb");
