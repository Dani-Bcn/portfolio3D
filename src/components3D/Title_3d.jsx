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

    function handleOrientationChange() {
      if (window.screen.orientation.type === "portrait-primary") {
        setActiveResponsive(false);
      } else {
        setActiveResponsive(true);
      }
    }

    window.addEventListener("resize", handleOrientationChange);
    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  });

  const Responsive = () => {
    return (
      <group position={[-0.65, -0.2, 0]} scale={0.8}>
        
      </group>
    );
  };

  const Responsive2 = () => {
  

    return (
      <group position={[-2, -0.5, 0]} scale={2.5}>
          
      </group>
    );
  };

  return <group>{activeResponsive ? <Responsive2 /> : <Responsive />}</group>;
}
