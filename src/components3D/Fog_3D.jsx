import React from "react";
import { Cloud } from "@react-three/drei";

export default function Fog_3D() {
  return (
    <Cloud
      opacity={0.05}
      speed={0.2} // Rotation speed
      width={10} // Width of the full cloud
      depth={1.5} // Z-dir depth
      segments={20} // Number of particles
    />
  );
}
