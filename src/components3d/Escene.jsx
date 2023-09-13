import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Environment, Html, OrbitControls, PerspectiveCamera, Scroll, ScrollControls } from '@react-three/drei';
import {Model} from './Model';

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
                <Model/>
                <Scroll/>
            </ScrollControls>
        </Canvas>
    </main>
  )
}