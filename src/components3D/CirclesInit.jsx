import React, { useRef, useState, useEffect } from "react";
import { Html, useGLTF, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { Text3D ,useScroll} from "@react-three/drei";
import Bruno from "/public/Bruno.json";

export function CirclesInit(props) {

  const {funcInit} = props
  const [activePage,setActivePage] = useState(false)
  const textRef = useRef();
  const mainRef= useRef()
  const groupRef = useRef();
  const groupRef2 = useRef();
  const circle1Ref = useRef();
  const circle2Ref = useRef();
  const circle3Ref = useRef();
  const circle4Ref = useRef();
  const circle5Ref = useRef();
  const { nodes, materials } = useGLTF("/CirclesInit.glb");
  const [init, setInit] = useState(false);
  const [activeResponsive, setActiveResponsive] = useState();
  const [scaleCircles, setScaleCircles] = useState(0.004);
  const [ativeCursor, setActieCursor] = useState(false);
  const data = useScroll();
  useCursor(ativeCursor);

  useEffect(() => {
    function handleOrientationChange() {
      if (window.screen.orientation.type === "portrait-primary") {
        setScaleCircles(0.004);
      } else {
        setScaleCircles(0.008);
      }
    }
    window.addEventListener("resize", handleOrientationChange);
    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  });

  useFrame(() => {
    groupRef.current.rotation.z += 1 / 20;
    groupRef2.current.rotation.z += -1 / 50;
  });

  useFrame((state) => {
    gsap.to(textRef.current.rotation, {
      x:0+ state.mouse.y,
      y: 0+state.mouse.x,
    });
  });

  const activeOnPointer = () => {
    setActieCursor(true);
    gsap.to(textRef.current.scale, {
      z: 5,
    });
    gsap.to(textRef.current.rotation, {
      x: 0.05,
      y: 0.05,
    });
    gsap.to(circle1Ref.current.scale, {
      z: 1.5,
      x: 1.5,
      y: 1.5,
      duration: 0.3,
    });
    gsap.to(circle2Ref.current.scale, {
      z: 1.5,
      x: 1.5,
      y: 1.5,
      duration: 0.5,
    });
    gsap.to(circle3Ref.current.scale, {
      z: 1.5,
      x: 1.5,
      y: 1.5,
      duration: 0.8,
    });
    gsap.to(circle4Ref.current.scale, {
      z: 1.5,
      x: 1.5,
      y: 1.5,
      duration: 1,
    });
    gsap.to(circle5Ref.current.scale, {
      z: 1.5,
      x: 1.5,
      y: 1.5,
      duration: 1.3,
    });
  };

  const desactiveOnPointer = () => {
    setActieCursor(false);
    gsap.to(textRef.current.scale, {
      z: 1,
    });
    gsap.to(textRef.current.rotation, {
      x: 0,
      y: 0,
    });
    gsap.to(circle1Ref.current.scale, {
      z: 1,
      x: 1,
      y: 1,
      duration: 0.2,
    });
    gsap.to(circle2Ref.current.scale, {
      z: 1,
      x: 1,
      y: 1,
      duration: 0.5,
    });
    gsap.to(circle3Ref.current.scale, {
      z: 1,
      x: 1,
      y: 1,
      duration: 0.8,
    });
    gsap.to(circle4Ref.current.scale, {
      z: 1,
      x: 1,
      y: 1,
      duration: 1,
    });
    gsap.to(circle5Ref.current.scale, {
      z: 1,
      x: 1,
      y: 1,
      duration: 1.3,
    });
  };
  const handeClick=(()=>{
  activePage ?
  gsap.to(mainRef.current.position,{
    z:0,
    delay:0.5,
    duration:0.5
  }):
  gsap.to(mainRef.current.position,{
    z:250,
    delay:0.5,
    duration:0.5
  })
  

    setActivePage(!activePage)
     funcInit()
   })

  return (
    <group
      ref={mainRef}
    >
      <Text3D
        ref={textRef}
        position={[-0.6, -0.2, 0]}
        scale={[0.4, 0.4, 2]}
        font={Bruno}
      >
        Go?
        <meshNormalMaterial />
      </Text3D>
      <mesh
        onClick={() =>handeClick()}
        scale={1.5}
        onPointerOver={() => activeOnPointer()}
        onPointerOut={() => desactiveOnPointer()}
      >
        <circleGeometry />
        <meshStandardMaterial transparent="true" opacity={0} />
      </mesh>
      <group {...props} dispose={null} scale={scaleCircles}>
        <group position={[4.096, 0.23, 0]} rotation={[0, 0, -2.642]}>
          <group ref={groupRef}>
            <mesh
              ref={circle1Ref}
              castShadow
              receiveShadow
              geometry={nodes.Sweep4.geometry}
              position={[-6.005, 6.339, 0]}
              material-color="red"
            />
            <mesh
              ref={circle2Ref}
              castShadow
              receiveShadow
              geometry={nodes.Sweep3.geometry}
              position={[-6.005, -0.23, 0]}
              material-color="blue"
            />
          </group>
          <group ref={groupRef2}>
            <mesh
              ref={circle3Ref}
              castShadow
              receiveShadow
              geometry={nodes.Sweep.geometry}
              material={nodes.Sweep.material}
              position={[-4.096, -0.23, 0]}
              material-color="wheat"
            />
            <mesh
              ref={circle4Ref}
              castShadow
              receiveShadow
              geometry={nodes.Sweep1.geometry}
              material={nodes.Sweep1.material}
              position={[4.783, -5.693, 0]}
              material-color="rgb(100,150,100)"
            />
            <mesh
              ref={circle5Ref}
              castShadow
              receiveShadow
              geometry={nodes.Sweep2.geometry}
              position={[11.322, -0.187, 0]}
              material-color="yellow"
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/CirclesInit.glb");
