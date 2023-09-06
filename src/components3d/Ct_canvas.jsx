import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  RoundedBox,
  Scroll,
  ScrollControls,
  SpotLight,
} from "@react-three/drei";
import { AnimatePresence, motion as m } from "framer-motion";
import { Card3d } from "./Card3d";

export default function Ct_canvas() {
  return (
    <m.main
         
      exit={{
        opacity: [1, 1],
        transition: {
          duration: 2,
        },
      }}
      className="z-200 
        w-full h-full
        hiden
        bg-gradient-to-t from-slate-700 to-slate-900"
    >
      <Canvas>
        <Environment preset="city" />
        <PerspectiveCamera position={[0, 0, 5]} makeDefault="true" />
        <directionalLight
          position={[5, 5, -5]}
          color={"yellow"}
          intensity={5}
        />

        <ScrollControls 
          pages={0}
        >
          <Scroll>
            <Card3d />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </m.main>
  );
}
