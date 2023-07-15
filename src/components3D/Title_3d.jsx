import { useRef, useState, useEffect } from "react";
import { Html, Text3D, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Title_3d() {
  const textRef = useRef();
  const data = useScroll();

  const [activeResponsive, setActiveResponsive] = useState(true);

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
  }, [activeResponsive]);

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
          <meshStandardMaterial />DANI
        </Text3D>       
      </group>
    );
  };

  const Responsive2 = () => {
    return (
      <group position={[-1.2, -0.3, 0]} scale={1.5}>
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
          DANI
        </Text3D>
      </group>
    );
  };
  return <group>{activeResponsive ? <Responsive2 /> : <Responsive />}</group>;
}
