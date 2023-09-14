import React,{useRef,useEffect} from 'react'
import Model3d from './Model3d'
import gsap from 'gsap'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Scroll, ScrollControls } from '@react-three/drei'

export default function Escene3d() {

    const mainRef = useRef();

    useEffect(() => {
  
      gsap.to("#mainRef",{
          scrollTrigger:{
            trigger:"#mainRef",
              start:"top top",
              markers:true,
              end:2000,
              scrub:2
          },
         y:1500,
      })
  
    },);
    
  return (
    <main
    id='mainRef'
        className='
        absolute
            w-screen
            h-screen
            bg-slate-300/[0]
        '
    >
        <Canvas>
           
            <Environment
                preset='city'
            />            
            <ScrollControls
                pages={1}
                damping={1}
                
            >
                <Scroll>
                    <Model3d/>
                </Scroll>
            </ScrollControls>
        </Canvas>

    </main>
  )
}