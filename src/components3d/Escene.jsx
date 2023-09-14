import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Environment, Html, OrbitControls, PerspectiveCamera, Scroll, ScrollControls } from '@react-three/drei';


export default function Escene() {
  return (
    <main
        className='
        w-screen
        h-screen
        '
    >
        <Canvas>
            <OrbitControls/>            
        <Environment
            preset='city'
          />       
            <ScrollControls>
              <mesh>
                <boxGeometry/>
                <meshStandardMaterial/>
              </mesh>
              
               {/*  <Model/> */}
                <Scroll/>
            </ScrollControls>
        </Canvas>
    </main>
  )
}