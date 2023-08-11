import React, { useState } from 'react'
import {motion as m} from "framer-motion"
export default function NavHamburguer(props) {

const {handleClick} = props   
const {activeMenu} = props 
console.log(activeMenu)

  return (
    
    <m.main className='cnt-navHamburguer'> 
        <ul  onClick={()=>handleClick()}>
            <m.li
                animate={{
                    rotate: activeMenu ? 40:0,
                    y: activeMenu ? 11:0
                }}
            ></m.li>
             <m.li
                animate={{
                   opacity: activeMenu ? 0:1
                }}
            ></m.li>
           <m.li
                animate={{
                    rotate: activeMenu ? -40:0,
                    y: activeMenu ? -11:0
                }}
            ></m.li>
        </ul>
    </m.main>
  )
}
