import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export function Cube_home(props) {
    const cubeRef = useRef();
 
    const [count, setCount] = useState(0)
    const whel =((event)=>{
  
        console.log(event.deltaY)
        event.deltaY > 0?       
        setCount(count +1.047):null
        event.deltaY < 0?       
        setCount(count -1.047):null      

    })

   window.addEventListener("wheel", whel)

  useFrame((state) => {
    gsap.to(cubeRef.current.rotation, {
        y: state.mouse.y/3,
        duration: 2,
      });
      gsap.to(cubeRef.current.rotation, {
        x: state.mouse.x/3,
        duration: 2,
      });
    gsap.to(cubeRef.current.rotation, {
      z: count,
      duration: 2,
    });
  });

  const { nodes, materials } = useGLTF("/Cube_Home.glb");

  return (
    <group
     
      scale={[0.2, 0.2, 0.2]}
      {...props}
      dispose={null}
    >
  <group position={[0, -0.122, 0]}
     ref={cubeRef}
  >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude.geometry}
          material={nodes.Extrude.material}
          position={[0, 0.333, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube.geometry}
          material={nodes.Tube.material}
          position={[0, 0.122, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tube_1.geometry}
        material={nodes.Tube_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_1.geometry}
        material={nodes.Cylinder_1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder-Mat3"].geometry}
        material={materials["Mat.3"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder-Mat2"].geometry}
        material={materials["Mat.2"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder-Mat1"].geometry}
        material={materials["Mat.1"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder-Mat"].geometry}
        material={materials.Mat}
      />
    </group>
  );
}

useGLTF.preload("/Cube_Home.glb");
