import React, { useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function CirclesInit(props) {
  const groupRef = useRef();
  const groupRef2 = useRef();
  const { nodes, materials } = useGLTF("/CirclesInit.glb");
  const [init, setInit] = useState(false);

  const funcInit = () => {
    setInit(!init);
  };
  console.log(init);

  useFrame(() => {
    groupRef.current.rotation.z += 1 / 20;
    groupRef2.current.rotation.z += -1 / 50;
  });

  return (
    <group>
      <Html position={[-0.1, 0, 0]}>
        <article>
          <h1>Go</h1>
        </article>
      </Html>
      <mesh onClick={() => funcInit()} scale={0.95}>
        <circleGeometry />
        <meshStandardMaterial transparent="true" opacity={0} />
      </mesh>
      <group {...props} dispose={null} scale={0.004}>
        <group position={[4.096, 0.23, 0]} rotation={[0, 0, -2.642]}>
          <group ref={groupRef}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep4.geometry}
              position={[-6.005, 6.339, 0]}
              material-color="red"
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep3.geometry}
              position={[-6.005, -0.23, 0]}
              material-color="blue"
            />
          </group>
          <group ref={groupRef2}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep.geometry}
              material={nodes.Sweep.material}
              position={[-4.096, -0.23, 0]}
              material-color="green"
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep1.geometry}
              material={nodes.Sweep1.material}
              position={[4.783, -5.693, 0]}
              material-color="black"
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sweep2.geometry}
              material={nodes.Sweep2.material}
              position={[11.322, -0.187, 0]}
              material-color="wheat"
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/CirclesInit.glb");
