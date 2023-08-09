import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, PerspectiveCamera, Scroll, ScrollControls } from '@react-three/drei'
import Home3d from './Home3d'
import { Call_of_logo } from './Call_of_logo'

export default function Scene3d() {
  return (
    <main
    
    >
        <Canvas>
            <Environment
                preset='city'
            />    
            <PerspectiveCamera
                position={[0,0,50]}
                makeDefault
                fov={1500}
            />
            <ScrollControls 
                pages={2}
            >
                <Scroll>
                    <Home3d/>  
                    <Call_of_logo/>  
                </Scroll>
            </ScrollControls>
        </Canvas>

    </main>
  )
}
