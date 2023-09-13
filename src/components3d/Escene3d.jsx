import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Environment, Html, OrbitControls, PerspectiveCamera, Scroll, ScrollControls } from '@react-three/drei';
import { Model3d } from './model3d';

export default function Escene3d() {
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
                <Model3d/>

                <Scroll/>
            </ScrollControls>
        </Canvas>
    </main>
  )
}
