import { MeshReflectorMaterial, OrbitControls, Text3D } from "@react-three/drei";
import React from "react";
import Bruno from "/public/Bruno.json";

export default function Home3d() {
  return (
    <group>
      <Text3D
        position={[-1.65, 0, 2]}
        scale={[0.5, 0.5, 0.5]}
        rotation={[0,0.5,0]}
        font={Bruno}
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={-0.06}
        size={1.5}
      >
        Home
        <meshStandardMaterial />
      </Text3D>
      <mesh 
        scale={500} 
        position={[0, 0.04, 0]} 
        rotation={[-1.5, 0.04, 0]}
       >
        <planeGeometry />
        <MeshReflectorMaterial 
            resolution={2080}
            color={"red"} 
        />
      </mesh>
      <mesh 
        scale={500} 
        position={[0, 4, -2]} 
        rotation={[0, 0, 0]}
       >
        <planeGeometry />
        <MeshReflectorMaterial resolution={2080} />
      </mesh>
      <mesh
      scale={[0.5,1,0.05,]}
      rotation={[0,0.4,0]}
        position={[-1,0,4]}
      >
        <boxGeometry/>
        <meshStandardMaterial/>
      </mesh>
    </group>
  );
}
