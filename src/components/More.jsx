import React from 'react'
import {motion as m} from "framer-motion"
import { useNavigate } from 'react-router-dom'

export default function More() {

    const navigate = useNavigate()

  return (
    <m.div  
        animate={{
            opacity:[0,1],
            transition:{
                delay:0.5,
                duration:0.5,
              
            }
        }}

        exit={{
            opacity:[1,0],
            transition:{
                duration:2
            }
        }}
        className='
            absolute
            w-screen
            h-screen
            flex
            items-center
            justify-center
            bg-yellow-200
            z-500
        '
    >
        <h1 className='
        cursor-pointer
        text-7xl
        font-bold
        '
            onClick={()=> navigate("/card")}
        >More</h1></m.div>
  )
}
