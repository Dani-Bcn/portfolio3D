import { Environment, ScrollControls ,Scroll} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Holes from './components3d/Holes'

export default function MainScele() {
  return (
    <Canvas>
       <Environment
        preset='city'
       />
        <ScrollControls>
            <Scroll>
                <Holes/>
            </Scroll>
        </ScrollControls>
    </Canvas>
  )
}
