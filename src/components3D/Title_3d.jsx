import { useRef, useState, useEffect } from "react";
import { Text3D, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export default function Title_3d() {
  const textRef = useRef();
  const data = useScroll();
  const circleRef = useRef()
  const [activeResponsive, setActiveResponsive] = useState();

  useEffect(() => {
    console.log(window.screen.orientation.type);

    function handleOrientationChange() {
      if (window.screen.orientation.type === "portrait-primary") {
        setActiveResponsive(false);
        console.log(activeResponsive);
      } else {
        setActiveResponsive(true);
        console.log(activeResponsive);
      }
    }

    window.addEventListener("resize", handleOrientationChange);
    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  });

  const Responsive = () => {
    return (
      <group position={[-0.7, -0.2, 0]} scale={0.8}>
        <Text3D
          ref={textRef}
          scale={0.5}
          position={[-0.2, 0, 0]}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.02}
          height={0.5}
          lineHeight={0.7}
          size={1}
          font="/Bruno.json"
        >
          <meshStandardMaterial color={"red"} />
          DANI
        </Text3D>
      </group>
    );
  };

  const Responsive2 = () => {
    useFrame((state) => {
      console.log(state.mouse.x);

      gsap.to(textRef.current.rotation, {
        x: 0.1,
        duration: 2,
      });
      gsap.to(textRef.current.rotation, {
        x: state.mouse.x / 10,
        duration: 2,
      });
      gsap.to(textRef.current.rotation, {
        y: state.mouse.x / 10,
        duration: 2,
      });
    });

    return (
      <group position={[-2, -0.5, 0]} scale={2.5}>
        <Text3D
          ref={textRef}
          scale={0.5}
          position={[-0.2, 0, 0]}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.02}
          height={0.5}
          lineHeight={0.7}
          size={1}
          font="/Bruno.json"
        >
          <meshStandardMaterial
            color={"rgb(100,100,150)"}
            metalness={0.8}
            roughness={0.9}
          />
          D
        </Text3D>
        <mesh
          ref={circleRef}
        >
          <ringGeometry args={[1, 100, 1]} />
          <meshStandardMaterial />
        </mesh>
      </group>
    );
  };

  return <group>{activeResponsive ? <Responsive2 /> : <Responsive />}</group>;
}
